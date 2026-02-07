"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react"

export default function CombinedSectionhair() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    consent: false,
  })

  const router = useRouter()
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    if (!formData.consent) {
      setError("Please consent to being contacted before submitting the form")
      return
    }

    setIsSubmitting(true)

    try {
      // Send to your API endpoint with Prisma
      const response = await fetch('/api/leadshair', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          procedure: formData.treatment, // Map treatment to procedure
          source: 'https://www.sculpttmfc.com/hairtreatment',
          formName: 'hairtreatment'
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      console.log('Lead saved with ID:', result.databaseId)
      console.log('TeleCRM synced:', result.telecrmSynced)

      if (!result.telecrmSynced) {
        console.warn('Lead saved to database but TeleCRM sync failed')
        // Continue with success since data is saved in database
      }

      setIsFormSubmitted(true)
      
      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        router.push('/thankyou-hairtreatments')
      }, 500)
    } catch (error) {
      console.error('Form submission error:', error)
      setError('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
     <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .gold-accent {
          position: relative;
        }
        
        .gold-accent::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: #c99500;
        }
        
        .gold-border {
          border: 1px solid #c99500;
        }
        
        .gold-shadow:hover {
          box-shadow: 0 10px 25px rgba(201, 149, 0, 0.15);
        }
        
        .consultation-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }
        
        .submit-button {
          position: relative;
          width: 100%;
          margin-top: 1rem;
        }
        
        .submit-button-inner {
          position: absolute;
          transition: all 0.2s ease;
          border-radius: 9999px;
          inset: -2px;
          background: linear-gradient(to right, #c99500, #e6bc4e);
          opacity: 0;
          z-index: 0;
        }
        
        .submit-button:hover .submit-button-inner {
          opacity: 1;
        }
        
        .submit-button-content {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.75rem 1.5rem;
          background-color: #000000;
          color: #ffffff;
          border: 1px solid transparent;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.2s ease;
          z-index: 1;
        }
        
        .submit-button:hover .submit-button-content {
          box-shadow: 0 10px 25px rgba(201, 149, 0, 0.3);
          transform: translateY(-2px);
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .submit-button:disabled .submit-button-inner {
          opacity: 0;
        }
        
        .submit-button:disabled .submit-button-content {
          background-color: #666;
          transform: none;
          box-shadow: none;
        }
      `}</style>
    
      <section ref={sectionRef} className="bg-white" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="px-4 sm:px-6 lg:px-8 py-12 max-[470px]:py-2 lg:py-20">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Content */}
              <div className="text-left">
                <h2
                  className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                >
                  Hair You Thought Was Gone, <span className="text-[#c99500]">Back for Good</span>
                </h2>

                <div
                  className={`space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                >
                  <p>
                    At Sculpt The Maxillofacial Clinic, we know hair loss isn't just about appearance. 
                    It affects the way you feel every single day. Our hair transplant solutions are 
                    designed to restore receding hairlines and thinning crowns with results that 
                    feel truly yours.
                  </p>

                  <p>
                    Each procedure starts with science and ends with hair that grows naturally and 
                    lasts. Whatever caused your hair loss, whether genetics, age, or lifestyle, we 
                    create a safe and proven plan built for you.
                  </p>
                </div>
              </div>
              
              <section id="hairform">
              {/* Right Column - Form */}
              <div className="w-full">
                {isFormSubmitted ? (
                  <Card className="consultation-card gold-border p-6 text-center">
                    <div className="w-16 h-16 bg-[#c99500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#c99500]" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">Thank You for Your Interest!</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Your consultation request has been submitted successfully. Redirecting to thank you page...
                    </p>
                  </Card>
                ) : (
                  <Card className="consultation-card p-6 gold-shadow transition-all duration-300">
                    <CardHeader className="px-0 pt-0 pb-4">
                      <CardTitle className="text-xl text-black text-left">Schedule Your Consultation</CardTitle>
                      <CardDescription className="text-gray-600 text-sm text-left">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start text-left">
                          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p className="text-red-700 text-sm">{error}</p>
                        </div>
                      )}
                      
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2 text-left">
                          <Label htmlFor="name" className="text-black text-sm">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="bg-white border-[#c99500] text-black placeholder:text-gray-400 focus:border-[#c99500] focus:ring-[#c99500]/20"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div className="space-y-2 text-left">
                          <Label htmlFor="phone" className="text-black text-sm">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-[#c99500] focus:ring-[#c99500]/20"
                            placeholder=""
                            required
                          />
                        </div>

                        <div className="space-y-2 text-left">
                          <Label htmlFor="treatment" className="text-black text-sm">
                            Which hair concern are you facing?
                          </Label>
                          <Select value={formData.treatment} onValueChange={(value) => handleInputChange("treatment", value)}>
                            <SelectTrigger className="bg-white border-gray-300 text-black focus:border-[#c99500] focus:ring-[#c99500]/20 text-sm text-left">
                              <SelectValue placeholder="Select a treatment" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              <SelectItem value="Hair fall / excessive shedding" className="text-black hover:bg-[#c99500]/10 text-left">
                                Hair fall / excessive shedding
                              </SelectItem>
                              <SelectItem value="Thinning / reduced density" className="text-black hover:bg-[#c99500]/10 text-left">
                                Thinning / reduced density
                              </SelectItem>
                              <SelectItem value="Dandruff / flaky, itchy scalp" className="text-black hover:bg-[#c99500]/10 text-left">
                                Dandruff / flaky, itchy scalp
                              </SelectItem>
                              <SelectItem value="Oily scalp & greasy roots" className="text-black hover:bg-[#c99500]/10 text-left">
                                Oily scalp & greasy roots
                              </SelectItem>
                              <SelectItem value="Dry, frizzy, rough hair" className="text-black hover:bg-[#c99500]/10 text-left">
                                Dry, frizzy, rough hair
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-start space-x-2 pt-2 text-left">
                          <Checkbox 
                            id="consent" 
                            checked={formData.consent}
                            onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                            className="data-[state=checked]:bg-[#c99500] data-[state=checked]:text-black mt-1"
                          />
                          <label
                            htmlFor="consent"
                            className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I consent to being contacted by the clinic for follow-up
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={!formData.consent || isSubmitting}
                          className="relative group rounded-full w-full mt-4"
                        >
                          {/* Gradient border & glow */}
                          <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#c99500] to-[#e6bc4e] transition-all duration-200 group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>

                          {/* Inner button */}
                          <span className="relative inline-flex items-center justify-center px-6 py-3 text-base font-normal text-white bg-black rounded-full w-full">
                            {isSubmitting ? "Submitting..." : "Book My Consultation"}
                            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                          </span>
                        </button>

                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}