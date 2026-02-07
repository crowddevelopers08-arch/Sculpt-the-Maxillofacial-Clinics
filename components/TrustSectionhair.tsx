"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Clock, Zap, Heart, Headphones } from "lucide-react"

const features = [
  {
    icon: UserCheck,
    title: "Every treatment guided by a specialist with proven surgical expertise",
    description: "",
  },
  {
    icon: Clock,
    title: "Results that last for years, with hair that ages naturally with you",
    description: "",
  },
  {
    icon: Zap,
    title: "Techniques designed for faster healing and minimal disruption to your routine",
    description: "",
  },
  {
    icon: Heart,
    title: "Personalised plans that respect your lifestyle and future goals",
    description: "",
  },
  {
    icon: Headphones,
    title: "Care that continues long after your procedure, with follow-up and maintenance support",
    description: "",
  },
]

export function WhyChooseSectionhair() {
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
    <section ref={sectionRef} className="py-20 mt-14 max-[470px]:mt-6 max-[426px]:py-5 lg:py-10 bg-[#0d0d0d]" style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-[426px]:mb-8 mb-16">
                      <span className="inline-block px-4 py-1.5 bg-[#c99500]/10 text-[#c99500] rounded-full text-sm font-medium mb-4">Why Patients Trust Us</span>
          <h2
            className={`text-[40px] max-[426px]:text-[22px] sm:text-4xl font-bold text-white mb-6 font-sans ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Why We're Bangalore's <span className="text-[#c99500]">#1 Choice</span> for Hair Transplants
          </h2>
          {/* <p className="text-gray-300 max-w-2xl mx-auto">Why Patients Trust Us</p> */}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className={`bg-white/5 border-[#c99500]/20 hover:border-[#c99500]/40 transition-all duration-500 transform hover:scale-105 hover:bg-white/10 ${
                  isVisible ? `animate-fade-in-up animation-delay-${(index + 1) * 200}` : "opacity-0"
                }`}
              >
                <CardContent className="p-8 max-[426px]:p-4 text-center">
                  <div className="w-16 h-16 bg-[#c99500]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#c99500]" />
                  </div>

                  <h3 className="text-xl max-[470px]:text-[16px] font-bold text-white mb-4 font-sans">{feature.title}</h3>

                  <p className="text-gray-300 max-[426px]:text-[16px] max-[470px]:text-[16px] leading-relaxed">{feature.description}</p>
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