"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react"

export default function CombinedSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
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

    if (sectionRef.current) observer.observe(sectionRef.current)
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
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          procedure: formData.treatment,
          source: "https://www.sculpttmfc.com/",
          formName: "Skin and Hair Consultation Form",
        }),
      })

      // Handle non-OK responses safely
      let result = null
      try {
        result = await res.json()
      } catch {
        console.warn("Response body was empty or not JSON")
      }

      if (!res.ok) {
        console.error("API Error:", result || res.statusText)
        throw new Error(result?.error || "Failed to submit form")
      }

      console.log("API success:", result)
      setIsFormSubmitted(true)

      setTimeout(() => {
        router.push("/thank-you")
      }, 500)
    } catch (error) {
      console.error("Form submission error:", error)
      setError("There was an error submitting your form. Please try again or contact us directly.")
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

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
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

        .gold-button {
          background: #c99500;
          color: #000000;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .gold-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: all 0.6s ease;
        }

        .gold-button:hover::before {
          left: 100%;
        }

        .gold-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(201, 149, 0, 0.3);
        }
      `}</style>

      <section ref={sectionRef} className="bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-6">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 max-[430px]:gap-4 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="px-4 max-[430px]:px-0 lg:px-8">
                <div className="text-justify lg:text-left">
                  <h2
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                  >
                    Skin That Glows, Hair That Grows,{" "}
                    <span className="text-[#c99500]">All Made Simple</span>
                  </h2>

                  <div
                    className={`space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed ${
                      isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
                    }`}
                  >
                    <p>
                      At Sculpt The Maxillofacial Clinic, we believe beauty and confidence go hand in hand.
                      Our mission is simple: to help you feel like yourself again.
                    </p>
                    <p>
                      Every plan begins with science and ends with results that feel natural, not forced.
                      We make sure you have a solution that is safe, proven, and built around you.
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#c99500]">
                      Because here, it is never just a treatment. It is a turning point in how you see yourself.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                {isFormSubmitted ? (
                  <Card className="consultation-card gold-border p-6 sm:p-8 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#c99500]/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#c99500]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                      Thank You for Your Interest!
                    </h3>
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                      Your consultation request has been submitted successfully. We'll contact you within 24 hours.
                    </p>
                    <p className="text-sm text-gray-600">Redirecting to thank you page...</p>
                  </Card>
                ) : (
                  <section id="contact-section" className="pt-4 sm:pt-8">
                    <Card className="consultation-card p-4 sm:p-6 md:p-8 gold-shadow transition-all duration-300">
                      <CardHeader className="px-0 pt-0">
                        <CardTitle className="text-xl sm:text-2xl text-black">
                          Schedule Your Consultation
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm sm:text-base">
                          Fill out the form below and we'll get back to you within 24 hours.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-0 pb-0">
                        {error && (
                          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <p className="text-red-700 text-sm">{error}</p>
                          </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-black text-sm sm:text-base">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-[#c99500] focus:ring-[#c99500]/20"
                              placeholder="Enter your full name"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-black text-sm sm:text-base">
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-[#c99500] focus:ring-[#c99500]/20"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="treatment" className="text-black text-sm sm:text-base">
                              Treatment of Interest
                            </Label>
                            <Select
                              value={formData.treatment}
                              onValueChange={(value) => handleInputChange("treatment", value)}
                            >
                              <SelectTrigger className="bg-white border-gray-300 text-black focus:border-[#c99500] focus:ring-[#c99500]/20 text-sm sm:text-base">
                                <SelectValue placeholder="Select a treatment" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-gray-300">
                                <SelectItem value="Hair Transplant (FUE/FUT)">
                                  Hair Transplant (FUE/FUT)
                                </SelectItem>
                                <SelectItem value="Skin Rejuvenation">Skin Rejuvenation</SelectItem>
                                <SelectItem value="Facial Contouring">Facial Contouring</SelectItem>
                                <SelectItem value="Anti-Aging Treatments">Anti-Aging Treatments</SelectItem>
                                <SelectItem value="Laser Therapy">Laser Therapy</SelectItem>
                                <SelectItem value="Dermal Fillers">Dermal Fillers</SelectItem>
                                <SelectItem value="General Consultation">General Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-black text-sm sm:text-base">
                              Additional Message
                            </Label>
                            <Textarea
                              id="message"
                              value={formData.message}
                              onChange={(e) => handleInputChange("message", e.target.value)}
                              className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-[#c99500] focus:ring-[#c99500]/20 min-h-[100px] text-sm sm:text-base"
                              placeholder="Tell us about your concerns or questions..."
                            />
                          </div>

                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="consent"
                              checked={formData.consent}
                              onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                              className="border-gray-400 data-[state=checked]:bg-[#c99500] data-[state=checked]:border-[#c99500] mt-1"
                            />
                            <Label htmlFor="consent" className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              I consent to being contacted by Sculpt Maxillofacial Clinic and understand that my
                              information will be handled according to the privacy policy.
                            </Label>
                          </div>

                          <Button
                            type="submit"
                            className="w-full gold-button font-semibold py-3 text-base sm:text-lg"
                            disabled={!formData.consent || isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Book My Consultation"}
                            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
