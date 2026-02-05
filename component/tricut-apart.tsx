'use client'

import React, { useState } from 'react';

const HairTreatmentServices = () => {
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    orange: "#ff6347",
  };

  const services = [
    {
      title: "Doctor-led care by Dr. Priyanka Raj",
      image: "/CLINIC-pic4.JPG",
    },
    {
      title: "Hairlines crafted with surgical precision",
      image: "/treatment/maleprocess.jpg",
    },
    {
      title: "Virtually painless with advanced anesthesia",
      image: "/treatment/ill-female.jpg",
    },
    {
      title: "Bio-Profiling FUE for maximum graft survival",
      image: "/treatment/young-woman.jpg",
    },
    {
      title: "GFC + PRP therapies boost healing and volume",
      image: "/treatment/woman-getting.jpg",
    },
    {
      title: "Transparent pricing with 0% EMI, no hidden costs",
      image: "/treatment/credit-score.jpg",
    },
  ];

  const [activeImage, setActiveImage] = useState(services[0].image);
  const [hoveredIndex, setHoveredIndex] = useState <number | null>(null);

  return (
    <div id='TRIKUT' className="w-full py-8 md:py-12 px-4" style={{ backgroundColor: colors.white }}>
      <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-13">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 inline-block relative">
            What Makes {" "}
              <span className="bg-gradient-to-r from-[#bc9c24] to-[#bc9c24] bg-clip-text text-transparent">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Left Side - Image with smooth transition */}
          <div className="relative lg:sticky lg:top-8 order-2 lg:order-1">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden relative">
              <img
                src={activeImage}
                alt="Hair Treatment"
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                style={{ minHeight: '300px', maxHeight: '500px' }}
              />
            </div>
          </div>

          {/* Right Side - Services List */}
          <div className="space-y-0 order-1 lg:order-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative border-b py-4 md:py-6 px-4 md:px-6 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: hoveredIndex === index ? colors.primary : colors.primaryLight,
                  borderColor: colors.primaryDark,
                  borderTop: index === 0 ? `1px solid ${colors.primaryDark}` : 'none',
                }}
                onMouseEnter={() => {
                  setActiveImage(service.image);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveImage(service.image)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 
                      className="text-base md:text-lg font-semibold leading-relaxed transition-colors duration-300"
                      style={{ 
                        color: hoveredIndex === index ? colors.white : colors.text 
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div 
                    className="ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0"
                    style={{ 
                      color: hoveredIndex === index ? colors.white : colors.text 
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="md:w-5 md:h-5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairTreatmentServices;