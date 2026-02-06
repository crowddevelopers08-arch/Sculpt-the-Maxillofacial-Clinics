"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ContactFormPopup from "./ht-contact-form";

interface Colors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  text: string;
  textLight: string;
  white: string;
  navy: string;
}

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);


  const colors: Colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    navy: "#1e3a8a",
  };

  const features = [
    {
      number: "1",
      title: "Doctor-led care by Dr. Priyanka Raj",
      bgImage: "/treatment/doctor2.jpg",
    },
    {
      number: "2",
      title: "Hairlines crafted with surgical precision",
      bgImage: "/treatment/feature3.avif",
    },
    {
      number: "3",
      title: "Virtually painless with advanced anesthesia",
      bgImage: "/treatment/feature1.avif",
    },
    {
      number: "4",
      title: "Bio-Profiling FUE for maximum graft survival",
      bgImage: "/treatment/feature2.avif",
    },
    {
      number: "5",
      title: "GFC + PRP therapies boost healing and volume",
      bgImage: "/treatment/mature-man.jpg",
    },
    {
      number: "6",
      title: "Transparent pricing with 0% EMI, no hidden costs",
      bgImage: "/treatment/no-cost.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-6 lg:py-0 mb-3 ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 inline-block relative">
            What Makes{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#bc9c24] bg-clip-text text-transparent">
              Sculpt Different
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

        {/* MOBILE CAROUSEL - Only visible on mobile */}
        <div className="lg:hidden mb-8">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="min-w-full relative h-[350px] flex-shrink-1"
                >
                  {/* Background Image - Fixed for mobile */}
                  <div className="absolute inset-0">
                    <img
                      src={feature.bgImage}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      onError={(e) => {
                        // Fallback in case image fails to load
                        e.currentTarget.src = "/treatment/placeholder.jpg";
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))`,
                      }}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    {/* Number Badge */}
                    <div className="self-start">
                      <div
                        className="w-14 h-14 rounded-full border-2 flex items-center justify-center backdrop-blur-md"
                        style={{
                          borderColor: colors.white,
                          backgroundColor: "rgba(255, 255, 255, 0.25)",
                        }}
                      >
                        <span
                          className="text-md md:text-lg md:text-2xl font-bold"
                          style={{ color: colors.white }}
                        >
                          {feature.number}
                        </span>
                      </div>
                    </div>

                    {/* Title at Bottom */}
                    <h3
                      className="text-md md:text-2xl font-bold leading-tight"
                      style={{ color: colors.white }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                backgroundColor: colors.primary,
                color: colors.white,
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="transition-all duration-300"
                  style={{
                    width: currentSlide === index ? "32px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor:
                      currentSlide === index ? colors.primary : "#d1d5db",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                backgroundColor: colors.primary,
                color: colors.white,
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* DESKTOP GRID - Hidden on mobile */}
        <div className="hidden lg:block">
          {/* First Row - 4 Feature Cards (1-4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden h-[320px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={feature.bgImage}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))`,
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Number Badge */}
                  <div className="self-start">
                    <div
                      className="w-14 h-14 rounded-full border-2 flex items-center justify-center backdrop-blur-md"
                      style={{
                        borderColor: colors.white,
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      <span
                        className="text-md md:text-2xl font-bold"
                        style={{ color: colors.white }}
                      >
                        {feature.number}
                      </span>
                    </div>
                  </div>

                  {/* Title at Bottom */}
                  <h3
                    className="text-xl font-bold leading-tight"
                    style={{ color: colors.white }}
                  >
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Feature Cards (5-6) + Dark Hero Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Card 5 */}
            <div className="group relative rounded-3xl overflow-hidden h-[320px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src={features[4].bgImage}
                  alt={features[4].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))`,
                  }}
                ></div>
              </div>
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="self-start">
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center backdrop-blur-md"
                    style={{
                      borderColor: colors.white,
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    <span
                      className="text-md md:text-2xl font-bold"
                      style={{ color: colors.white }}
                    >
                      5
                    </span>
                  </div>
                </div>
                <h3
                  className="text-xl font-bold leading-tight"
                  style={{ color: colors.white }}
                >
                  {features[4].title}
                </h3>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative rounded-3xl overflow-hidden h-[320px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src={features[5].bgImage}
                  alt={features[5].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))`,
                  }}
                ></div>
              </div>
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="self-start">
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center backdrop-blur-md"
                    style={{
                      borderColor: colors.white,
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    <span
                      className="text-md md:text-2xl  font-bold"
                      style={{ color: colors.white }}
                    >
                      6
                    </span>
                  </div>
                </div>
                <h3
                  className="text-xl font-bold leading-tight"
                  style={{ color: colors.white }}
                >
                  {features[5].title}
                </h3>
              </div>
            </div>

            {/* Dark Hero Card - Takes 2 columns */}
            <div
              className="lg:col-span-2 rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden min-h-[320px]"
              style={{
                background: `linear-gradient(135deg, ${colors.navy} 0%, #2d3d52 100%)`,
              }}
            >
              {/* Hexagon Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  }}
                ></div>
              </div>

              {/* Stethoscope Image - Top Right */}
              <div className="absolute top-8 right-8 w-24 h-24 lg:w-32 lg:h-32 opacity-20">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill={colors.white}
                >
                  <path d="M50 10c-8.284 0-15 6.716-15 15 0 6.418 4.034 11.876 9.696 14.034l-5.696 20.966c-3.866 0-7 3.134-7 7s3.134 7 7 7h22c3.866 0 7-3.134 7-7s-3.134-7-7-7l-5.696-20.966C60.966 36.876 65 31.418 65 25c0-8.284-6.716-15-15-15zm0 8c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p
                  className="text-xs lg:text-sm font-semibold mb-2 lg:mb-3 tracking-wider uppercase"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Why Choose Us
                </p>
                <h2
                  className="text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight mb-3 lg:mb-4"
                  style={{ color: colors.white }}
                >
                  Advanced Medical Care
                  <br />
                  with a Human Touch
                </h2>

                {/* CTA Button */}
                <button
                 onClick={() => setContactPopupOpen(true)}

                  className="group/btn font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl hover:scale-105 text-sm lg:text-base"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.white,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primaryDark;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                  }}
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Hero Card - Mobile Only (Below Carousel) */}
        <div className="lg:hidden mt-8">
          <div
            className="rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[200px] md:min-h-[320px]"
            style={{
              background: `linear-gradient(135deg, ${colors.navy} 0%, #2d3d52 100%)`,
            }}
          >
            {/* Hexagon Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              ></div>
            </div>

            {/* Stethoscope Image - Top Right */}
            <div className="absolute top-8 right-8 w-24 h-24 opacity-20">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                fill={colors.white}
              >
                <path d="M50 10c-8.284 0-15 6.716-15 15 0 6.418 4.034 11.876 9.696 14.034l-5.696 20.966c-3.866 0-7 3.134-7 7s3.134 7 7 7h22c3.866 0 7-3.134 7-7s-3.134-7-7-7l-5.696-20.966C60.966 36.876 65 31.418 65 25c0-8.284-6.716-15-15-15zm0 8c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p
                className="text-xs font-semibold mb-2 tracking-wider uppercase"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Why Choose Us
              </p>
              <h2
                className="text-2xl font-extrabold leading-tight mb-3"
                style={{ color: colors.white }}
              >
                Advanced Medical Care
                <br />
                with a Human Touch
              </h2>

              {/* CTA Button */}
              <button
               onClick={() => setContactPopupOpen(true)}

                className="group/btn font-bold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl hover:scale-105 text-sm"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.white,
                }}
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
          <ContactFormPopup 
  isOpen={contactPopupOpen} 
  onClose={() => setContactPopupOpen(false)} 
/>
    </section>
  );
};

export default WhyChooseUs;