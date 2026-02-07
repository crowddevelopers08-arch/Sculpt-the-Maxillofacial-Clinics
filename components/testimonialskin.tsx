"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "jyothi m",
    treatment: "Hair Transplant",
    rating: 5,
    text: "Priyanka mam & her team are outstanding I was comfortable & felt I was in excellent care throughout my procedure. Follow-up was great & with friendly professional staff. The Dr is the BEST!!Excellent care",
    image: "newsvcg.jpg?height=80&width=80",
  },
  {
    name: "latha ram",
    treatment: "Hair fall Treatment",
    rating: 5,
    text: "Very good treatment with regular follows done.. I went for pigmentation treatment and it got completely cleared by 3 months.. Recommended strongly.",
    image: "newsvcg.jpg?height=80&width=80",
  },
  {
    name: "Durga Prasad",
    treatment: "hair Treatment",
    rating: 5,
    text: "I have seen many hospitals but It's such an amazing clinic and staffs are very well trained and there is a quick response for patient's....and there is no words to explain about maxillofacial clinic, if there is any Skin issues, i suggest everyone to visit the maxillofacial clinic.",
    image: "newsvcg.jpg?height=80&width=80",
  },
  {
    name: "r nandini",
    treatment: "hair Transplant",
    rating: 5,
    text: "I highly recommended this clinic for skin treatment with high quality treatment and really happy with all the services i hve taken....hygiene environment and such a friendly staffs... Thanks to dr.priyanka fr this beautiful treatment",
    image: "newsvcg.jpg?height=80&width=80",
  },
]

export function TestimonialsSectionskin() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance
  const minSwipeDistance = 50

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

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
      
      <section id="testimonials" ref={sectionRef} className="py-16 max-[426px]:py-8 lg:py-12 bg-white" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 max-[426px]:mb-8">
            <h2
              className={`text-3xl max-[426px]:text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d0d] mb-4 font-sans ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              The <span style={{color:"#c99500"}} className="text-primary">Transformation</span> Tales
            </h2>
            <p
              className={`text-lg max-[426px]:text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 ${
                isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
            >
              Real stories from real patients who trusted us with their beauty journeys
            </p>
          </div>

          {/* Carousel Container */}
          <div className="max-w-4xl mx-auto relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 max-[426px]:-left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-[#c99500]/30 hover:border-[#c99500] rounded-full p-2 max-[426px]:p-1 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 max-[426px]:w-4 max-[426px]:h-4 sm:w-6 sm:h-6 text-[#c99500]" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute -right-4 max-[426px]:-right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-[#c99500]/30 hover:border-[#c99500] rounded-full p-2 max-[426px]:p-1 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 max-[426px]:w-4 max-[426px]:h-4 sm:w-6 sm:h-6 text-[#c99500]" />
            </button>

            {/* Carousel */}
            <div
              ref={carouselRef}
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.name} className="w-full flex-shrink-0 px-3 max-[426px]:px-2 sm:px-4">
                    <Card
                      className={`bg-gradient-to-br from-[#0d0d0d] to-[#0d0d0d]/90 border-[#c99500]/20 hover:border-[#c99500]/40 transition-all duration-500 h-full ${
                        isVisible ? `animate-fade-in-up animation-delay-${(index + 1) * 200}` : "opacity-0"
                      }`}
                      style={{borderColor: "#c99500"}}
                    >
                      <CardContent className="p-6 max-[426px]:p-4 sm:p-8">
                        <div className="flex items-start space-x-4 max-[426px]:space-x-3 mb-6">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-14 h-14 max-[426px]:w-12 max-[426px]:h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#c99500]/30"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg max-[426px]:text-base sm:text-xl font-bold text-white mb-1 font-sans truncate">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 max-[426px]:w-3 max-[426px]:h-3 fill-[#c99500] text-[#c99500]" />
                              ))}
                            </div>
                          </div>
                          <Quote className="w-6 h-6 max-[426px]:w-5 max-[426px]:h-5 sm:w-8 sm:h-8 text-[#c99500]/30 flex-shrink-0" />
                        </div>

                        <p className="text-gray-300 max-[426px]:text-sm sm:text-base leading-relaxed italic line-clamp-6">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 max-[426px]:w-1.5 max-[426px]:h-1.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#c99500] scale-125" : "bg-[#c99500]/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Google Reviews Badge */}
          <div className={`text-center mt-12 max-[426px]:mt-8 ${isVisible ? "animate-fade-in-up animation-delay-800" : "opacity-0"}`}>
            <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-black/5 rounded-2xl px-6 py-4 max-[426px]:px-4 max-[426px]:py-3">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 max-[426px]:w-4 max-[426px]:h-4 sm:w-6 sm:h-6 fill-[#c99500] text-[#c99500]" />
                <span className="text-xl max-[426px]:text-lg sm:text-2xl font-bold text-[#0d0d0d]">4.9/5</span>
              </div>
              <div className="text-gray-600">
                <p className="font-medium max-[426px]:text-sm sm:text-base text-center sm:text-left">Based on 100+ Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}