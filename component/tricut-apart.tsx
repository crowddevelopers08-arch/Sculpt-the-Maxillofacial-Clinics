"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ContactFormPopup from "./contact-form";

const WhatMakesSculptDifferent = () => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  // Using the same color scheme from previous components
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    orange: "#ff6347",
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      id: 1,
      title: "Doctor-led care by Dr. Priyanka Raj",
      imagePath:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Hairlines crafted with surgical precision",
      imagePath: "/treatment/maleprocess.jpg",
    },
    {
      id: 3,
      title: "Virtually painless with advanced anesthesia",
      imagePath:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Bio-Profiling FUE for maximum graft survival",
      imagePath:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      title: "GFC + PRP therapies boost healing and volume",
      imagePath:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Transparent pricing with 0% EMI, no hidden costs",
      imagePath:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <>
    <div id="TRIKUT" className="py-2 md:py-10 lg:py-10 bg-white max-sm:mb-5">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-5 md:mb-10">
          <h2
            className="text-2xl md:text-4xl lg:text-4xl font-extrabold mb-2"
            style={{ color: colors.text }}
          >
            What Makes{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] bg-clip-text text-transparent">
              Sculpt Different
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="w-48 mt-4 flex justify-center gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="h-1 w-1 rounded-full"
                  style={{
                    backgroundColor: colors.primaryDark,
                    animation: `wave 1.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <style jsx>{`
              @keyframes wave {
                0%,
                100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-8px);
                }
              }
            `}</style>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden mb-8 relative max-sm:px-3 px-8 max-sm:mb-5">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature) => (
                <div key={feature.id} className="w-full flex-shrink-0 px-4">
                  <div
                    className="bg-white rounded-2xl p-6 shadow-lg border-2"
                    style={{ borderColor: colors.primary }}
                  >
                    {/* Square Image */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-48 h-48 rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={feature.imagePath}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Feature Title */}
                    <h3
                      className="text-lg font-bold text-center leading-snug px-2"
                      style={{ color: colors.text }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 z-10 border-2"
            style={{ borderColor: colors.primary, color: colors.primaryDark }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={14} strokeWidth={3} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 z-10 border-2"
            style={{ borderColor: colors.primary, color: colors.primaryDark }}
            aria-label="Next slide"
          >
            <ChevronRight size={14} strokeWidth={3} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 max-sm:mt-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8" : "w-2"
                }`}
                style={{
                  backgroundColor:
                    index === currentIndex ? colors.primaryDark : colors.textLight,
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-5 md:mb-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 shadow-lg border-2"
              style={{ borderColor: colors.primary }}
            >
              {/* Square Image */}
              <div className="mb-6 flex justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={feature.imagePath}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Feature Title */}
              <h3
                className="text-md md:text-lg font-bold text-center leading-snug"
                style={{ color: colors.text }}
              >
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div
            className="inline-block bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl px-8 md:px-12 py-8 md:py-10 shadow-xl border-2"
            style={{ borderColor: colors.primaryLight }}
          >
            <p
              className="text-lg md:text-xl font-semibold mb-4 max-sm:mb-2"
              style={{ color: colors.text }}
            >
              Ready to experience the Sculpt difference?
            </p>
            <div className="flex justify-center">
              
              <button
              onClick={() => setContactPopupOpen(true)}
                className="group relative bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] text-white rounded-full margui max-sm:px-5 py-3 px-7 text-sm md:text-lg font-bold transition-all duration-400 hover:-translate-y-1 hover:from-[#8b6c0d] hover:to-[#bc9c24] active:translate-y-0 overflow-hidden shadow-lg hover:shadow-xl"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                    
                  <span className="md:hidden">Book Your Consultation</span>

                  {/* Desktop full text */}
                  <span className="hidden md:inline">
                  Request Your Hair Assessment
                  </span>
                  <ArrowRight size={18} />
                </div>

                {/* a Shine Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center max-sm:gap-3 gap-6 mt-4 flex-wrap text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span style={{ color: colors.textLight }}>
                  Free Consultation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span style={{ color: colors.textLight }}>
                  Expert Evaluation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span style={{ color: colors.textLight }}>
                  Personalized Plan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactFormPopup 
  isOpen={contactPopupOpen} 
  onClose={() => setContactPopupOpen(false)} 
/>
</>
  );
};

export default WhatMakesSculptDifferent;