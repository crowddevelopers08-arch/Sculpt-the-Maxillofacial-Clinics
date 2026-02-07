"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Eye, Clock, TrendingUp, Pill, RefreshCw } from 'lucide-react';

const faqs = [
  {
    question: "Will people notice I had treatment?",
    answer: "No, results look natural and effortless. Our advanced techniques and artistic approach ensure seamless integration with your existing hair.",
    icon: <Eye size={24} className="text-[#c99500]" />
  },
  {
    question: "How much downtime is needed?",
    answer: "Minimal. Most return to daily activities the same day. You can resume work within 24-48 hours with proper care instructions.",
    icon: <Clock size={24} className="text-[#c99500]" />
  },
  {
    question: "How soon will I see results?",
    answer: "New growth begins in weeks, with full results in months. Typically, you'll see initial growth at 3-4 months and complete results by 12-18 months.",
    icon: <TrendingUp size={24} className="text-[#c99500]" />
  },
  {
    question: "Is it painful?",
    answer: "No. Local anaesthesia keeps you comfortable throughout. Most patients report minimal discomfort during and after the procedure.",
    icon: <Pill size={24} className="text-[#c99500]" />
  },
  {
    question: "Do you offer follow-ups?",
    answer: "Yes. Every procedure includes aftercare and follow-ups. We provide comprehensive care for the first year and beyond.",
    icon: <RefreshCw size={24} className="text-[#c99500]" />
  }
];

export default function FAQSectionhair() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
  
    
    <section className="py-12 max-[470px]:py-6 md:py-16 lg:py-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"style={{fontFamily: "'Outfit', sans-serif"}}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#c99500]/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-16 w-40 h-40 bg-[#c99500]/5 rounded-full animate-pulse-medium"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-[#c99500]/5 rounded-full animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 max-[470px]:mb-4 md:mb-12 lg:mb-4">
         
          <h2 className="text-[40px] max-[470px]:text-[22px] sm:text-4xl md:text-5xl font-black max-[470px]:mb-2 mb-4 md:mb-6 leading-tight animate-fade-in-up">
            Frequently Asked <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#c99500] to-[#e6b800] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group"
                  aria-expanded={expandedFaq === index}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      {faq.icon}
                    </div>
                    <span className="font-bold text-base md:text-lg lg:text-xl text-gray-900 group-hover:text-[#c99500] transition-all duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2 ${
                    expandedFaq === index 
                      ? 'bg-[#c99500] rotate-180 scale-105' 
                      : 'bg-gray-100 group-hover:bg-[#c99500]/10 group-hover:scale-105'
                  }`}>
                    {expandedFaq === index ? (
                      <ChevronUp size={16} className="text-white md:w-5 transition-transform duration-300" />
                    ) : (
                      <ChevronDown size={16} className="text-[#c99500] md:w-5 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-5 lg:pb-6">
                    <div className="bg-[#c99500]/5 rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 border-l-4" style={{ borderColor: '#c99500' }}>
                      <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ultra CTA */}
        <div className="text-center mt-12 max-[470px]:mt-6 md:mt-14 lg:mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative inline-flex items-center justify-center group">
                                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
                                    <a href="#hairform" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">
                                        
                                        Start My Hair Transformation
                                                           <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#0d0d0d] rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 flex-shrink-0">
                <Sparkles size={14} className="md:w-5 text-[#c99500] transition-transform duration-300 group-hover:scale-110" />
              </div>
                                    </a>
                  
                                </div>
        </div>
      </div>


               
   <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes pulseMedium {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.03); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulseMedium 6s ease-in-out infinite;
        }
      `}</style>
    </section>
    </>
  );
}