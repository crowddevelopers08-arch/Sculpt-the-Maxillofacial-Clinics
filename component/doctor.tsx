"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactFormPopup from "./contact-form";

const MeetDrPriyankaRaj = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandeds, setExpandeds] = useState(false);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  // Using the same color scheme from previous components
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    blue: "#2196F3",
  };

  return (
    <>
    <div id="doctors" className="py-8 md:py-12 lg:py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Heading */}
        <div className="text-center mb-5 md:mb-10">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-4xl text-[#333333] mb-1 leading-tight">
            Meet Dr.{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] bg-clip-text text-transparent">
              Priyanka Raj (MDS)
            </span>
          </h2>

          <p className="text-md md:text-lg text-[#333333] opacity-80 max-w-3xl mx-auto font-normal">
            Specialist Maxillofacial Surgeon & Hair Restoration Expert
          </p>
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

        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6">
          {/* First Section - Image then Text */}
          <div className="space-y-4">
            {/* First Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="CLINIC-pic5.jpg"
                alt="Team Collaboration"
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>

            {/* First Text Content */}
            <div className="text-center">
              <h3
                className="text-sm md:text-lg font-extrabold tracking-wider uppercase"
                style={{ color: colors.primaryDark }}
              >
                Dr. Priyanka Raj (MDS) :
              </h3>
              <div className="mt-2">
                <div
                  className={`transition-all duration-300 space-y-3 leading-relaxed ${
                    expanded ? "" : "line-clamp-3"
                  }`}
                  style={{ color: colors.textLight }}
                >
                  <p className="text-base md:text-md">
                    Highly skilled Oral and Maxillofacial Surgeon and the
                    clinical lead at Sculpt The Maxillofacial Clinic. With over
                    6 years of specialized surgical experience, she is
                    recognized for her ability to combine medical precision with
                    a refined aesthetic eye.
                  </p>

                  <p className="text-base md:text-md">
                    A distinguished academic, Dr. Priyanka was a University rank
                    holder during her MDS and has been awarded numerous
                    accolades, including the prestigious Gold Medal for her
                    excellence in surgery. Her background in maxillofacial
                    surgery gives her a unique advantage in hair restoration, as
                    she deeply understands the underlying facial anatomy,
                    ensuring that every hairline she designs is perfectly
                    symmetrical and naturally proportioned to the patient's
                    face.
                  </p>
                </div>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-sm font-semibold mt-2 hover:underline"
                  style={{ color: colors.primaryDark }}
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>

          {/* Second Section - Image then Text */}
          <div className="space-y-4">
            {/* Second Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop"
                alt="Modern Office Space"
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>

            {/* Second Text Content */}
            <div className="text-center">
              <h3
                className="text-sm md:text-base font-extrabold tracking-wider uppercase"
                style={{ color: colors.primaryDark }}
              >
                Beyond her clinical practice :
              </h3>

              <div>
                <p
                  className={`text-base md:text-md leading-relaxed transition-all duration-300 ${
                    expandeds ? "" : "line-clamp-3"
                  }`}
                  style={{ color: colors.textLight }}
                >
                  Dr. Priyanka is a respected figure in the medical community,
                  frequently contributing to international conferences and
                  workshops as an expert speaker.{" "}
                  <span
                    className="font-bold"
                    style={{ color: colors.primaryDark }}
                  >
                    She has successfully performed over 1,000 procedures,
                  </span>{" "}
                  ranging from scalp hair transplants to intricate beard and
                  eyebrow reconstructions.
                </p>

                <button
                  onClick={() => setExpandeds(!expandeds)}
                  className="text-sm font-semibold mt-2 hover:underline"
                  style={{ color: colors.primaryDark }}
                >
                  {expandeds ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Top Section - Text Content */}
            <div className="text-center lg:text-left">
              <h3
                className="text-sm md:text-lg font-extrabold tracking-wider uppercase"
                style={{ color: colors.primaryDark }}
              >
                Dr. Priyanka Raj (MDS) :
              </h3>
              <div className="mt-2">
                {/* Wrapper for BOTH paragraphs */}
                <div
                  className={`transition-all duration-300 space-y-3 leading-relaxed ${
                    expanded ? "" : "line-clamp-3"
                  }`}
                  style={{ color: colors.textLight }}
                >
                  <p className="text-base md:text-md">
                    Highly skilled Oral and Maxillofacial Surgeon and the
                    clinical lead at Sculpt The Maxillofacial Clinic. With over
                    6 years of specialized surgical experience, she is
                    recognized for her ability to combine medical precision with
                    a refined aesthetic eye.
                  </p>

                  <p className="text-base md:text-md">
                    A distinguished academic, Dr. Priyanka was a University rank
                    holder during her MDS and has been awarded numerous
                    accolades, including the prestigious Gold Medal for her
                    excellence in surgery. Her background in maxillofacial
                    surgery gives her a unique advantage in hair restoration, as
                    she deeply understands the underlying facial anatomy,
                    ensuring that every hairline she designs is perfectly
                    symmetrical and naturally proportioned to the patient's
                    face.
                  </p>
                </div>

                {/* Toggle */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-sm font-semibold mt-2 hover:underline"
                  style={{ color: colors.primaryDark }}
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop"
                alt="Modern Office Space"
                className="w-full h-64 md:h-72 lg:h-80 object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Top Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop"
                alt="Team Collaboration"
                className="w-full h-64 md:h-72 lg:h-80 object-cover"
              />
            </div>

            {/* Bottom Section - Text Content */}
            <div className="text-center lg:text-left">
              <h3
                className="text-sm md:text-base font-extrabold tracking-wider uppercase"
                style={{ color: colors.primaryDark }}
              >
                Beyond her clinical practice :
              </h3>

              {/* Paragraph with toggle */}
              <div>
                <p
                  className={`text-base md:text-md leading-relaxed transition-all duration-300 ${
                    expandeds ? "" : "line-clamp-3"
                  }`}
                  style={{ color: colors.textLight }}
                >
                  Dr. Priyanka is a respected figure in the medical community,
                  frequently contributing to international conferences and
                  workshops as an expert speaker.{" "}
                  <span
                    className="font-bold"
                    style={{ color: colors.primaryDark }}
                  >
                    She has successfully performed over 1,000 procedures,
                  </span>{" "}
                  ranging from scalp hair transplants to intricate beard and
                  eyebrow reconstructions.
                </p>

                <button
                  onClick={() => setExpandeds(!expandeds)}
                  className="text-sm font-semibold mt-2 hover:underline"
                  style={{ color: colors.primaryDark }}
                >
                  {expandeds ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center mt-9 max-sm:mt-4">
          
           <button
           onClick={() => setContactPopupOpen(true)}
            className="group relative bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] text-white rounded-full py-3 px-7 md:text-lg text-md font-bold transition-all duration-400 hover:-translate-y-1 hover:from-[#8b6c0d] hover:to-[#bc9c24] active:translate-y-0 overflow-hidden"
          >
            <div className="relative z-10 flex items-center justify-center gap-3">
              Consult with Dr Priyanka
              <ArrowRight size={20} />
            </div>

            {/* a Shine Effect */}
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

export default MeetDrPriyankaRaj;