"use client";

import { Calendar, Star } from "lucide-react";

const HeroSection = () => {
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    cream: "#fef3e2"
  };

  const badges = [
    "CERTIFIED TECHNOLOGY",
    "EXPERT GUIDANCE",
    "PERSONALISED TREATMENT",
    "VISIBLE RESULTS",
    "CERTIFIED TECHNOLOGY"
  ];

  return (
    <div 
      className="relative py-10 md:py-16 lg:pt-10 overflow-hidden min-h-[90vh] flex flex-col justify-center"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-5">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 relative z-10 order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight"
                style={{ color: colors.text }}
              >
                Get the Clear, Healthy Skin You Deserve Guided By Medical Expertise
              </h1>
              <p 
                className="text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl"
                style={{ color: colors.text }}
              >
                Hyderabad's trusted dermatology clinic for science backed technology Skip the trends & get personalised care that actually delivers results
              </p>
            </div>
            
            {/* CTA Button with Stats */}
            <div className="pb-10 space-y-6">
              {/* Button */}
              <div>
                <button
                  className="group relative px-8 py-4 rounded-full font-bold text-white text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 shadow-lg"
                  style={{ 
                    backgroundColor: '#3d3026'
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Skin Consultation
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
                </button>
              </div>
              
              {/* Stats Content */}
              <div className="space-y-2">
                <p className="text-lg md:text-xl font-bold" style={{ color: colors.text }}>
                  Bangalore's Premier Maxillofacial & Hair Restoration Clinic
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primaryLight }}
                    >
                      <svg className="w-4 h-4" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg font-semibold" style={{ color: colors.text }}>
                      2,000+ Successful Grafts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Container - Fixed Alignment */}
          <div className="relative h-[400px] md:h-[450px] lg:h-[550px] order-1 lg:order-2 flex items-center justify-center">
            {/* Main image container */}
            <div className="relative w-full h-full max-w-md lg:max-w-lg">
              {/* Large Circular Background - Positioned to match left side */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #ffd4a3 0%, #ffb87a 100%)',
                  zIndex: 0
                }}
              />
              
              {/* Secondary Circle */}
              <div 
                className="absolute top-[20%] left-[10%] md:left-[5%] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full opacity-80"
                style={{ 
                  background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                  zIndex: 0
                }}
              />
              
              {/* Tertiary Circle */}
              <div 
                className="absolute bottom-[20%] right-[10%] md:right-[5%] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full opacity-60"
                style={{ 
                  background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
                  zIndex: 0
                }}
              />
              
              {/* Image Container - Properly aligned */}
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <div className="relative h-[90%] w-full max-w-sm lg:max-w-md">
                  <img
                    src="/happy-man.avif"
                    alt="Healthy Skin"
                    className="h-full w-full object-cover rounded-tl-[60px] rounded-br-[60px] shadow-2xl"
                  />
                  {/* Image Frame Decoration */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 border-4 rounded-tr-2xl rounded-bl-2xl"
                    style={{ borderColor: colors.primary }}
                  >
                    {/* Inner decorative corner */}
                    <div className="absolute top-1 left-1 w-3 h-3 rounded-full"
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full"
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original Bottom Scrolling Banner - Unchanged Structure */}
      <div className="absolute bottom-8 left-0 right-0 bg-white/90 backdrop-blur-sm border-t-2 border-b-2 overflow-hidden" style={{ borderColor: colors.primaryLight }}>
        <div className="flex animate-scroll py-3">
          {/* Duplicate badges for seamless loop */}
          {[...badges, ...badges].map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-6 whitespace-nowrap"
            >
              <Star className="w-5 h-5" style={{ color: colors.primary }} fill={colors.primary} />
              <span className="text-sm md:text-base font-bold" style={{ color: colors.text }}>
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Animation */}
      <style jsx>{`
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
        
        /* Smooth transitions */
        * {
          transition: all 0.3s ease;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .absolute.bottom-8 {
            bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;