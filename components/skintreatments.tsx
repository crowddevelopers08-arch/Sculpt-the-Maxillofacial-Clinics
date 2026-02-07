"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Skintreatment() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const treatments = [
    {
      id: 1,
      title: "Melasma Treatment",
      subtitle: "",
      description: "Clear stubborn pigmentation and uneven tone with advanced laser and peel therapies that are safe for all skin types and provide long-lasting results.",
      image: "skinmilasma.jpeg"
    },
    {
      id: 3,
      title: "Carbon Laser Facial",
      subtitle: "",
      description: "Brighten and refresh your skin in one session while clearing pores, evening tone, boosting collagen, and leaving a healthy glow.",
      image: "laserskin.jpeg"
    },
    {
      id: 4,
      title: "Acne Scar Reduction",
      subtitle: "",
      description: "Fade acne scars and improve skin texture using peels, microneedling, and laser therapies for smoother and healthier-looking skin.",
      image: "acneskin.jpeg"
    },
    {
      id: 5,
      title: "Skin Tightening & Collagen Boosting",
      subtitle: "",
      description: "Lift and firm sagging areas while boosting elasticity with non-surgical treatments that restore youthful contours and tone.",
      image: "tight.jpg"
    }
  ]

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        .treatment-card {
          background: linear-gradient(145deg, #0e0e0d 0%, #000000 100%);
          border: 1px solid #1a1a1a;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .treatment-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d49f17, transparent);
          transition: left 0.5s ease;
        }
        
        .treatment-card:hover::before {
          left: 100%;
        }
        
        .treatment-card:hover {
          transform: translateY(-8px);
          border-color: #d49f17;
          box-shadow: 0 20px 40px rgba(212, 159, 23, 0.15);
        }
        
        .treatment-image {
          transition: transform 0.3s ease;
        }
        
        .treatment-card:hover .treatment-image {
          transform: scale(1.05);
        }
        
        .gold-accent {
          color: #d49f17;
        }
        
        .gold-border {
          border-color: #d49f17;
        }
        
        .gold-gradient {
          background: linear-gradient(135deg, #d49f17 0%, #f5d76e 100%);
        }
        
        .gold-glow:hover {
          box-shadow: 0 10px 30px rgba(212, 159, 23, 0.3);
        }
        
        .section-title {
          position: relative;
          display: inline-block;
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
        
        .image-overlay {
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
        }

        .treatment-content {
          position: relative;
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .treatment-description {
          color: #9ca3af;
          line-height: 1.6;
          transition: all 0.3s ease;
          flex: 1;
        }

        .treatment-card:hover .treatment-description {
          color: #e5e7eb;
        }

        .treatment-title-container {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;
          right: 1.5rem;
          z-index: 10;
        }

        .treatment-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.25rem;
        }

        .treatment-subtitle {
          color: #d49f17;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .content-title-container {
          margin-bottom: 1rem;
        }

        .content-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.25rem;
        }

        .content-subtitle {
          color: #d49f17;
          font-size: 0.875rem;
          font-weight: 500;
        }

        /* Responsive card sizing - Increased width and reduced height */
        .card-container {
          max-width: 320px;
          width: 100%;
          flex: 1;
          min-height: 420px;
        }

        @media (max-width: 1200px) {
          .card-container {
            max-width: 300px;
          }
        }

        @media (max-width: 1024px) {
          .card-container {
            max-width: 280px;
            min-height: 400px;
          }
        }

        @media (max-width: 768px) {
          .card-container {
            max-width: 100%;
            min-width: 320px;
            min-height: 380px;
          }
        }

        @media (max-width: 640px) {
          .card-container {
            min-width: 280px;
            min-height: 360px;
          }
        }

        @media (max-width: 480px) {
          .card-container {
            min-width: 100%;
            min-height: 340px;
          }
        }

        /* Reduced image height */
        .image-container {
          height: 200px;
        }

        /* Grid layout for proper alignment */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          align-items: stretch;
        }

        @media (min-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 1024px) and (min-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section className="bg-black py-12 max-[470px]:py-6 px-4 sm:px-6 lg:px-8" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tailored Solutions for Every Skin Concern
            </h2>
            <p className="text-lg max-[470px]:text-[16px] text-gray-400 max-w-3xl mx-auto">
              Expert treatments designed to address your unique skin needs with precision and care
            </p>
          </div>

          {/* Treatment Cards Container - Grid Layout */}
          <div className="cards-grid max-[470px]:mb-8 mb-16">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className={`treatment-card rounded-2xl overflow-hidden cursor-pointer group card-container ${
                  activeCard === treatment.id ? 'border-[#d49f17]' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveCard(treatment.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image Container with reduced height */}
                <div className="relative overflow-hidden flex-shrink-0 image-container">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="treatment-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 image-overlay opacity-60"></div>
                </div>

                {/* Content - Now below the image */}
                <div className="treatment-content">
                  {/* Title in content area */}
                  <div className="content-title-container">
                    <h3 className="content-title">
                      {treatment.title}
                    </h3>
                    {treatment.subtitle && (
                      <p className="content-subtitle">
                        {treatment.subtitle}
                      </p>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="treatment-description">
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative inline-flex group">
              {/* Gradient Border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#d49f17] to-[#f5d76e] opacity-75 group-hover:opacity-100 blur transition-all duration-200 group-hover:shadow-lg group-hover:shadow-[#d49f17]/50"></div>
              
              {/* Button */}
              <a href="#skinform">
              <button className="relative cursor-pointer bg-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 group-hover:bg-[#0e0e0d] flex items-center">
                Talk to Our Expert
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              </a>
            </div>
            
            {/* Supporting Text */}
            <p className="text-white mt-6 text-sm">
              Get personalized advice from our skincare specialists
            </p>
          </div>
        </div>
      </section>
    </>
  )
}