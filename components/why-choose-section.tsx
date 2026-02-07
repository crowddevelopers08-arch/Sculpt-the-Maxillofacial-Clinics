"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Shield, Smile, Zap, Heart, Headphones } from "lucide-react"

const features = [
  {
    icon: UserCheck,
    title: "Meet the Expert, Not Assistants",
    description: "Every consultation is led or supervised by Dr. Priyanka Raj herself.",
  },
  {
    icon: Shield,
    title: "Honest Guidance You Can Trust",
    description: "Clear options, transparent costs, and no unnecessary upselling.",
  },
  {
    icon: Smile,
    title: "Natural, Not Artificial",
    description: "Enhancements that keep your expressions intact and never overdone.",
  },
  {
    icon: Zap,
    title: "World-Class Technology",
    description: "Safe, precise, and designed for faster recovery.",
  },
  {
    icon: Heart,
    title: "Personalised Treatment Plans",
    description: "Custom solutions based on your face, skin, and goals.",
  },
  {
    icon: Headphones,
    title: "Care That Puts You First",
    description: "From first call to final follow-up, you always feel valued and heard.",
  },
]

export function WhyChooseSection() {
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
    <section ref={sectionRef} className="py-20 max-[426px]:py-5 lg:py-10 bg-black"style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-[426px]:mb-8 mb-16">
          <h2
            className={`text-3xl max-[426px]:text-[22px] sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-sans ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Why We're Bangalore's <span className="text-primary">#1 Choice</span> for Skin & Hair Aesthetics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className={`bg-white/5 border-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:scale-105 hover:bg-white/10 ${
                  isVisible ? `animate-fade-in-up animation-delay-${(index + 1) * 200}` : "opacity-0"
                }`}
              >
                <CardContent className="p-8 max-[426px]:p-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl max-[426px]:text-[22px] font-bold text-white mb-4 font-sans">{feature.title}</h3>

                  <p className="text-gray-300 max-[426px]:text-[16px] leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}
