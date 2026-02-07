"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Will people notice I had treatment?",
    answer: "Not really. Your skin will look healthier, fresher, and naturally radiant, but no one will guess you had a procedure done."
  },
  {
    question: "How much downtime is needed?",
    answer: "Most treatments have little to no downtime. Many patients return to work the same day."
  },
  {
    question: "When will I see results?",
    answer: "Some treatments show results instantly, while others like scar reduction or tightening improve over weeks."
  },
  {
    question: "Are the treatments painful?",
    answer: "Most are painless or performed with numbing for complete comfort."
  },
  {
    question: "Do you provide follow-ups?",
    answer: "Yes, all treatments include aftercare and follow-up visits to ensure lasting results."
  }
];

export default function FAQSectionskin() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <section className="py-12 max-[470px]:py-6 px-4 sm:px-6 lg:px-8 bg-black" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-[470px]:mb-8 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about our skin treatments
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-[#0e0e0d] border border-[#1a1a1a] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#d49f17]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center transition-all duration-300"
                    aria-expanded={expandedFaq === index}
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown size={20} className="text-[#d49f17]" />
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="border-l-2 border-[#d49f17] pl-4">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative inline-flex group">
              {/* Gradient Border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#d49f17] to-[#f5d76e] opacity-75 group-hover:opacity-100 blur transition-all duration-200 group-hover:shadow-lg group-hover:shadow-[#d49f17]/50"></div>
              
              {/* Button */}
              <a href="#skinform">
              <button className="relative cursor-pointer bg-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 group-hover:bg-[#0e0e0d] flex items-center">
                Start My Skin Transformation
                <ChevronDown className="ml-2 w-5 h-5 transform -rotate-90 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              </a>
            </div>
            
            {/* Supporting Text */}
            <p className="text-white mt-4 text-sm">
              Get personalized advice from our skincare specialists
            </p>
          </div>
        </div>
      </section>
    </>
  );
}