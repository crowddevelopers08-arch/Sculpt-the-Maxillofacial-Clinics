"use client";

import { Shield, Lock, Eye, FileText, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const PrivacyPolicy = () => {
  const router = useRouter();

  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    cream: "#fef3e2",
  };

  const handleGoHome = () => {
    router.push("/hair-transplant");
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.cream }}
    >
      {/* Animated Background Elements - Same as HeroSection */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
        <div className="floating-circle circle-5"></div>

        {/* Gradient Orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-5xl relative z-10 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.primaryLight }}
            >
              <Shield className="w-12 h-12" style={{ color: colors.primary }} />
            </div>
          </div>
          
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: colors.primary }}
          >
            Privacy Policy
          </h1>
          
          <p className="mt-4 max-w-3xl mx-auto" style={{ color: colors.textLight }}>
            At Dr. Priyanka Raj's Clinic, we are committed to protecting your personal 
            and medical information. This policy outlines how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* Main Content Cards */}
        <div className="space-y-8">
          {/* Introduction Card */}
          <div
            className="rounded-3xl p-6 md:p-8 shadow-xl"
            style={{
              backgroundColor: colors.white,
              border: `3px solid ${colors.primaryLight}`,
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.primaryLight }}
              >
                <FileText className="w-7 h-7" style={{ color: colors.primary }} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: colors.primary }}>
                Introduction
              </h2>
            </div>
            
            <div className="space-y-4" style={{ color: colors.text }}>
              <p>
                Dr. Priyanka Raj's Clinic ("we," "our," or "us") is committed to protecting 
                the privacy and confidentiality of our client's personal and medical information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our clinic or use our services.
              </p>
              <p>
                As a medical facility specializing in hair transplant and maxillofacial procedures, 
                we adhere to the highest standards of medical confidentiality and data protection.
              </p>
            </div>
          </div>

          {/* Two Column Section - Information We Collect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Personal Information Card */}
            <div
              className="rounded-3xl p-6 md:p-8 shadow-xl h-full"
              style={{
                backgroundColor: colors.white,
                border: `3px solid ${colors.primaryLight}`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.primaryLight }}
                >
                  <Lock className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: colors.primary }}>
                  Information We Collect
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: colors.text }}>
                    Personal Information:
                  </h4>
                  <ul className="space-y-2 pl-5" style={{ color: colors.textLight }}>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      Full name, date of birth, gender
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      Contact information (phone, email, address)
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      Government ID and insurance details
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      Emergency contact information
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: colors.text }}>
                    Medical Information:
                  </h4>
                  <ul className="space-y-2 pl-5" style={{ color: colors.textLight }}>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      Medical history and current health status
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      Treatment records and progress notes
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      Diagnostic test results and imaging
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      Medication and prescription records
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information Card */}
            <div
              className="rounded-3xl p-6 md:p-8 shadow-xl h-full"
              style={{
                backgroundColor: colors.white,
                border: `3px solid ${colors.primaryLight}`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.primaryLight }}
                >
                  <Eye className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: colors.primary }}>
                  How We Use Your Information
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl" style={{ backgroundColor: colors.primaryLight + '20' }}>
                  <h4 className="font-bold mb-2" style={{ color: colors.primaryDark }}>
                    Medical Purposes
                  </h4>
                  <p style={{ color: colors.textLight }}>
                    To provide accurate diagnosis, treatment planning, and medical care
                  </p>
                </div>
                
                <div className="p-4 rounded-xl" style={{ backgroundColor: colors.primaryLight + '20' }}>
                  <h4 className="font-bold mb-2" style={{ color: colors.primaryDark }}>
                    Communication
                  </h4>
                  <p style={{ color: colors.textLight }}>
                    To schedule appointments, send reminders, and provide follow-up care
                  </p>
                </div>
                
                <div className="p-4 rounded-xl" style={{ backgroundColor: colors.primaryLight + '20' }}>
                  <h4 className="font-bold mb-2" style={{ color: colors.primaryDark }}>
                    Legal Compliance
                  </h4>
                  <p style={{ color: colors.textLight }}>
                    To comply with medical regulations and maintain required records
                  </p>
                </div>
                
                <div className="p-4 rounded-xl" style={{ backgroundColor: colors.primaryLight + '20' }}>
                  <h4 className="font-bold mb-2" style={{ color: colors.primaryDark }}>
                    Quality Improvement
                  </h4>
                  <p style={{ color: colors.textLight }}>
                    To improve our services and ensure patient safety
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection Card */}
          <div
            className="rounded-3xl p-6 md:p-8 shadow-xl"
            style={{
              backgroundColor: colors.white,
              border: `3px solid ${colors.primaryLight}`,
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
              Data Protection & Security
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: colors.primaryLight }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.white }}>
                  <Lock className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
                <h4 className="font-bold mb-2" style={{ color: colors.primaryDark }}>
                  Secure Storage
                </h4>
                <p className="text-sm" style={{ color: colors.text }}>
                  Electronic records protected with encryption and secure servers
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: colors.primaryLight }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.white }}>
                  <Shield className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
                <h4 className="font-bold mb-2" style={{ color: colors.primaryDark }}>
                  Access Control
                </h4>
                <p className="text-sm" style={{ color: colors.text }}>
                  Strict access controls allowing only authorized medical staff
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: colors.primaryLight }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.white }}>
                  <Eye className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
                <h4 className="font-bold mb-2" style={{ color: colors.primaryDark }}>
                  Regular Audits
                </h4>
                <p className="text-sm" style={{ color: colors.text }}>
                  Regular security audits and compliance checks
                </p>
              </div>
            </div>
          </div>

          {/* Patient Rights Card */}
          <div
            className="rounded-3xl p-6 md:p-8 shadow-xl"
            style={{
              backgroundColor: colors.white,
              border: `3px solid ${colors.primaryLight}`,
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
              Your Rights as a Client
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.primaryLight + '20' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: colors.primary }}>
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: colors.text }}>
                    Right to Access
                  </h4>
                  <p style={{ color: colors.textLight }}>
                    You have the right to access your medical records and request copies
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.primaryLight + '20' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: colors.primary }}>
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: colors.text }}>
                    Right to Correction
                  </h4>
                  <p style={{ color: colors.textLight }}>
                    You may request corrections to inaccurate or incomplete information
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.primaryLight + '20' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: colors.primary }}>
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: colors.text }}>
                    Right to Consent
                  </h4>
                  <p style={{ color: colors.textLight }}>
                    We obtain your explicit consent before sharing information with third parties
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.primaryLight + '20' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: colors.primary }}>
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: colors.text }}>
                    Right to Complain
                  </h4>
                  <p style={{ color: colors.textLight }}>
                    You have the right to file a complaint if you believe your privacy rights have been violated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleGoHome}
            className="group relative px-8 py-4 rounded-full font-bold text-white border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 shadow-lg"
            style={{
              backgroundColor: colors.primary,
              borderColor: colors.primary,
            }}
          >
            <Home className="w-5 h-5" />
            Back to Homepage
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        /* Floating Circles - Same as HeroSection */
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(188, 156, 36, 0.12) 0%,
            rgba(188, 156, 36, 0.06) 100%
          );
          animation: float-around 12s ease-in-out infinite;
        }

        .circle-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          left: 10%;
          animation-delay: 1.5s;
        }

        .circle-3 {
          width: 80px;
          height: 80px;
          top: 30%;
          right: 15%;
          animation-delay: 3s;
        }

        .circle-4 {
          width: 120px;
          height: 120px;
          bottom: 20%;
          right: 10%;
          animation-delay: 4.5s;
        }

        .circle-5 {
          width: 90px;
          height: 90px;
          top: 70%;
          right: 30%;
          animation-delay: 6s;
        }

        @keyframes float-around {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(25px, -25px) scale(1.15);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.85);
          }
          75% {
            transform: translate(20px, 25px) scale(1.1);
          }
        }

        /* Gradient Orbs - Same as HeroSection */
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: pulse-glow 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(188, 156, 36, 0.4) 0%,
            transparent 70%
          );
          top: -100px;
          right: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: radial-gradient(
            circle,
            rgba(255, 184, 122, 0.3) 0%,
            transparent 70%
          );
          bottom: -50px;
          left: -50px;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            rgba(244, 232, 193, 0.5) 0%,
            transparent 70%
          );
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 4s;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-circle {
            display: none;
          }

          .gradient-orb {
            filter: blur(40px);
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;