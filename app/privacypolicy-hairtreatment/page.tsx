import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, Eye, UserCheck, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy - Sculpt The Maxillofacial Clinic",
  description:
    "Privacy Policy for Sculpt The Maxillofacial Clinic. Learn how we protect and handle your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[#d09a40]/20 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
             <img  className="w-[200px] h-[60px] max-[768px]:w-[150px] max-[768px]:h-[50px] max-[480px]:w-[120px] max-[480px]:h-[40px]" src="bglogo.png" alt="logo" />
            </div>
            <Link href="/hairtreatment">
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
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-[#d09a40]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#d09a40] to-[#d09a40]/70 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">Your privacy and data security are our top priorities</p>
            <p className="text-gray-400 mt-2">Last updated: December 2025</p>
          </div>

          {/* Quick Overview */}
          <div className="bg-gradient-to-r from-[#d09a40]/10 to-transparent rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#d09a40] mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6" />
              Quick Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At Sculpt The Maxillofacial Clinic, we are committed to protecting your personal information and medical
              data. This privacy policy explains how we collect, use, and safeguard your information when you visit our
              website or use our services.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <section className="bg-gray-900/50 rounded-2xl p-8 border border-[#d09a40]/20">
              <h2 className="text-2xl font-bold text-[#d09a40] mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Name, email address, phone number</li>
                    <li>Date of birth and gender</li>
                    <li>Address and contact details</li>
                    <li>Emergency contact information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Medical Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Medical history and current conditions</li>
                    <li>Treatment preferences and consultation notes</li>
                    <li>Before and after photographs (with consent)</li>
                    <li>Insurance and payment information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Website Usage Data</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-gray-900/50 rounded-2xl p-8 border border-[#d09a40]/20">
              <h2 className="text-2xl font-bold text-[#d09a40] mb-6 flex items-center gap-3">
                <UserCheck className="w-6 h-6" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Medical Care</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Providing medical consultations and treatments</li>
                    <li>Scheduling appointments and follow-ups</li>
                    <li>Maintaining medical records</li>
                    <li>Emergency medical situations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Communication</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Appointment reminders and confirmations</li>
                    <li>Treatment updates and aftercare instructions</li>
                    <li>Marketing communications (with consent)</li>
                    <li>Customer service and support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Legal Compliance</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Meeting regulatory requirements</li>
                    <li>Insurance and billing purposes</li>
                    <li>Quality assurance and safety monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Website Improvement</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Analyzing website usage patterns</li>
                    <li>Improving user experience</li>
                    <li>Technical maintenance and security</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-gray-900/50 rounded-2xl p-8 border border-[#d09a40]/20">
              <h2 className="text-2xl font-bold text-[#d09a40] mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6" />
                Data Protection & Security
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We implement industry-standard security measures to protect your personal and medical information:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Technical Safeguards</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security audits and updates</li>
                      <li>Access controls and authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Administrative Safeguards</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>Staff training on privacy practices</li>
                      <li>Limited access on need-to-know basis</li>
                      <li>Regular privacy policy reviews</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-gray-900/50 rounded-2xl p-8 border border-[#d09a40]/20">
              <h2 className="text-2xl font-bold text-[#d09a40] mb-6">Your Privacy Rights</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Access & Control</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Request access to your personal data</li>
                    <li>Update or correct your information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Medical Records</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Access your medical records</li>
                    <li>Request amendments to records</li>
                    <li>Restrict certain uses of information</li>
                    <li>File complaints about privacy practices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-[#d09a40]/10 to-transparent rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#d09a40] mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Contact Us About Privacy
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have questions about this privacy policy or want to exercise your privacy rights, please
                  contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Privacy Officer</h3>
                    <p className="text-gray-400">Dr. Rajesh Kumar</p>
                    <p className="text-gray-400">sculptmaxillo.clinic@gmail.com</p>
                    <p className="text-gray-400">+91 9606601166</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Clinic Address</h3>
                    <p className="text-gray-400"> 315, Sapthagiri 60 Feet, Health Layout,</p>
                    <p className="text-gray-400">Chandrashekhara Layout, Annapurneshwari Nagar,</p>
                    <p className="text-gray-400">Bengaluru, Karnataka 560091, India</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <Link href="/hairtreatment">
              <Button className="bg-[#d09a40] text-black hover:bg-[#d09a40]/90 px-8 py-3">Return to Homepage</Button>
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
