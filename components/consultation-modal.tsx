"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, ArrowRight, X, Phone, Mail, User, Calendar, MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"

// Consultation Modal Component
interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    preferredDate: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const treatments = [
    "Hair Transplant (FUE/FUT)",
    "Skin Rejuvenation",
    "Facial Contouring",
    "Anti-Aging Treatments",
    "Acne Scar Treatment",
    "Laser Hair Removal",
    "Fillers",
    "Chemical Peels",
    "Other",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          procedure: formData.treatment,
          date: formData.preferredDate,
          source: 'consultation-modal',
          consent: true // Modal form implicitly gets consent by submission
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }
      
      // Reset and close after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          treatment: "",
          preferredDate: "",
          message: "",
        })
        onClose()
        router.push("/thank-you")
      }, 1000)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{fontFamily: "'Outfit', sans-serif"}}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-fade-in-up">
          {/* Header */}
          <div className="sticky top-0 bg-black text-white p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#d09a40] mb-2">Book Your Consultation</h2>
                <p className="text-gray-300">Transform your appearance with expert care</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#d09a40] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">Your consultation request has been submitted successfully.</p>
                <p className="text-sm text-gray-500">
                  Our team will contact you within 24 hours to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09a40] focus:border-[#d09a40] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09a40] focus:border-[#d09a40] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09a40] focus:border-[#d09a40] transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09a40] focus:border-[#d09a40] transition-colors"
                    />
                  </div>
                </div>

                {/* Treatment Selection */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Treatment of Interest *</label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09a40] focus:border-[#d09a40] transition-colors"
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full h-[50px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09a40] focus:border-[#d09a40] transition-colors resize-none"
                    placeholder="Tell us about your concerns or questions..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#d09a40] hover:bg-[#b8853a] text-black font-semibold py-4 text-lg transition-colors disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Book My Consultation</span>
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
