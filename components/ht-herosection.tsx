"use client";

import {
  Calendar,
  Star,
  Stethoscope,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";
import ContactFormPopup from "./ht-contact-form";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const [counters, setCounters] = useState({
    grafts: 0,
    success: 0,
  });

  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    cream: "#fef3e2",
  };

const badges = [
  { title: "CERTIFIED TECHNOLOGY", img: "/treatment/system.png" },
  { title: "EXPERT GUIDANCE", img: "/treatment/guidance.png" },
  { title: "PERSONALISED TREATMENT", img: "/treatment/add-user.png" },
  { title: "VISIBLE RESULTS", img: "/treatment/bar-chart.png" },
];

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        grafts: Math.floor(2000 * progress),
        success: Math.floor(98 * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({
          grafts: 2000,
          success: 98,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="relative py-3 md:py-16 lg:pt-10 overflow-hidden min-h-[90vh] flex flex-col justify-center"
        style={{ backgroundColor: colors.cream }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Circles - 8 Total (5 original + 3 new) */}
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-circle circle-4"></div>
          <div className="floating-circle circle-5"></div>
          <div className="floating-circle circle-6"></div>
          <div className="floating-circle circle-7"></div>
          <div className="floating-circle circle-8"></div>

          {/* Gradient Orbs */}
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Mobile Layout: Image comes AFTER paragraph, button AFTER image */}
          <div className="lg:hidden flex flex-col">
            {/* Content Section */}
            <div className="space-y-6 relative z-10">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1
                  className="text-2xl md:text-4xl font-extrabold leading-tight"
                  style={{ color: colors.text }}
                >
                  Best Hair Transplant In Bangalore, Performed by MD, Gold
                  Medalist, Dr. Priyanka Raj
                </h1>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: colors.text }}
                >
                  Advanced hair restoration in Bangalore, driven by surgical
                  expertise and natural-looking results.
                </p>
              </div>

              {/* Stats Badges Above Button - 2 badges */}
              <div className="flex flex-wrap gap-4 pb-4">
                {/* Badge 1 - Successful Grafts */}
                <div
                  className="bg-white rounded-2xl shadow-lg p-4 border-2 flex-1 min-w-[200px]"
                  style={{ borderColor: colors.primaryLight }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#e8f5e9" }}
                    >
                      <Stethoscope className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p
                        className="font-bold text-2xl number-spinner"
                        style={{ color: colors.primary }}
                      >
                        {counters.grafts.toLocaleString()}+
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">
                        Successful Grafts
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge 2 - Premier Clinic */}
                <div
                  className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl shadow-lg p-4 border-2 flex-1 min-w-[200px]"
                  style={{ borderColor: colors.primary }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primaryLight }}
                    >
                      <Award
                        className="w-6 h-6"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold"
                        style={{ color: colors.text }}
                      >
                        Bangalore's Premier
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">
                        Maxillofacial Clinic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section - Comes AFTER paragraph and stats badges */}
            <div className="relative h-[350px] md:h-[400px] flex items-center justify-center mt-8">
              <div className="relative w-full h-full max-w-md">
                {/* Concentric Circles Animation Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                  <div className="concentric-circle circle-ring-1"></div>
                  <div className="concentric-circle circle-ring-2"></div>
                  <div className="concentric-circle circle-ring-3"></div>
                  <div className="concentric-circle circle-ring-4"></div>
                  <div className="concentric-circle circle-ring-5"></div>
                  <div className="concentric-circle circle-ring-6"></div>
                </div>

                {/* Clean Image */}
                <div className="relative w-full h-[90%] z-10">
                  <img
                    src="/treatment/removepng.png"
                    alt="Happy Patient"
                    className="w-full h-full object-contain rounded-3xl"
                  />
                </div>

                {/* Floating Badges on Mobile - Different positions */}
                {/* Badge 1 - Success Rate */}
                <div
                  className="absolute max-sm:left-[-4] md:left-4 max-sm:bottom-[-0%] md:bottom-[3%] bg-white rounded-xl shadow-xl p-3 z-20 border-2"
                  style={{ borderColor: colors.primaryLight }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primaryLight }}
                    >
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-bold text-xl number-spinner"
                        style={{ color: colors.primary }}
                      >
                        {counters.success}%
                      </p>
                      <p className="text-[10px] text-gray-600 font-semibold">
                        Patient Satisfaction
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge 2 - Certified Technology */}
                <div className="absolute max-sm:right-[-5] md:right-4 max-sm:top-[-7%] md:top-[5%] bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-xl p-3 z-20 border-2 border-green-200">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-green-800">100%</p>
                      <p className="text-[10px] text-gray-600 font-semibold">
                        Sterilization Standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Comes AFTER the image on mobile */}
            <div className="pt-8 max-sm:pt-4 max-sm:mb-6 pb-8">
              <button
                onClick={() => setContactPopupOpen(true)}
                className="group relative w-full max-sm:px-6 px-8 py-4 rounded-full font-bold text-[#3d3026] border-2 border-[#3d3026] bg-transparent text-sm md:text-lg transition-all duration-300 hover:bg-[#3d3026] hover:text-black hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 shadow-lg"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <Calendar className="w-5 h-5" />
                Book Your Skin Consultation
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
              </button>
            </div>
          </div>

          {/* Desktop/Large Screen Layout - Original Grid */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-5">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8 relative z-10 order-2 lg:order-1 slide-in-left">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1
                  className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-extrabold leading-tight"
                  style={{ color: colors.text }}
                >
                  Best Hair Transplant In Bangalore, Performed by MD, Gold
                  Medalist, Dr. Priyanka Raj
                </h1>
                <p
                  className="text-base md:text-lg lg:text-lg leading-relaxed max-w-3xl"
                  style={{ color: colors.text }}
                >
                  Advanced hair restoration in Bangalore, driven by surgical
                  expertise and natural-looking results.
                </p>
              </div>

              {/* Stats Badges Above Button - 2 badges */}
              <div className="flex flex-wrap gap-4 pb-4">
                {/* Badge 1 - Successful Grafts */}
                <div
                  className="bg-white rounded-2xl shadow-lg p-4 border-2 flex-1 min-w-[200px]"
                  style={{ borderColor: colors.primaryLight }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#e8f5e9" }}
                    >
                      <Stethoscope className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p
                        className="font-bold text-2xl number-spinner"
                        style={{ color: colors.primary }}
                      >
                        {counters.grafts.toLocaleString()}+
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">
                        Successful Grafts
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge 2 - Premier Clinic */}
                <div
                  className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl shadow-lg p-4 border-2 flex-1 min-w-[200px]"
                  style={{ borderColor: colors.primary }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primaryLight }}
                    >
                      <Award
                        className="w-6 h-6"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold"
                        style={{ color: colors.text }}
                      >
                        Bangalore's Premier
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">
                        Maxillofacial Clinic
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button - Desktop */}
              <div className="pb-10">
                <button
                  onClick={() => setContactPopupOpen(true)}
                  className="group relative max-sm:px-6 px-8 py-4 rounded-full font-bold text-[#3d3026] border-2 border-[#3d3026] bg-transparent text-base md:text-lg transition-all duration-300 hover:bg-[#3d3026] hover:text-black hover:scale-105 hover:shadow-2xl flex items-center gap-3 shadow-lg"
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Skin Consultation
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] md:h-[450px] lg:h-[550px] order-1 lg:order-2 flex items-center justify-center slide-in-right">
              <div className="relative w-full h-full max-w-md lg:max-w-lg">
                {/* Concentric Circles Animation Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                  <div className="concentric-circle circle-ring-1"></div>
                  <div className="concentric-circle circle-ring-2"></div>
                  <div className="concentric-circle circle-ring-3"></div>
                  <div className="concentric-circle circle-ring-4"></div>
                  <div className="concentric-circle circle-ring-5"></div>
                  <div className="concentric-circle circle-ring-6"></div>
                </div>

                {/* Clean Image - No Card Wrapper */}
                <div className="relative w-full h-[90%] z-10">
                  <img
                    src="/treatment/removepng.png"
                    alt="Happy Patient"
                    className="w-full h-full object-contain rounded-3xl"
                  />
                </div>

                {/* Only 2 Floating Badges on Image */}
                {/* Badge 1 - Success Rate - Top Left */}
                <div
                  className="absolute left-2 bottom-[8%] bg-white rounded-xl shadow-xl p-3 z-20 hidden lg:block border-2"
                  style={{ borderColor: colors.primaryLight }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primaryLight }}
                    >
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-bold text-xl number-spinner"
                        style={{ color: colors.primary }}
                      >
                        {counters.success}%
                      </p>
                      <p className="text-[10px] text-gray-600 font-semibold">
                        Patient Satisfaction
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge 2 - Certified Technology - Bottom Right */}
                <div className="absolute right-2 top-[8%] bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-xl p-3 z-20 hidden lg:block border-2 border-green-200">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-green-800">100%</p>
                      <p className="text-[10px] text-gray-600 font-semibold">
                        Sterilization Standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scrolling Banner */}
        <div
          className="absolute bottom-[-1] left-0 right-0 bg-white/90 backdrop-blur-sm border-t-2 border-b-2 overflow-hidden z-20"
          style={{ borderColor: colors.primaryLight }}
        >
          {/* <div className="flex animate-scroll py-3">
            {[...badges, ...badges].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-6 whitespace-nowrap"
              >
                <Star
                  className="w-5 h-5"
                  style={{ color: colors.primary }}
                  fill={colors.primary}
                />
                <span
                  className="text-sm md:text-base font-bold"
                  style={{ color: colors.text }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div> */}
          <div className="flex animate-scroll py-3">
  {[...badges, ...badges].map((badge, index) => (
    <div
      key={index}
      className="flex items-center gap-2 px-6 whitespace-nowrap"
    >
      <Image
        src={badge.img}
        alt={badge.title}
        width={30}
        height={30}
        className="object-contain"
      />

      <span
        className="text-sm md:text-base font-bold"
        style={{ color: colors.text }}
      >
        {badge.title}
      </span>
    </div>
  ))}
</div>
        </div>

        {/* Enhanced Animations */}
        <style jsx>{`
          /* Slide-in Animations */
          @keyframes slideInLeft {
            0% {
              opacity: 0;
              transform: translateX(-100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .slide-in-left {
            animation: slideInLeft 0.8s ease-out forwards;
          }

          .slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
          }

          /* Scrolling Banner Animation */
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: flex;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          /* Number Spinner Animation */
          .number-spinner {
            display: inline-block;
            animation: number-pop 0.5s ease-out;
          }

          @keyframes number-pop {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          /* Concentric Circles Animation - Faster */
          .concentric-circle {
            position: absolute;
            border-radius: 50%;
            border: 2px solid rgba(188, 156, 36, 0.15);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: ripple 3s ease-out infinite;
          }

          .circle-ring-1 {
            width: 280px;
            height: 280px;
            animation-delay: 0s;
          }

          .circle-ring-2 {
            width: 320px;
            height: 320px;
            animation-delay: 0.4s;
          }

          .circle-ring-3 {
            width: 360px;
            height: 360px;
            animation-delay: 0.8s;
          }

          .circle-ring-4 {
            width: 400px;
            height: 400px;
            animation-delay: 1.2s;
          }

          .circle-ring-5 {
            width: 440px;
            height: 440px;
            animation-delay: 1.6s;
          }

          .circle-ring-6 {
            width: 480px;
            height: 480px;
            animation-delay: 2s;
          }

          @keyframes ripple {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.8);
            }
            20% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(1.3);
            }
          }

          /* Floating Circles Background - Faster with More Circles */
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

          /* 3 New Additional Circles */
          .circle-6 {
            width: 110px;
            height: 110px;
            top: 45%;
            left: 15%;
            animation-delay: 2s;
            background: linear-gradient(
              135deg,
              rgba(255, 184, 122, 0.12) 0%,
              rgba(255, 184, 122, 0.06) 100%
            );
          }

          .circle-7 {
            width: 70px;
            height: 70px;
            top: 20%;
            right: 40%;
            animation-delay: 5s;
            background: linear-gradient(
              135deg,
              rgba(244, 232, 193, 0.15) 0%,
              rgba(244, 232, 193, 0.08) 100%
            );
          }

          .circle-8 {
            width: 130px;
            height: 130px;
            bottom: 35%;
            left: 25%;
            animation-delay: 7s;
            background: linear-gradient(
              135deg,
              rgba(188, 156, 36, 0.1) 0%,
              rgba(255, 184, 122, 0.05) 100%
            );
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

          /* Gradient Orbs - Faster */
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
          @media (max-width: 1024px) {
            .concentric-circle {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .absolute.bottom-8 {
              bottom: 20px;
            }

            .floating-circle {
              display: none;
            }

            .gradient-orb {
              filter: blur(40px);
            }

            .slide-in-left,
            .slide-in-right {
              animation: none;
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>

      <ContactFormPopup
        isOpen={contactPopupOpen}
        onClose={() => setContactPopupOpen(false)}
      />
    </>
  );
};

export default HeroSection;