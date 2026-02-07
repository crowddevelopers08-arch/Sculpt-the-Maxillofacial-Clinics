export const runtime = "nodejs";
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface LeadData {
  name: string
  phone: string
  email?: string
  procedure?: string
  date?: string
  time?: string
  message?: string
  city?: string
  age?: string
  treatment?: string
  preferredDate?: string
  consent?: boolean
  source?: string
  formName?: string
}

/**
 * Generate comprehensive form data string with all user details (for system notes)
 */
function generateFormDataString(leadData: LeadData): string {
  const details = [];

  // Add all available fields with their values
  if (leadData.name) details.push(`Name: ${leadData.name}`);
  if (leadData.phone) details.push(`Phone: ${leadData.phone}`);
  if (leadData.email) details.push(`Email: ${leadData.email}`);
  if (leadData.procedure) details.push(`Procedure: ${leadData.procedure}`);
  if (leadData.treatment) details.push(`Treatment: ${leadData.treatment}`);
  if (leadData.date) details.push(`Date: ${leadData.date}`);
  if (leadData.time) details.push(`Time: ${leadData.time}`);
  if (leadData.preferredDate) details.push(`Preferred Date: ${leadData.preferredDate}`);
  if (leadData.city) details.push(`City: ${leadData.city}`);
  if (leadData.age) details.push(`Age: ${leadData.age}`);
  if (leadData.source) details.push(`Source: ${leadData.source}`);
  
  // Always include consent status
  details.push(`Consent: ${leadData.consent ? 'Yes' : 'No'}`);
  
  // Add message (truncated if too long)
  if (leadData.message) {
    const messagePreview = leadData.message.length > 100 
      ? `${leadData.message.substring(0, 100)}...` 
      : leadData.message;
    details.push(`Message: ${messagePreview}`);
  }

  // Join all details with " | " separator
  return details.join(' | ');
}

/**
 * Save lead to database using Prisma
 */
async function saveToDatabase(leadData: LeadData) {
  try {
    // Determine form-specific defaults
    const formName = leadData.formName || 'hairtreatment';
    let defaultSource = 'https://www.sculpttmfc.com/hairtreatment';
    
    if (formName === 'skintreatment') {
      defaultSource = 'https://www.sculpttmfc.com/skintreatment';
    }

    const lead = await prisma.lead.create({
      data: {
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email || '',
        procedure: leadData.procedure || leadData.treatment || '',
        message: leadData.message || '',
        city: leadData.city || '',
        age: leadData.age || '',
        preferredDate: leadData.preferredDate || '',
        consent: leadData.consent || false,
        source: leadData.source || defaultSource,
        formName: formName,
        status: 'NEW',
        telecrmSynced: false // Will be updated after TeleCRM sync
      }
    });
    return lead;
  } catch (error) {
    console.error('Database save error:', error);
    throw new Error('Failed to save lead to database');
  }
}

/**
 * Update lead with TeleCRM sync status
 */
async function updateLeadTelecrmStatus(leadId: string, telecrmId?: string, error?: string) {
  try {
    await prisma.lead.update({
      where: { id: leadId },
      data: {
        telecrmSynced: !error,
        telecrmId: telecrmId || null,
        syncedAt: new Date(),
        error: error || null,
        status: error ? 'ERROR' : 'NEW'
      }
    });
  } catch (error) {
    console.error('Update lead status error:', error);
    // Don't throw error here as TeleCRM sync was successful
  }
}

/**
 * Send lead data to TeleCRM
 */
async function sendToTeleCRM(leadData: LeadData) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000) // 15s timeout

  const endpoint = process.env.TELECRM_API_URL

  if (!endpoint) {
    throw new Error('TELECRM_API_URL environment variable is not set')
  }

  try {
    // Generate comprehensive form data string with all user details (for system notes)
    const formDataString = generateFormDataString(leadData);

    // Get the form name and set appropriate defaults
    const formName = leadData.formName || 'hairtreatment';
    let defaultSource = 'https://www.sculpttmfc.com/hairtreatment';
    let defaultPageName = 'https://www.sculpttmfc.com/hairtreatment';

    if (formName === 'skintreatment') {
      defaultSource = 'https://www.sculpttmfc.com/skintreatment';
      defaultPageName = 'https://www.sculpttmfc.com/skintreatment';
    }

    // Use provided source or set default based on form type
    const leadSource = leadData.source || defaultSource;
    const pageName = leadData.source || defaultPageName;

    // Prepare the TeleCRM payload according to their API structure
    const telecrmPayload = {
      fields: {
        Id: "", // Leave empty for new leads
        name: leadData.name,
        email: leadData.email || "",
        phone: leadData.phone.replace(/\D/g, ''), // Only digits
        city_1: leadData.city || "",
        preferredtime: leadData.time || leadData.preferredDate || "",
        preferreddate: leadData.date || leadData.preferredDate || "",
        message: leadData.message || "",
        select_the_procedure: leadData.procedure || leadData.treatment || "",
        Country: "",
        LeadID: "",
        "CreatedOn": new Date().toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        "Lead Stage": "",
        "Lead Status": "new",
        "Lead Request Type": "consultation",
        "PageName": pageName,
        "State": "",
        "Age": leadData.age || "",
        "FormName": formName
      },
      actions: [
        {
          "type": "SYSTEM_NOTE",
          "text": `Form Name: ${formName}`
        },
        {
          "type": "SYSTEM_NOTE", 
          "text": `Complete Form Data: ${formDataString}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Lead Source: ${leadSource}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Procedure/Treatment: ${leadData.procedure || leadData.treatment || 'Not specified'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Preferred Date: ${leadData.date || leadData.preferredDate || 'Not specified'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Age: ${leadData.age || 'Not specified'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Consent Given: ${leadData.consent ? 'Yes' : 'No'}`
        }
      ]
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TELECRM_API_KEY}`,
        'X-Client-ID': 'nextjs-website-integration',
        'Accept': 'application/json',
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    })

    // Handle empty responses
    if (response.status === 204) {
      clearTimeout(timeout)
      return { 
        status: 'success', 
        message: 'Lead created (204 No Content)',
        synced: true
      }
    }

    const responseText = await response.text()

    // Skip HTML responses
    if (
      responseText.trim().startsWith('<!DOCTYPE') ||
      responseText.trim().startsWith('<html') ||
      responseText.includes('<!DOCTYPE html>')
    ) {
      console.warn(`HTML response from ${endpoint}`, {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        bodyPreview: responseText.slice(0, 200),
      })
      throw new Error('TeleCRM returned HTML response instead of JSON')
    }

    // Parse JSON
    try {
      const data = responseText ? JSON.parse(responseText) : {}
      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status} from ${endpoint}`)
      }
      clearTimeout(timeout)
      return {
        ...data,
        synced: true
      }
    } catch {
      throw new Error(`Invalid JSON from ${endpoint}: ${responseText.slice(0, 100)}...`)
    }
  } catch (error) {
    clearTimeout(timeout)
    throw error instanceof Error ? error : new Error(String(error))
  }
}

/**
 * Handle GET request - Fetch all leads with filtering
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || ''
    const treatment = searchParams.get('treatment') || ''
    const formName = searchParams.get('formName') || ''

    const skip = (page - 1) * limit

    // Build where clause for filtering
    const where: any = {}

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
        { email: { contains: search, mode: 'insensitive' } },
        { procedure: { contains: search, mode: 'insensitive' } },
        { message: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (status) {
      where.status = status
    }

    if (treatment) {
      where.procedure = { contains: treatment, mode: 'insensitive' }
    }

    if (formName) {
      where.formName = formName
    }

    // Get leads with pagination
    const [leads, totalCount] = await Promise.all([
      prisma.lead.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          phone: true,
          email: true,
          procedure: true,
          message: true,
          city: true,
          age: true,
          consent: true,
          source: true,
          formName: true,
          status: true,
          telecrmSynced: true,
          telecrmId: true,
          createdAt: true,
          updatedAt: true
        }
      }),
      prisma.lead.count({ where })
    ])

    // Transform the data to match the frontend interface
    const transformedLeads = leads.map(lead => ({
      id: lead.id,
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      treatment: lead.procedure,
      procedure: lead.procedure,
      message: lead.message,
      city: lead.city,
      age: lead.age,
      consent: lead.consent,
      source: lead.source,
      formName: lead.formName,
      status: mapDbStatusToFrontend(lead.status),
      telecrmSynced: lead.telecrmSynced,
      telecrmId: lead.telecrmId,
      createdAt: lead.createdAt.toISOString(),
      updatedAt: lead.updatedAt.toISOString()
    }))

    return NextResponse.json({
      leads: transformedLeads,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      },
      filters: {
        search,
        status,
        treatment,
        formName
      }
    })

  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

/**
 * Map database status to frontend status
 */
function mapDbStatusToFrontend(dbStatus: string): 'new' | 'contacted' | 'scheduled' | 'converted' | 'lost' {
  const statusMap: { [key: string]: any } = {
    'NEW': 'new',
    'CONTACTED': 'contacted',
    'SCHEDULED': 'scheduled',
    'CONVERTED': 'converted',
    'LOST': 'lost',
    'ERROR': 'new' // Map ERROR to new for frontend display
  }
  
  return statusMap[dbStatus] || 'new'
}

/**
 * Handle POST request for both hair and skin treatment forms
 */
export async function POST(request: Request) {
  let data: LeadData;
  let savedLead: any = null;

  try {
    data = await request.json()

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone' },
        { status: 400 }
      )
    }

    // Determine form type and set appropriate defaults
    const formName = data.formName || 'hairtreatment';
    
    // Step 1: Save to database first
    savedLead = await saveToDatabase(data);
    console.log('Lead saved to database:', { id: savedLead.id, formName });

    // Step 2: Send to TeleCRM
    let telecrmResponse = null;
    let telecrmError = null;

    try {
      telecrmResponse = await sendToTeleCRM(data);
      console.log('Lead sent to TeleCRM successfully:', { formName });

      // Update database with TeleCRM sync status
      if (savedLead) {
        await updateLeadTelecrmStatus(savedLead.id, telecrmResponse?.id);
      }
    } catch (error) {
      telecrmError = error;
      console.error('TeleCRM submission failed:', { formName, error: error instanceof Error ? error.message : String(error) });
      
      // Update database with TeleCRM error status
      if (savedLead) {
        await updateLeadTelecrmStatus(
          savedLead.id, 
          undefined, 
          error instanceof Error ? error.message : String(error)
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        databaseId: savedLead.id,
        telecrmSynced: !telecrmError,
        telecrmResponse: telecrmResponse,
        telecrmError: telecrmError ? (telecrmError instanceof Error ? telecrmError.message : String(telecrmError)) : null,
        timestamp: new Date().toISOString(),
        formName: formName,
        message: telecrmError 
          ? 'Lead saved to database but TeleCRM sync failed' 
          : 'Lead saved successfully and synced with TeleCRM'
      },
      { status: 201 }
    )
  } catch (error) {
    const formName = data?.formName || 'hairtreatment';

    console.error('Lead submission error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      formName: formName,
      databaseSaved: !!savedLead
    })

    // If database save failed but we have data, try to save with error status
    if (!savedLead && data) {
      try {
        let defaultSource = 'https://www.sculpttmfc.com/hairtreatment';
        if (formName === 'skintreatment') {
          defaultSource = 'https://www.sculpttmfc.com/skintreatment';
        }

        const errorLead = await prisma.lead.create({
          data: {
            name: data.name,
            phone: data.phone,
            email: data.email || '',
            procedure: data.procedure || data.treatment || '',
            message: data.message || '',
            source: data.source || defaultSource,
            formName: formName,
            status: 'ERROR',
            error: error instanceof Error ? error.message : 'Unknown error',
            telecrmSynced: false
          }
        });
        console.log('Error lead saved to database:', errorLead.id);
      } catch (dbError) {
        console.error('Failed to save error lead to database:', dbError);
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process lead',
        details: error instanceof Error ? error.message : 'Unknown error',
        databaseSaved: !!savedLead,
        referenceId: `ERR-${Date.now()}`,
        formName: formName
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect();
  }
}