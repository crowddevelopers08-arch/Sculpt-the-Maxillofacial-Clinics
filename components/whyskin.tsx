"use client"

import { ArrowRight, CheckCircle } from "lucide-react"

export default function WhyTrustSectionskin() {
  const trustPoints = [
    {
      title: "Personalised Treatment Plans",
      description: "Custom solutions that respect your unique skin type and concerns."
    },
    {
      title: "Expert Guidance",
      description: "Every procedure overseen by Dr. Priyanka Raj for safe, effective results."
    },
    {
      title: "World-Class Technology",
      description: "Advanced lasers, facials, and minimally invasive techniques."
    },
    {
      title: "Compassionate Care",
      description: "Honest advice, clear costs, and ongoing support from consultation to follow-up."
    },
    {
      title: "Natural Results",
      description: "Enhancements that look effortless and never overdone."
    }
  ]

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        .trust-section {
          background: linear-gradient(rgba(14, 14, 13, 0.9), rgba(0, 0, 0, 0.9)), 
                     url('/backkk.jpeg');
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .trust-card {
          background: linear-gradient(145deg, #0e0e0d 0%, #000000 100%);
          border: 1px solid #1a1a1a;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          max-width: 400px;
          width: 100%;
        }
        
        .trust-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d49f17, transparent);
          transition: left 0.5s ease;
        }
        
        .trust-card:hover::before {
          left: 100%;
        }
        
        .trust-card:hover {
          transform: translateY(-5px);
          border-color: #d49f17;
          box-shadow: 0 15px 30px rgba(212, 159, 23, 0.1);
        }
        
        .gold-accent {
          color: #d49f17;
        }
        
        .gold-gradient {
          background: linear-gradient(135deg, #d49f17 0%, #f5d76e 100%);
        }
        
        .gold-glow:hover {
          box-shadow: 0 10px 30px rgba(212, 159, 23, 0.3);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .check-icon {
          background: linear-gradient(135deg, #d49f17 0%, #f5d76e 100%);
        }
      `}</style>

      <section className="trust-section py-20 max-[470px]:py-10 mt-[50px] max-[470px]:mt-[25px] px-4 sm:px-6 lg:px-8" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
        <div className="text-center mb-16">
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-[470px]:mb-0 mb-6">
    Why Trust Sculpt The Maxillofacial Clinic?
  </h2>
</div>

          {/* Trust Points Container - Centered with Flex */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="trust-card rounded-xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  {/* Check Icon */}
                  <div className="flex-shrink-0">
                    <div className="check-icon rounded-full p-2">
                      <CheckCircle className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative inline-flex group mb-6">
              {/* Gradient Border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#d49f17] to-[#f5d76e] opacity-75 group-hover:opacity-100 blur transition-all duration-200 group-hover:shadow-lg group-hover:shadow-[#d49f17]/50"></div>
              
              {/* Button */}
              <a href="#skinform">
              <button className="relative cursor-pointer bg-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 group-hover:bg-[#0e0e0d] flex items-center">
                Book My Appointment Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              </a>
            </div>
            
            {/* Supporting Text */}
            <p className="text-gray-500 text-sm">
              Take the first step towards your transformation today
            </p>
          </div>
        </div>
      </section>
    </>
  )
}