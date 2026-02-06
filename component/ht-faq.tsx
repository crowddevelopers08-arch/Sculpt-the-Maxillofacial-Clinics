"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import ContactFormPopup from "./ht-contact-form";

const FrequentlyAskedQuestions = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
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

  const faqs = [
    {
      id: 1,
      question: "Is the hair transplant procedure painful? ",
      answer:
        "We use advanced local anesthesia and specialized numbing protocols to ensure a virtually painless experience throughout the session.",
    },
    {
      id: 2,
      question: "How long does it take to see the final results? ",
      answer:
        "Initial growth starts at 3 months, with significant density appearing at 6 months and full, final results visible within 10–12 months.",
    },
    {
      id: 3,
      question: "Will my hair transplant look natural? ",
      answer:
        "Yes, Dr. Priyanka utilizes Maxillofacial precision to mimic your natural hair's angle and direction, making the transplant indistinguishable.",
    },
    {
      id: 4,
      question: "How many days of rest do I need after the surgery?",
      answer:
        "Most clients return to light desk work within 2–3 days, though we recommend avoiding strenuous exercise for two weeks.",
    },
    {
      id: 5,
      question: "Are the results of the transplant permanent? ",
      answer:
        "Yes, we harvest follicles from the permanent zone at the back of the head, which are genetically resistant to thinning and balding.",
    },
    {
      id: 6,
      question: "What is the cost of a hair transplant at Sculpt?",
      answer:
        "Pricing is transparent and based on the number of grafts required, we provide a custom quote after a thorough scalp analysis.",
    },
    {
      id: 7,
      question: "Can women also undergo hair restoration at your clinic?",
      answer:
        "Absolutely, we offer specialized female hair transplants and non-surgical GFC therapies tailored to female thinning patterns.",
    },
    {
      id: 8,
      question: "Are there any side effects?",
      answer:
        "Minor swelling or redness may occur for a few days, but our surgeon-led post-op care ensures a safe and smooth recovery.",
    },
  ];

  const toggleFAQ = (index : number ) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Show first 5 on mobile, all on desktop
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <>
    <div
      id="faq"
      className="py-4 md:py-20 lg:py-8 bg-gradient-to-br from-yellow-50 to-yellow-100"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-4 md:mb-8">
          <h2
            className="text-2xl md:text-4xl lg:text-4xl font-extrabold mb-1"
            style={{ color: colors.text }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-md md:text-lg max-w-3xl mx-auto"
            style={{ color: colors.textLight }}
          >
            Questions clients Commonly Ask About Hair Transplant
          </p>
          
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

        {/* FAQ Grid - 2 Columns on Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-5">
          {/* Show first 5 on mobile unless showAll is true, all on desktop */}
          {(typeof window !== "undefined" && window.innerWidth >= 1024
            ? faqs
            : displayedFaqs
          ).map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
              style={{
                border:
                  openIndex === index
                    ? `2px solid ${colors.primary}`
                    : "2px solid transparent",
              }}
            >
              {/* Question Header - Clickable */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-start justify-between gap-4 text-left transition-colors duration-300 hover:bg-gray-50"
              >
                <h3
                  className="text-md md:text-lg font-bold flex-1"
                  style={{ color: colors.text }}
                >
                  {faq.question}
                </h3>

                {/* Plus/Minus Icon */}
                <div
                  className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor:
                      openIndex === index
                        ? colors.primary
                        : colors.primaryLight,
                  }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" strokeWidth={3} />
                  ) : (
                    <Plus
                      className="w-5 h-5"
                      style={{ color: colors.primaryDark }}
                      strokeWidth={3}
                    />
                  )}
                </div>
              </button>

              {/* Answer - Expandable */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                }}
              >
                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                  <p
                    className="text-sm md:text-md leading-relaxed"
                    style={{ color: colors.textLight }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More/Less Button - Only on Mobile */}
        {faqs.length > 5 && (
          <div className="flex justify-center mt-2 md:mt-6 lg:hidden">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-base font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-4 py-2"
              style={{
                color: colors.primaryDark,
                borderColor: colors.primary,
              }}
            >
              {showAll ? "Show Less" : "Read More"}
            </button>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-2 md:mt-8 text-center">
            <div className="flex justify-center">
              <button
              onClick={() => setContactPopupOpen(true)}
                className="
                  group relative
                  bg-gradient-to-r from-[#bc9c24] to-[#bc9c24]
                  text-white rounded-full
                  
                  px-5 py-2.5          /* mobile smaller */
                  md:px-7 md:py-3.5    /* desktop bigger */

                  text-sm md:text-lg
                  font-bold
                  
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:from-[#bc9c24] hover:to-[#bc9c24]
                  active:translate-y-0
                  overflow-hidden
                "
              >
                <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3 text-center">
                  {/* Mobile short text */}
                  <span className="md:hidden">Consult Now</span>

                  {/* Desktop full text */}
                  <span className="hidden md:inline">
                    Schedule Your Hair Consultation
                  </span>

                  <ArrowRight size={18} className="md:w-5 md:h-5" />
                </div>

                {/* Shine Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full" />
              </button>
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

export default FrequentlyAskedQuestions;
