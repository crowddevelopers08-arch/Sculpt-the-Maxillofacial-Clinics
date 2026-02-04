// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight, } from "lucide-react";
// import Image from "next/image";

// const ServicesWeProvide = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Using the same color scheme from previous components
//   const colors = {
//     primary: "#bc9c24",
//     primaryDark: "#8b6c0d",
//     primaryLight: "#f4e8c1",
//     text: "#000000", // Navy blue for headings
//     textLight: "#6b7280", // Gray for descriptions
//     white: "#ffffff",
//     orange: "#ff6347",
//     bgLight: "#f8f9fa",
//   };

//   const services = [
//     {
//       id: 1,
//       icon: "/treatment/hair.png",
//       title: "Advanced FUE (Follicular Unit Extraction)",
//       description:
//         "A minimally invasive, stitch-less technique for a quick recovery and zero linear scarring.",
//       illustration: "essay",
//     },
//     {
//       id: 2,
//       icon: "/treatment/biography.png",
//       title: "Bio-Profiling FUE",
//       description:
//         "Our signature method that optimizes graft selection based on your biological hair profile for maximum density.",
//       illustration: "thesis",
//     },
//     {
//       id: 3,
//       icon: "/treatment/man.png",
//       title: "Beard & Eyebrow Reconstruction ",
//       description:
//         "Precision transplants to fill patches and define your facial features.",
//       illustration: "plagiarism",
//     },
//     {
//       id: 4,
//       icon: "/treatment/reproductive.png",
//       title: "GFC & PRP Therapy",
//       description:
//         "Non-surgical growth factor treatments to strengthen existing hair and accelerate post-op healing.",
//       illustration: "grammar",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % services.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
//   };

//   return (
//     <div className="py-6 md:py-10 lg:py-10 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Section Heading */}
//         <div className="text-center mb-2 md:mb-13">
//           <h2
//             className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 inline-block relative"
//             // style={{ color: colors.text }}
//           >
//             Tailored Solutions for Every Stage of Hair Loss
//           </h2>
//           <div className="flex justify-center">
//             <div className=" w-48 mt-4 flex justify-center gap-1">
//               {[...Array(12)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-1 w-1 rounded-full"
//                   style={{
//                     backgroundColor: colors.primaryDark,
//                     animation: `wave 1.5s ease-in-out infinite`,
//                     animationDelay: `${i * 0.1}s`,
//                   }}
//                 />
//               ))}
//             </div>
//             {/* // Add to your global CSS */}
//             <style jsx>{`
//               @keyframes wave {
//                 0%,
//                 100% {
//                   transform: translateY(0px);
//                 }
//                 50% {
//                   transform: translateY(-8px);
//                 }
//               }
//             `}</style>
//           </div>
//         </div>

//         {/* Services Grid with Navigation */}
//         <div className="relative">
//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 lg:-translate-x-12 z-10 w-12 h-20 md:w-6 md:h-25 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
//             style={{ backgroundColor: colors.primary }}
//             aria-label="Previous slide"
//           >
//             <ChevronLeft
//               className="w-5 h-5 text-white group-hover:translate-x-[-2px] transition-transform"
//               strokeWidth={3}
//             />
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 lg:translate-x-12 z-10 w-12 h-20 md:w-6 md:h-25 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
//             style={{ backgroundColor: colors.primary }}
//             aria-label="Next slide"
//           >
//             <ChevronRight
//               className="w-5 h-5 text-white group-hover:translate-x-[2px] transition-transform"
//               strokeWidth={3}
//             />
//           </button>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className="group relative bg-white rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
//               >
//                 {/* Service Icon in Circle */}
//                 <div className="relative mb-6 md:mb-8 flex justify-center">
//                   <div
//                     className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl relative overflow-hidden"
//                     style={{ backgroundColor: colors.bgLight }}
//                   >
//                     {/* Icon */}
//                     <Image
//                       src={service.icon}
//                       alt={service.title}
//                       width={70}
//                       height={70}
//                       className="relative z-10 object-contain"
//                     />

//                     {/* Animated Ring */}
//                     <div
//                       className="absolute inset-0 rounded-full border-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                       style={{ borderColor: colors.primary }}
//                     />
//                   </div>
//                 </div>

//                 {/* Service Title */}
//                 <h3
//                   className="text-md md:text-lg font-bold mb-3 md:mb-4 text-center group-hover:scale-105 transition-transform duration-300"
//                   style={{ color: colors.text }}
//                 >
//                   {service.title}
//                 </h3>

//                 {/* Service Description */}
//                 <p
//                   className="text-sm md:text-md leading-relaxed text-center"
//                   style={{ color: colors.textLight }}
//                 >
//                   {service.description}
//                 </p>

//                 {/* Hover Border Effect */}
//                 <div
//                   className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   style={{ borderColor: colors.primary }}
//                 />

//                 {/* Bottom Accent Line */}
//                 <div
//                   className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full group-hover:w-3/4 transition-all duration-500"
//                   style={{ backgroundColor: colors.primary }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots Indicator (Optional) */}
//         <div className="flex justify-center gap-3 mt-8 md:mt-12 lg:hidden">
//           {services.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className="w-3 h-3 rounded-full transition-all duration-300"
//               style={{
//                 backgroundColor:
//                   currentSlide === index ? colors.primary : colors.primaryLight,
//               }}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesWeProvide;


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
    text: "#000000", // Navy blue for headings
    textLight: "#6b7280", // Gray for descriptions
    white: "#ffffff",
    orange: "#ff6347",
    bgLight: "#f8f9fa",
  };

  const services = [
    {
      id: 1,
      icon: "/treatment/hair.png",
      title: "Advanced FUE (Follicular Unit Extraction)",
      description:
        "A minimally invasive, stitch-less technique for a quick recovery and zero linear scarring.",
      illustration: "essay",
    },
    {
      id: 2,
      icon: "/treatment/biography.png",
      title: "Bio-Profiling FUE",
      description:
        "Our signature method that optimizes graft selection based on your biological hair profile for maximum density.",
      illustration: "thesis",
    },
    {
      id: 3,
      icon: "/treatment/man.png",
      title: "Beard & Eyebrow Reconstruction ",
      description:
        "Precision transplants to fill patches and define your facial features.",
      illustration: "plagiarism",
    },
    {
      id: 4,
      icon: "/treatment/reproductive.png",
      title: "GFC & PRP Therapy",
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
            Tailored Solutions for Every Stage of Hair Loss
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
        <div className="block lg:hidden mb-8 relative px-12 max-sm:px-6 max-sm:mb-3">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 px-4 max-sm:px-2 max-sm:mb-2">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    {/* Service Icon in Circle */}
                    <div className="relative mb-6 flex justify-center">
                      <div
                        className="w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden"
                        style={{ backgroundColor: colors.bgLight }}
                      >
                        {/* Icon */}
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={70}
                          height={70}
                          className="relative z-10 object-contain"
                        />
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
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 z-10 border-2"
            style={{ borderColor: colors.primary, color: colors.primaryDark }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} strokeWidth={3} />
          </button>

          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8" : "w-2"
                }`}
                style={{
                  backgroundColor:
                    index === currentSlide ? colors.primaryDark : colors.textLight,
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid with Navigation */}
        <div className="hidden lg:block relative">
          {/* Left Arrow - Desktop */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group rounded-lg"
            style={{ backgroundColor: colors.primary }}
            aria-label="Previous slide"
          >
            <ChevronLeft
              className="w-6 h-6 text-white group-hover:translate-x-[-2px] transition-transform"
              strokeWidth={3}
            />
          </button>

          {/* Right Arrow - Desktop */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group rounded-lg"
            style={{ backgroundColor: colors.primary }}
            aria-label="Next slide"
          >
            <ChevronRight
              className="w-6 h-6 text-white group-hover:translate-x-[2px] transition-transform"
              strokeWidth={3}
            />
          </button>

          {/* Services Grid - Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Service Icon in Circle */}
                <div className="relative mb-6 md:mb-8 flex justify-center">
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl relative overflow-hidden"
                    style={{ backgroundColor: colors.bgLight }}
                  >
                    {/* Icon */}
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={70}
                      height={70}
                      className="relative z-10 object-contain"
                    />

                    {/* Animated Ring */}
                    <div
                      className="absolute inset-0 rounded-full border-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ borderColor: colors.primary }}
                    />
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
                <div
                  className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ borderColor: colors.primary }}
                />

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full group-hover:w-3/4 transition-all duration-500"
                  style={{ backgroundColor: colors.primary }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWeProvide;
