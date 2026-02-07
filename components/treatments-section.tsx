"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {Stethoscope, Sparkles, Syringe, Zap } from "lucide-react"

const treatments = [
  {
    icon: Stethoscope,
    title: "Hair Transplant",
    description:
      "Get back your hair and your confidence with a gentle treatment that restores receding hairlines and thinning crowns while keeping results natural and scar free",
    image: "hairrrr.png?height=400&width=600",
  },
  {
    icon: Sparkles,
    title: "Melasma Treatment (Laser and Peel Therapy)",
    description:
      "Clear stubborn pigmentation and uneven tone with advanced laser and peel therapies that work safely on all skin types and give long lasting clarity",
    image: "lasernew.png?height=400&width=600",
  },

  {
    icon: Zap,
    title: "Carbon Laser Facial",
    description:
      "Make your skin brighter and clearer in one session with a treatment that clears pores evens tone boosts collagen and leaves a healthy glow",
    image: "newlaseroneee.png?height=400&width=600",
  },
    {
    icon: Syringe,
    title: "Fillers",
    description:
      "Smooth out wrinkles and bring back youthful volume with quick treatments that keep your natural look intact and give soft balanced results",
    image: "filllers.png?height=400&width=600",
  },
]

export function TreatmentsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
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
    <section id="treatments" ref={sectionRef} className="py-20 max-[426px]:py-5 lg:py-10 bg-black"style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-[426px]:mb-8 mb-16">
          <h2
            className={`text-3xl max-[426px]:text-[22px] max-[426px]:mb-0 sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-sans ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Personalised Treatments Designed to <span className="text-primary">Bring Out Your Best Beauty</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon
            return (
              <Card
                key={treatment.title}
                className={`bg-white/5 border-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? `animate-fade-in-up animation-delay-${(index + 1) * 200}` : "opacity-0"
                }`}
              >
                <CardContent className="p-8 max-[426px]:p-4">
                  <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl max-[426px]:text-[22px] lg:text-2xl font-bold text-white mb-4 font-sans">{treatment.title}</h3>
                      <p className="text-gray-300 max-[426px]:text-[16px] max-[426px]:mb-3 leading-relaxed mb-6">{treatment.description}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <img
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.title}
                      className="w-full h-[300px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className={`text-center max-[426px]:mt-8 mt-16 ${isVisible ? "animate-fade-in-up animation-delay-800" : "opacity-0"}`}>
          <a href="#contact-section">
          <Button
            size="lg"
            className="bg-primary max-[426px]:text-[22px] max-[426px]:py-[10px] hover:bg-primary/90 text-black font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Count Me In!
          </Button>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
