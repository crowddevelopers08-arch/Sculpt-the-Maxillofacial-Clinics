"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ServicesWeProvide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Using the same color scheme from previous components
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#1F1F1F", // Navy blue for headings
    textLight: "#6b7280", // Gray for descriptions
    white: "#ffffff",
    orange: "#ff6347",
    bgLight: "#f8f9fa",
  };

  const services = [
    {
      id: 1,

            icon: "/img3.jpg",
      title: "Advanced FUE (Follicular Unit Extraction)",
      description:
        "A minimally invasive, stitch-less technique for a quick recovery and zero linear scarring.",
      illustration: "essay",
    },
    {
      id: 2,
      icon: "/treatment/img2.avif",
      title: "Bio-Profiling FUE",
      description:
        "Our signature method that optimizes graft selection based on your biological hair profile for maximum density.",
      illustration: "thesis",
    },
    {
      id: 3,
      icon: "/treatment/img1.avif",
      title: "Beard & Eyebrow Reconstruction ",
      description:
        "Precision transplants to fill patches and define your facial features.",
      illustration: "plagiarism",
    },
    {
      id: 4,
      icon: "/img4.jpg",
      title: "GFC Therapy",
      description:
        "Non-surgical growth factor treatments to strengthen existing hair and accelerate post-op healing.",
      illustration: "grammar",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <div className="py-4 md:py-10 lg:py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-13">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 inline-block relative">
            Tailored Solutions for Every{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#bc9c24] bg-clip-text text-transparent">
              Stage of Hair Loss
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

        {/* Mobile Carousel */}
        <div className="block lg:hidden mb-8 relative px-12 max-sm:px-4 max-sm:mb-3">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-full flex-shrink-0 px-4 max-sm:px-2 max-sm:mb-2"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    {/* Service Icon in Circle - FIXED */}
                    <div className="relative mb-6 flex justify-center">
                      <div
                        className="w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden p-0"
                        style={{ backgroundColor: colors.bgLight }}
                      >
                        {/* Icon - Fixed with object-cover and aspect ratio */}
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 128px) 100vw, 128px"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3
                      className="text-lg font-bold mb-3 text-center"
                      style={{ color: colors.text }}
                    >
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p
                      className="text-sm leading-relaxed text-center"
                      style={{ color: colors.textLight }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows for Mobile */}
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

          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center gap-2 max-sm:mb-0 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8" : "w-2"
                }`}
                style={{
                  backgroundColor:
                    index === currentSlide
                      ? colors.primaryDark
                      : colors.textLight,
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid with Navigation */}
        <div className="hidden lg:block relative">
          {/* Services Grid - Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-3 "
              >
                {/* Service Icon in Circle - FIXED */}
                <div className="relative mb-6 md:mb-8 flex justify-center">
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 relative overflow-hidden p-0"
                    style={{ backgroundColor: colors.bgLight }}
                  >
                    {/* Icon - Fixed with object-cover and aspect ratio */}
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 160px) 100vw, 160px"
                      />
                    </div>

                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full border-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-[#bc9c24]" />
                  </div>
                </div>

                {/* Service Title */}
                <h3
                  className="text-md md:text-lg font-bold mb-3 md:mb-4 text-center group-hover:scale-105 transition-transform duration-300"
                  style={{ color: colors.text }}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  className="text-sm md:text-md leading-relaxed text-center"
                  style={{ color: colors.textLight }}
                >
                  {service.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-[#bc9c24]" />

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full group-hover:w-3/4 transition-all duration-500 bg-[#bc9c24]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWeProvide;