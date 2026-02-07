"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ContactFormPopup from "./ht-contact-form";

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

const BeforeAfterSlider = () => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const colors: Colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    navy: "#1e3a8a",
  };

  const transformations: Transformation[] = [
    {
      id: 1,
      beforeImage: "/before/IMG_1.png",
      afterImage: "/before/IMGS_1.png",
      name: " 1",
    },
    {
      id: 2,
      beforeImage: "/before/IMG_2.png",
      afterImage: "/before/IMGS_2.JPG",
      name: " 2",
    },
    {
      id: 3,
      beforeImage: "/before/IMG_3.JPEG",
      afterImage: "/before/IMGS_3.png",
      name: " 3",
    },
    {
      id: 4,
      beforeImage: "/before/IMG_4.JPG",
      afterImage: "/before/IMGS_4.png",
      name: " 4",
    },
    {
      id: 5,
      beforeImage: "/before/IMG_5.png",
      afterImage: "/before/IMGS_5.png",
      name: " 5",
    },
  ];

  const nextSlide = (): void => {
    setCurrentIndex((prev) => 
      prev + 2 >= transformations.length ? 0 : prev + 2
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => 
      prev - 2 < 0 ? Math.max(0, transformations.length - 2) : prev - 2
    );
  };

  const getVisibleTransformations = (): Transformation[] => {
    const visible: Transformation[] = [];
    for (let i = 0; i < 2; i++) {
      const index = currentIndex + i;
      if (index < transformations.length) {
        visible.push(transformations[index]);
      }
    }
    return visible;
  };

  return (
    <>
      <div className="py-6 sm:py-10 md:py-12 lg:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Heading */}
          <div className="text-center mb-3 sm:mb-8 md:mb-6">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold mb-2 sm:mb-3"
              style={{ color: colors.text }}
            >
              Real People.{" "}
              <span className="bg-gradient-to-r from-[#bc9c24] to-[#bc9c24] bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            
       <div className="flex justify-center">
            <div className="w-48 mt-0">
              <svg width="100%" height="20" viewBox="0 0 100 20">
                <path
                  d="M0,10 C10,10 15,10 25,10 S40,10 50,10 S65,10 75,10 S90,10 100,10"
                  stroke={colors.primaryDark}
                  strokeWidth="2"
                  fill="none"
                  style={{
                    animation: `svgWave 2s ease-in-out infinite`,
                  }}
                />
              </svg>
            </div>
            <style jsx>{`
              @keyframes svgWave {
                0%,
                100% {
                  d: path(
                    "M0,10 C10,10 15,10 25,10 S40,10 50,10 S65,10 75,10 S90,10 100,10"
                  );
                }
                25% {
                  d: path(
                    "M0,10 C10,5 15,15 25,10 S40,5 50,10 S65,15 75,10 S90,5 100,10"
                  );
                }
                50% {
                  d: path(
                    "M0,10 C10,15 15,5 25,10 S40,15 50,10 S65,5 75,10 S90,15 100,10"
                  );
                }
                75% {
                  d: path(
                    "M0,10 C10,5 15,15 25,10 S40,5 50,10 S65,15 75,10 S90,5 100,10"
                  );
                }
              }
            `}</style>
          </div>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-6">
            {getVisibleTransformations().map((transformation) => (
              <TransformationCard
                key={transformation.id}
                transformation={transformation}
                colors={colors}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-5">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: colors.primaryDark }}
              aria-label="Previous transformations"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(transformations.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 2)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      currentIndex === index * 2
                        ? colors.primaryDark
                        : colors.primaryLight,
                    width: currentIndex === index * 2 ? "1.75rem" : "0.75rem",
                    height: "0.75rem",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: colors.primaryDark }}
              aria-label="Next transformations"
              disabled={currentIndex + 2 >= transformations.length}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setContactPopupOpen(true)}
              className="group relative bg-gradient-to-r from-[#bc9c24] to-[#bc9c24] text-white rounded-full py-2.5 px-6 sm:py-3 sm:px-8 md:py-3.5 md:px-10 text-sm sm:text-base md:text-lg font-bold transition-all duration-300 hover:-translate-y-1 hover:from-[#bc9c24] hover:to-[#bc9c24] hover:shadow-md"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                Schedule Your Hair Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full" />
            </button>
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

// UPDATED - Side by side Before/After cards (no slider)
const TransformationCard = ({ transformation, colors }: { transformation: Transformation; colors: Colors }) => {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4">
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Before Image */}
        <div className="relative rounded-md sm:rounded-lg overflow-hidden bg-gray-100">
          <img
            src={transformation.beforeImage}
            alt={`Before - ${transformation.name}`}
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${transformation.beforeImage}`);
              e.currentTarget.src = "https://via.placeholder.com/300x400/cccccc/ffffff?text=Before+Image";
            }}
          />
        </div>

        {/* After Image */}
        <div className="relative rounded-md sm:rounded-lg overflow-hidden bg-gray-100">
          <img
            src={transformation.afterImage}
            alt={`After - ${transformation.name}`}
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${transformation.afterImage}`);
              e.currentTarget.src = "https://via.placeholder.com/300x400/cccccc/ffffff?text=After+Image";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;