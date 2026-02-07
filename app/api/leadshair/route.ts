// app/api/leadshair/route.ts

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
  
  details.push(`Consent: ${leadData.consent ? 'Yes' : 'No'}`);
  
  if (leadData.message) {
    const messagePreview = leadData.message.length > 100 
      ? `${leadData.message.substring(0, 100)}...` 
      : leadData.message;
    details.push(`Message: ${messagePreview}`);
  }

  return details.join(' | ');
}

/**
 * Send lead data to TeleCRM
 */
async function sendToTeleCRM(leadData: LeadData) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  const endpoint = process.env.TELECRM_API_URL

  if (!endpoint) {
    throw new Error('TELECRM_API_URL environment variable is not set')
  }

  try {
    const formDataString = generateFormDataString(leadData);
    const simpleFormName = leadData.formName || 'Hairtreatment';

    const telecrmPayload = {
      fields: {
        Id: "",
        name: leadData.name,
        email: leadData.email || "",
        phone: leadData.phone.replace(/\D/g, ''),
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
        "PageName": leadData.source || "https://www.sculpttmfc.com/hairtreatment",
        "State": "",
        "Age": leadData.age || "",
        "FormName": simpleFormName
      },
      actions: [
        {
          "type": "SYSTEM_NOTE",
          "text": `Form Name: ${simpleFormName}`
        },
        {
          "type": "SYSTEM_NOTE", 
          "text": `Complete Form Data: ${formDataString}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Lead Source: ${leadData.source || 'https://www.sculpttmfc.com/hairtreatment'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Procedure: ${leadData.procedure || leadData.treatment || 'Not specified'}`
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

    if (response.status === 204) {
      clearTimeout(timeout)
      return { 
        status: 'success', 
        message: 'Lead created (204 No Content)',
        synced: true
      }
    }

    const responseText = await response.text()

    if (
      responseText.trim().startsWith('<!DOCTYPE') ||
      responseText.trim().startsWith('<html') ||
      responseText.includes('<!DOCTYPE html>')
    ) {
      console.warn(`HTML response from ${endpoint}`)
      throw new Error('TeleCRM returned HTML response instead of JSON')
    }

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
 * Save lead data to database using Prisma
 */
async function saveToDatabase(leadData: LeadData, telecrmResult?: any) {
  try {
    // Combine procedure and treatment data
    const procedureData = leadData.procedure || leadData.treatment;
    
    // Combine date preferences
    const preferredDateData = leadData.preferredDate || leadData.date || leadData.time;

    const lead = await prisma.lead.create({
      data: {
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email || null,
        procedure: procedureData || null,
        message: leadData.message || null,
        city: leadData.city || null,
        age: leadData.age || null,
        preferredDate: preferredDateData || null,
        consent: leadData.consent || false,
        source: leadData.source || 'https://www.sculpttmfc.com/hairtreatment',
        formName: leadData.formName || 'hairtreatment',
        status: telecrmResult?.synced ? 'NEW' : 'ERROR',
        telecrmSynced: !!telecrmResult?.synced,
        telecrmId: telecrmResult?.id || null,
        syncedAt: telecrmResult?.synced ? new Date() : null,
        error: telecrmResult?.synced ? null : (telecrmResult?.error || 'TeleCRM sync failed')
      },
    });

    return lead;
  } catch (error) {
    console.error('Database save error:', error);
    throw new Error('Failed to save lead to database');
  }
}

/**
 * Handle POST request
 */
// In your existing route.ts, update the POST function to handle both forms:

/**
 * Handle POST request for both hair and skin treatments
 */
export async function POST(request: Request) {
  let data: LeadData;

  try {
    data = await request.json()

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone' },
        { status: 400 }
      )
    }

    // Determine the form type and set appropriate defaults
    const formName = data.formName || 'hairtreatment';
    let defaultSource = 'https://www.sculpttmfc.com/hairtreatment';
    let defaultPageName = 'https://www.sculpttmfc.com/hairtreatment';

    if (formName === 'skintreatment') {
      defaultSource = 'https://www.sculpttmfc.com/skintreatment';
      defaultPageName = 'https://www.sculpttmfc.com/skintreatment';
    }

    // Use provided source or set default based on form type
    const leadSource = data.source || defaultSource;
    const pageName = data.source || defaultPageName;

    // Attempt TeleCRM submission first
    let telecrmResponse = null;
    let telecrmSuccess = false;

    try {
      telecrmResponse = await sendToTeleCRM({
        ...data,
        source: leadSource,
        formName: formName
      });
      telecrmSuccess = true;
      console.log('TeleCRM submission successful for form:', formName);
    } catch (telecrmError) {
      console.error('TeleCRM submission failed:', telecrmError);
      telecrmResponse = {
        error: telecrmError instanceof Error ? telecrmError.message : 'Unknown TeleCRM error',
        synced: false
      };
    }

    // Save to database with TeleCRM result
    const dbLead = await saveToDatabase({
      ...data,
      source: leadSource,
      formName: formName
    }, telecrmResponse);
    
    console.log('Lead saved to database with ID:', dbLead.id, 'Form:', formName);

    return NextResponse.json(
      {
        success: true,
        databaseId: dbLead.id,
        telecrmSynced: telecrmSuccess,
        telecrmResponse: telecrmResponse,
        timestamp: new Date().toISOString(),
        formName: formName
      },
      { status: 201 }
    )
  } catch (error) {
    const formName = data?.formName || 'hairtreatment';

    console.error('Form submission error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      formName: formName
    })

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process form submission',
        details: error instanceof Error ? error.message : 'Unknown error',
        referenceId: `ERR-${Date.now()}`,
        formName: formName
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect();
  }
}

// GET endpoint to retrieve hair treatment leads specifically
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const formName = searchParams.get('formName') || 'hairtreatment';
    const skip = (page - 1) * limit;

    const leads = await prisma.lead.findMany({
      where: {
        formName: formName
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        procedure: true,
        age: true,
        city: true,
        preferredDate: true,
        formName: true,
        consent: true,
        status: true,
        telecrmSynced: true,
        telecrmId: true,
        source: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const total = await prisma.lead.count({
      where: {
        formName: formName
      }
    });

    return NextResponse.json({
      leads,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}