"use client";

import { CheckCircle, Home, Phone, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
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

  const handleBookAnother = () => {
    window.location.href = "/contact";
  };

  return (
    <div
      className="relative overflow-hidden flex flex-col items-center justify-center py-12"
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
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center space-y-4">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div
              className="w-22 h-22 rounded-full flex items-center justify-center animate-bounce-gentle"
              style={{ backgroundColor: colors.primaryLight }}
            >
              <CheckCircle
                className="w-10 h-10"
                style={{ color: colors.primary }}
              />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-3">
            <h1
              className="text-2xl md:text-4xl lg:text-5xl mb-0 font-extrabold leading-tight"
              style={{ color: colors.primary }}
            >
              Thank You!
            </h1>

            <h2
              className="text-md md:text-xl font-bold"
              style={{ color: colors.text }}
            >
              Your Appointment Has Been Confirmed
            </h2>
          </div>

          {/* Two Cards Side by Side - Desktop, Stacked on Mobile */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
            {/* Left Card - Thank You Message */}
            <div
              className="flex-1 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col justify-center"
              style={{
                backgroundColor: colors.white,
                border: `3px solid ${colors.primaryLight}`,
              }}
            >
              <h3
                className="text-xl md:text-2xl font-bold mb-6 text-left"
                style={{ color: colors.primary }}
              >
                Appointment Confirmed
              </h3>
              
              <div className="text-left space-y-4">
                <p className="text-lg leading-relaxed" style={{ color: colors.text }}>
                  Dear Patient, we have received your consultation request. Our
                  team at{" "}
                  <span style={{ color: colors.primary, fontWeight: "bold" }}>
                    Dr. Priyanka Raj's Clinic
                  </span>{" "}
                  will contact you within 24 hours to confirm your appointment
                  details.
                </p>
                
                <div className="pt-4 border-t" style={{ borderColor: colors.primaryLight }}>
                  <p className="font-semibold" style={{ color: colors.primary }}>
                    Important Note:
                  </p>
                  <p style={{ color: colors.textLight }}>
                    Please keep your phone available for our confirmation call. 
                    Check your email (including spam folder) for appointment details.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card - What Happens Next */}
            <div
              className="flex-1 p-6 md:p-8 rounded-3xl shadow-2xl"
              style={{
                backgroundColor: colors.white,
                border: `3px solid ${colors.primaryLight}`,
              }}
            >
              <h3
                className="text-xl md:text-2xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                What Happens Next?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                    style={{ backgroundColor: colors.primaryLight }}
                  >
                    <Phone
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-lg"
                      style={{ color: colors.text }}
                    >
                      Step 1: Confirmation Call
                    </h4>
                    <p style={{ color: colors.textLight }}>
                      Our clinic coordinator will call you within 24 hours to 
                      confirm the appointment date and time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                    style={{ backgroundColor: colors.primaryLight }}
                  >
                    <Calendar
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-lg"
                      style={{ color: colors.text }}
                    >
                      Step 2: Appointment Preparation
                    </h4>
                    <p style={{ color: colors.textLight }}>
                      You'll receive an email with pre-appointment instructions, 
                      required documents, and clinic location details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                    style={{ backgroundColor: colors.primaryLight }}
                  >
                    <CheckCircle
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-lg"
                      style={{ color: colors.text }}
                    >
                      Step 3: Consultation Day
                    </h4>
                    <p style={{ color: colors.textLight }}>
                      Visit our clinic at the scheduled time for your 
                      personalized consultation with Dr. Priyanka Raj, 
                      Gold Medalist & MD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full"
          style={{ backgroundColor: colors.white, opacity: 0.9 }}
        ></div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

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

export default ThankYouPage;