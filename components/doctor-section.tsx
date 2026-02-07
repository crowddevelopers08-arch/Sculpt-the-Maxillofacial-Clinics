"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Star } from "lucide-react"

export function DoctorSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
     <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
   
    <section id="doctor" ref={sectionRef} className="py-20 max-[426px]:py-5  lg:py-10 bg-white"style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-[426px]:mb-8 mb-16">
          <h2
            className={`text-3xl max-[426px]:text-[22px] max-[426px]:mb-0 sm:text-4xl lg:text-5xl font-bold text-black mb-6 font-sans ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Meet Our <span className="text-primary">Expert</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card
            className={`bg-gradient-to-br from-black to-black/90 border-primary/20 overflow-hidden ${
              isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"
            }`}
          >
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Doctor Image */}
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <img
                    src="Dr. Priyanka Raj.jpg"
                    alt="Dr. Priyanka Raj"
                    className="w-full h-full object-cover pl-[20px] max-[470px]:pl-[10px] max-[470px]:pr-[10px] max-[426px]:h-[500px]"
                  />
                  <div className="absolute inset-0 max-[426px]:h-[500px] bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
                </div>

                {/* Doctor Info */}
                <div className="p-8 max-[426px]:p-4 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6 max-[426px]:mb-0">
                    <h3 className="text-2xl max-[426px]:text-[22px] lg:text-3xl font-bold text-primary mb-2 font-sans">Dr. Priyanka Raj</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 max-[426px]:text-[16px] text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Trusted Maxillofacial Surgeon in Bangalore
                      </span>
                      {/* <span className="bg-primary/10 max-[420px]:text-[16px] text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Award-Winning Surgeon
                      </span> */}
                      {/* <span className="bg-primary/10 max-[420px]:text-[16px] text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Internationally Published
                      </span> */}
                    </div>
                  </div>

                  <p className="text-gray-300 max-[426px]:text-[16px] max-[426px]:mb-4 leading-relaxed mb-8 text-lg">
                    Dr. Priyanka Raj, an MDS in Maxillofacial Surgery, brings specialised expertise in hair transplants,
                    facial aesthetics, and reconstructive surgery. Trusted by more than a thousand patients for her
                    precision, ethics, and artistry, she is known for results that look natural and never artificial.
                  </p>

                  <p className="text-gray-300 max-[426px]:text-[16px] max-[426px]:mb-4 leading-relaxed mb-8">
                    As an international conference speaker and pioneer of minimally invasive techniques, she ensures her
                    patients receive treatments that are both advanced and safe. Her philosophy is simple: beauty should
                    enhance who you are, not change you into someone else.
                  </p>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 gap-4 max-[426px]:mb-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-primary" />
                      <span className="text-white">Gold Medalist</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <span className="text-white">Internationally Published Author</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span className="text-white">1000+ Patients</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-6 h-6 text-primary" />
                      <span className="text-white">Expert Speaker</span>
                    </div>
                  </div>
                  <a href="#contact-section">
                  <Button
                    size="lg"
                    className="bg-primary max-[376px]:text-[13px] max-[470px]:text-[16px] max-[426px]:py-[20px] hover:bg-primary/90 text-black font-bold text-lg px-8 py-4 rounded-full w-full lg:w-auto transform hover:scale-105 transition-all duration-300"
                  >
                   I'm Ready To Get The Best Consultation
                  </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
     </>
  )
}
