import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You - Sculpt The Maxillofacial Clinic",
  description:
    "Thank you for booking your consultation with Sculpt The Maxillofacial Clinic. We will contact you soon.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Google Ads Conversion Tracking - Thankyou page */}
      <Script id="google-ads-conversion-thankyou" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-11327193954/P8E-COmY4N0aEOKGnZkq'});
        `}
      </Script>
      
      {/* Google Ads Conversion Tracking - Submit Lead Form */}
      <Script id="google-ads-conversion-lead-form" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-11327193954/e_J5CLrpuZIbEOKGnZkq'});
        `}
      </Script>
      
      {/* Header */}
      <header className="border-b border-[#d09a40]/20 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
           <div className="flex-shrink-0">
             <img  className="w-[200px] h-[60px] max-[768px]:w-[150px] max-[768px]:h-[50px] max-[480px]:w-[120px] max-[480px]:h-[40px]" src="bglogo.png" alt="logo" />
            </div>
            <Link href="/">
              <Button
                variant="outline"
                className="border-[#d09a40] text-[#d09a40] hover:bg-[#d09a40] hover:text-black bg-transparent"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#d09a40]/20 rounded-full blur-xl animate-pulse"></div>
              <CheckCircle className="relative w-24 h-24 text-[#d09a40] animate-bounce" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#d09a40] to-[#d09a40]/70 bg-clip-text text-transparent">
              Thank You!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your consultation request has been successfully submitted.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our team at Sculpt The Maxillofacial Clinic will review your request and contact you within 24 hours to
              schedule your consultation.
            </p>
          </div>

          {/* What's Next Section */}
          <div className="bg-gray-900/50 rounded-2xl p-8 mb-12 border border-[#d09a40]/20">
            <h2 className="text-2xl font-bold text-[#d09a40] mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#d09a40]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#d09a40] font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-gray-400 text-sm">Our team reviews your consultation request and medical history</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#d09a40]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#d09a40] font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-gray-400 text-sm">We'll call you within 24 hours to schedule your appointment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#d09a40]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#d09a40] font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-gray-400 text-sm">Meet with Dr. Rajesh Kumar for your personalized consultation</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-[#d09a40]/10 to-transparent rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#d09a40] mb-6">Need Immediate Assistance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-[#d09a40]" />
                <span>+91 9606601166</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-[#d09a40]" />
                <span>sculptmaxillo.clinic@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              <MapPin className="w-5 h-5 text-[#d09a40]" />
              <span>315, Sapthagiri 60 Feet, Health Layout, Chandrashekhara Layout, Annapurneshwari Nagar, Bengaluru, Karnataka 560091, India</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-[#d09a40] text-black hover:bg-[#d09a40]/90 px-8 py-3">Return to Homepage</Button>
            </Link>
            <Link href="/privacy-policy">
              <Button
                variant="outline"
                className="border-[#d09a40] text-[#d09a40] hover:bg-[#d09a40] hover:text-black px-8 py-3 bg-transparent"
              >
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#d09a40]/20 bg-gray-900/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Sculpt The Maxillofacial Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}