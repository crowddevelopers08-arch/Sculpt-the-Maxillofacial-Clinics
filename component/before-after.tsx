"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Define TypeScript interfaces
interface Transformation {
  id: number;
  beforeImage: string;
  afterImage: string;
  name: string;
}

interface Colors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  text: string;
  textLight: string;
  white: string;
  navy: string;
}

interface BeforeAfterCardProps {
  transformation: Transformation;
  colors: Colors;
}

const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Using the same color scheme from previous components
  const colors: Colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    navy: "#1e3a8a" // Navy blue for Before/After labels
  };

  const transformations: Transformation[] = [
    {
      id: 1,
      beforeImage: "/before/IMG_1.png",
      afterImage: "/before/IMGS_1.png",
      name: "Patient 1"
    },
    {
      id: 2,
      beforeImage: "/before/IMG_2.png",
      afterImage: "/before/IMGS_2.JPG",
      name: "Patient 2"
    },
    {
      id: 3,
      beforeImage: "/before/IMG_3.JPEG",
      afterImage: "/before/IMGS_3.png",
      name: "Patient 3"
    },
    {
      id: 4,
      beforeImage: "/before/IMG_4.JPG",
      afterImage: "/before/IMGS_4.png",
      name: "Patient 4"
    },
    {
      id: 5,
      beforeImage: "/before/IMG_5.png",
      afterImage: "/before/IMGS_5.png",
      name: "Patient 5"
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  // Get visible transformations (3 at a time on desktop)
  const getVisibleTransformations = (): Transformation[] => {
    const visible: Transformation[] = [];
    const count = Math.min(transformations.length, 3); // Show max 3 cards
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % transformations.length;
      visible.push(transformations[index]);
    }
    return visible;
  };

  return (
    <div className="py-5 sm:py-16 md:py-6 lg:py-6 xl:py-8  bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-2 sm:mb-8 md:mb-10 lg:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4"
            style={{ color: colors.text }}
          >
            Real People.{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed sm:leading-relaxed"
            style={{ color: colors.textLight }}
          >
            We don't believe in artificial looks. Our goal is facial harmony. Browse our gallery of real patient outcomes for Hair Transplants.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-3">
          {/* Navigation Buttons - Hidden on smallest screens, visible from sm */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 lg:-translate-x-6 xl:-translate-x-8 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
            style={{ backgroundColor: colors.primary }}
            aria-label="Previous transformation"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
          </button>

          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 md:translate-x-4 lg:translate-x-6 xl:translate-x-8 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
            style={{ backgroundColor: colors.primary }}
            aria-label="Next transformation"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6  text-white" strokeWidth={3} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            {/* Mobile & Tablet: 1 card */}
            <div className="block lg:hidden">
              <BeforeAfterCard 
                transformation={transformations[currentIndex]} 
                colors={colors}
              />
            </div>

            {/* Desktop: 3 cards */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-4 xl:gap-6 2xl:gap-8 pb-3">
              {getVisibleTransformations().map((transformation) => (
                <BeforeAfterCard 
                  key={`${transformation.id}-${currentIndex}`} 
                  transformation={transformation} 
                  colors={colors}
                />
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-8 md:mt-10">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
                className="rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  backgroundColor: currentIndex === index ? colors.primary : colors.primaryLight,
                  width: currentIndex === index ? '1.5rem' : '0.5rem',
                  height: '0.5rem',
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            ))}
          </div>

          {/* Mobile Navigation Arrows (below dots) */}
          <div className="flex justify-center items-center gap-4 mt-4 lg:hidden">
            <button
              onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
              style={{ backgroundColor: colors.primary }}
              aria-label="Previous transformation"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={3} />
            </button>
            <button
              onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
              style={{ backgroundColor: colors.primary }}
              aria-label="Next transformation"
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center mt-3 sm:mt-10 md:mt-12 lg:mt-8">
          <a
            href="#"
            className="group relative bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] text-white rounded-full py-2.5 px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-8 lg:py-3 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:from-[#8b6c0d] hover:to-[#bc9c24] active:translate-y-0 overflow-hidden shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#bc9c24] focus:ring-offset-2"
          >
            <div className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 whitespace-nowrap">
              Schedule Your Hair Consultation
              <ArrowRight size={16} className="sm:size-5 md:size-6" />
            </div>

            {/* Shine Effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Before/After Card Component
const BeforeAfterCard = ({ transformation, colors }: BeforeAfterCardProps) => {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 lg:hover:scale-105 hover:z-10">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 md:gap-4 lg:gap-4">
        {/* Before Image */}
        <div className="w-full sm:w-1/2 relative">
          <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md">
            <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 overflow-hidden">
              <img
                src={transformation.beforeImage}
                alt={`Before - ${transformation.name}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Before Label */}
            <div 
              className="absolute top-2 left-2 sm:top-3 sm:left-3 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-white text-xs sm:text-sm shadow-md"
              style={{ 
                backgroundColor: colors.navy,
                clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
              }}
            >
              Before
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 hidden sm:block">
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" 
            fill="none" 
            stroke={colors.primary}
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        {/* Mobile Arrow (vertical) */}
        <div className="flex-shrink-0 sm:hidden">
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke={colors.primary}
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* After Image */}
        <div className="w-full sm:w-1/2 relative">
          <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md">
            <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 overflow-hidden">
              <img
                src={transformation.afterImage}
                alt={`After - ${transformation.name}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* After Label */}
            <div 
              className="absolute top-2 left-2 sm:top-3 sm:left-3 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-white text-xs sm:text-sm shadow-md"
              style={{ 
                backgroundColor: colors.navy,
                clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
              }}
            >
              After
            </div>
          </div>
        </div>
      </div>
      
      {/* Patient Name - Only show on larger screens */}
      <div className="mt-4 text-center hidden sm:block">
        <p className="text-sm md:text-base font-medium" style={{ color: colors.text }}>
          {transformation.name}
        </p>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;