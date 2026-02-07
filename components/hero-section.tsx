"use client"

import { Button } from "@/components/ui/button"
import { Star, Users, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-12" style={{fontFamily: "'Outfit', sans-serif"}}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-[50px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Text Content - Left Side */}
            <div className="w-full lg:w-1/2 text-left animate-fade-in-left">
              {/* Pre-headline */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Bangalore's Premium Aesthetic Clinic
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl max-[470px]:text-center sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                From Hairlines to <span className="text-primary">Fine Lines</span>
              </h1>

              <h2 className="text-xl max-[470px]:text-center sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 leading-snug">
                All Your Beauty Needs Delivered Under One Roof
              </h2>

              {/* Subheadline */}
              <p className="text-lg max-[470px]:text-center text-gray-600 mb-8 max-w-xl">
                Bangalore's Trusted Destination for Safe, Proven, and Lasting Results in 
                Hair Restoration and Aesthetic Treatments.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-start p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Star className="w-5 h-5 text-primary mr-2" />
                    <span className="text-2xl max-[470px]:text-[16px] font-bold text-gray-900">4.9/5</span>
                  </div>
                  <p className="text-gray-600 text-[16px] max-[470px]:text-[10px]">Google Rating</p>
                </div>

                <div className="flex flex-col items-start p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    <span className="text-2xl font-bold max-[470px]:text-[16px] text-gray-900">7+</span>
                  </div>
                  <p className="text-gray-600 text-[16px] max-[470px]:text-[10px]"> years of expertise in maxillofacial surgery</p>
                </div>

                <div className="flex flex-col items-start p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Users className="w-5 h-5 text-primary mr-2" />
                    <span className="text-2xl font-bold max-[470px]:text-[16px] text-gray-900">1000+</span>
                  </div>
                  <p className="text-gray-600 text-[16px] max-[470px]:text-[10px]">Happy Patients</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-8 flex max-[470px]:justify-center">
                <a href="#contact-section">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                  >
                    Begin My Journey
                  </Button>
                </a>
              </div>
            </div>

            {/* Image Content - Right Side */}
            <div className="w-full lg:w-1/2 animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary rounded-xl z-0"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="Untitled.jpg"
                    alt="Sculpt Clinic Interior"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating certification badge */}
                <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-3 flex items-center z-20">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Star className="w-6 h-6 text-primary" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Certified Experts</p>
                    <p className="text-xs text-gray-600">Medical Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Only show on mobile where content continues below */}
        <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  )
}