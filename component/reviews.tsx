"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import { yellow } from "@mui/material/colors";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const colors = {
    primary: "#bc9c24",
    primarys: "#3d8df7",
    primaryDark: "blue",
    yellow:"yellow",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    orange: "#ff6347",
  };

const testimonials = [
    {
      id: 1,
      text: "So satisfied with the treatment, got done for hair and happy with the results and great support from the doctor and staff , will definitely suggest the clinic for others about their hair concerns for effective and long lasting results!!",
      name: "Shashwath Girish",
      role: "Mumbai, Maharashtra",
      avatar: "/avatar1.jpg",
      avatarBg: "bg-amber-400"
    },
    {
      id: 2,
      text: "I am taking kenacort injection for hair loss. I can see tremendous improvement in my hair growth. Thanks to sculpt team .I highly recommend sculpt clinic for all the skin and hair problems.",
      name: "Manjula Manjula",
      role: "Delhi, NCR",
      avatar: "/avatar2.jpg",
      avatarBg: "bg-purple-400"
    },
    {
      id: 3,
      text: "I had been struggling with hair loss for years, and it took a toll on my self-confidence and overall well-being. However, thanks to the exceptional team at SCULPT The Maxillofacial Clinic, I now feel like a completely new person.",
      name: "Arun Patel",
      role: "Bangalore, Karnataka",
      avatar: "/avatar3.jpg",
      avatarBg: "bg-amber-400"
    },
    {
      id: 4,
      text: "Priyanka Mam really helped me a lottt.My wife left me that i heardly having hair .From then I am very my depressed. I went almost all places in Bangalore.finally Heard about Priyanka mam and started my treatment.I am very happy with the result.",
      name: "Krishna Kishore",
      role: "Hyderabad, Telangana",
      avatar: "/avatar4.jpg",
      avatarBg: "bg-pink-400"
    },
    {
      id: 5,
      text: "Advanced anesthesia made the procedure completely painless. The doctor-led care ensured I was comfortable throughout. Results started showing in 3 months, and now at 8 months, I have a full head of hair. Incredible experience!.",
      name: "Niharika Gowda",
      role: "Pune, Maharashtra",
      avatar: "/avatar5.jpg",
      avatarBg: "bg-blue-400"
    }
  ];

  // Auto-play carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      } else if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        return prev === 0 ? testimonials.length - 2 : prev - 1;
      } else {
        return prev === 0 ? testimonials.length - 3 : prev - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return prev >= testimonials.length - 1 ? 0 : prev + 1;
      } else if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        return prev >= testimonials.length - 2 ? 0 : prev + 1;
      } else {
        return prev >= testimonials.length - 3 ? 0 : prev + 1;
      }
    });
  };

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visibleCount = typeof window !== 'undefined' ? getVisibleCount() : 3;
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);

  if (visibleTestimonials.length < visibleCount) {
    const remaining = visibleCount - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <div className="w-full flex items-center justify-center py-8 px-4" 
      style={{ 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute opacity-30">
        <div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.primary}30` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-40 h-40 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.orange}20` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.primaryLight}40` }}
        ></div>
        <div 
          className="absolute bottom-40 right-1/3 w-32 h-32 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.primary}20` }}
        ></div>
        
        {/* Dotted Pattern */}
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill={colors.primaryLight} opacity="0.5"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="text-center mb-8 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 inline-block relative">
             Read Patient Stories{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#bc9c24] bg-clip-text text-transparent">
               At Sculpt
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="w-48 mt-0">
              <svg width="100%" height="20" viewBox="0 0 100 20">
                <path
                  d="M0,10 C10,10 15,10 25,10 S40,10 50,10 S65,10 75,10 S90,10 100,10"
                  stroke={colors.primary}
                  strokeWidth="2"
                  fill="none"
                  style={{
                    animation: `svgWave 2s ease-in-out infinite`,
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-white rounded-3xl p-8 transition-all duration-700 transform hover:-translate-y-1 animate-slide-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                borderTop: `3px solid ${colors.primary}`
              }}
            >
              {/* Rating Header with Google Icon and Verified Badge */}
              <div className="flex items-center justify-between mb-6">
                {/* Left Side: Google Icon + Stars */}
                <div className="flex items-center gap-2">
                  {/* Google Icon */}
                  <div className="flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  
                  {/* 5 Yellow/Gold Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5"
                        style={{ 
                          fill: colors.yellow,
                          color: colors.yellow
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Side: Blue Verified Badge */}
                <div 
                  className="flex items-center gap-1 px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${colors.primaryLight}50` }}
                >
                  <CheckCircle 
                    className="w-4 h-4" 
                    style={{ 
                      color: colors.primarys,
                      fill: colors.primarys
                    }}
                  />
                  <span 
                    className="text-xs font-semibold"
                    style={{ color: colors.text }}
                  >
                    Verified
                  </span>
                </div>
              </div>

              {/* Testimonial Text */}
              <p 
                className="text-base leading-relaxed mb-8 min-h-[120px]"
                style={{ color: colors.textLight }}
              >
                {testimonial.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: testimonial.avatarBg }}
                >
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Name and Role */}
                <div>
                  <h4 
                    className="font-bold text-base"
                    style={{ color: colors.text }}
                  >
                    {testimonial.name}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: colors.textLight }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full text-white flex items-center justify-center  transition-all duration-300 transform hover:scale-110"
            style={{ backgroundColor: colors.primary }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primaryLight}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            style={{ backgroundColor: colors.primary }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primaryLight}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: index === currentIndex ? '32px' : '8px',
                height: '8px',
                backgroundColor: index === currentIndex ? colors.primary : colors.primaryLight
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = colors.primary;
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = colors.primaryLight;
                }
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Smooth Animation Styles */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;