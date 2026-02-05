"use client";

import { ArrowRight, Target } from "lucide-react";
import { useState } from "react";
import ContactFormPopup from "./contact-form";

const WhoAreWeSection = () => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  // Using the same color scheme from the previous StatsSection component
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    white: "#ffffff",
    orange: "#ff6347",
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <>
    <div id="about" className="py-8 sm:py-12 md:py-16 lg:py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Mobile: WHO ARE WE? Label and Heading at top */}
        <div className="lg:hidden mb-4">
          <div className="mb-2">
            <h3
              className="text-xs sm:text-sm font-extrabold tracking-wider uppercase"
              style={{ color: colors.primaryDark }}
            >
              WHO ARE WE?
            </h3>
          </div>
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight"
            style={{ color: colors.text }}
          >
            Where Science Meets the Art of Symmetry
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Image Section */}
          <div className="relative order-1 lg:order-1">
            {/* Image Grid Layout - Flex with Two Divs - EXACT SAME LAYOUT ON MOBILE */}
            <div className="flex gap-3 sm:gap-4 md:gap-6">
              {/* First Div - Single Large Image (Left Side) */}
              <div className="flex-1">
                <div className="relative h-[250px] sm:h-[300px] md:h-full rounded-lg md:rounded-xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
                    {/* Placeholder for conference room / office space image */}
                    <img
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=700&fit=crop"
                      alt="Conference Room"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Second Div - Column with Two Images (Right Side) */}
              <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-6">
                {/* Top Image */}
                <div className="relative flex-1 h-[120px] sm:h-[140px] md:h-auto rounded-lg md:rounded-xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
                    {/* Placeholder for team meeting image */}
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop"
                      alt="Team Meeting"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Bottom Image */}
                <div className="relative flex-1 h-[120px] sm:h-[140px] md:h-auto rounded-lg md:rounded-xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
                    {/* Placeholder for team collaboration image */}
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=350&fit=crop"
                      alt="Team Collaboration"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Blur Elements - Responsive but same position */}
            <div
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-8 md:-left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full opacity-15 sm:opacity-20 blur-2xl sm:blur-3xl pointer-events-none"
              style={{ backgroundColor: colors.primary }}
            />
            <div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full opacity-15 sm:opacity-20 blur-2xl sm:blur-3xl pointer-events-none"
              style={{ backgroundColor: colors.orange }}
            />
          </div>

          {/* Right Side - Content Section */}
          <div className="relative order-2 lg:order-2">
            {/* WHO ARE WE? Label - Hidden on mobile, shown on large screens */}
            <div className="hidden lg:block mb-2 sm:mb-1 md:mb-0 md:mb-1">
              <h3
                className="text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase"
                style={{ color: colors.primaryDark }}
              >
                WHO ARE WE?
              </h3>
            </div>

            {/* Main Heading - Hidden on mobile, shown on large screens */}
            <h2
              className="hidden lg:block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-2 sm:mb-1 md:mb-2"
              style={{ color: colors.text }}
            >
              Where Science Meets the Art of Symmetry
            </h2>

            <div className="mb-4 sm:mb-3 md:mb-2 md:mb-4">
              {/* Text Wrapper */}
              <div
                className={`text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 space-y-3 sm:space-y-4 transition-all duration-300 ${
                  expanded ? "" : "line-clamp-5 sm:line-clamp-6 md:line-clamp-7"
                }`}
              >
                <p>
                  At Sculpt The Maxillofacial Clinic, we believe that hair
                  restoration is where medical science meets the art of facial
                  symmetry. Located in the heart of Bangalore{" "}
                  <span className="font-semibold text-gray-800">
                    our clinic is led by Dr. Priyanka Raj, a Gold Medalist and
                    specialized Maxillofacial Surgeon
                  </span>
                  ,{" "}
                  <span className="font-semibold text-gray-800">
                    who brings a unique facial-first perspective to every
                    procedure. Unlike general cosmetic centers, we don't just
                    focus on graft counts;
                  </span>
                  , we utilize our deep expertise in facial anatomy to design
                  hairlines that perfectly complement your bone structure,
                  ensuring a result that looks natural, balanced, and virtually
                  undetectable.
                </p>

                <p>
                  Our mission is built on the philosophy of Natural, Not
                  Artificial. We combine state-of-the-art technology including{" "}
                  <span className="font-semibold text-gray-800">
                    our signature Bio-Profiling FUE and GFC therapies with a
                    patient-centric approach that prioritizes long-term follicle
                    health and safety.
                  </span>{" "}
                  From the first consultation to our meticulous post-operative
                  care,{" "}
                  <span className="font-semibold text-gray-800">
                    every step is designed to restore more than just your hair;
                  </span>{" "}
                  we aim to restore your confidence and your edge through
                  precision, ethics, and world-class clinical excellence.
                </p>
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setExpanded(!expanded)}
                style={{ color: colors.primaryDark }}
                className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#bc9c24] focus:ring-offset-2 rounded px-1" 
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className="flex justify-center lg:justify-center">
              
              <button
              onClick={() => setContactPopupOpen(true)}
                className="group relative bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] text-white rounded-full py-2.5 px-5 sm:py-3 sm:px-6 md:py-3 md:px-7 text-sm sm:text-base md:text-lg font-bold transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:from-[#8b6c0d] hover:to-[#bc9c24] active:translate-y-0 overflow-hidden shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#bc9c24] focus:ring-offset-2"
              >
                <div className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 whitespace-nowrap">
                  Schedule Your Hair Consultation
                  <ArrowRight size={16} className="sm:size-5 md:size-6 lg:size-6" />
                </div>

                {/* Shine Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full" />
              </button>
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

export default WhoAreWeSection;