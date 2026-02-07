"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Will people notice I had treatment?",
    answer: "No. The results look natural. You may look fresher or younger, but it will not look artificial.",
  },
  {
    question: "How much downtime is needed?",
    answer:
      "Most treatments have little to no downtime. In many cases, you can return to work or daily activities the same day.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Some treatments show changes immediately. Others, like hair transplants or skin healing, take a few weeks to months.",
  },
  {
    question: "What if I am unsure about which treatment I need?",
    answer: "That is common. During your consultation, Dr. Priyanka will explain what suits your concerns and goals.",
  },
  {
    question: "Is it painful?",
    answer: "No. Most treatments are painless or done under local anaesthesia to keep you comfortable.",
  },
  {
    question: "Do you offer follow-ups?",
    answer: "Yes. Every treatment includes aftercare and follow-up visits to ensure long-lasting results.",
  },
]

export function FAQSection() {
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
    
   
    <section id="faq" ref={sectionRef} className="py-20 max-[426px]:py-5 lg:py-10 bg-black"style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-[426px]:mb-8 mb-16">
            <h2
              className={`text-3xl max-[426px]:text-[22px] sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-sans ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p
              className={`text-xl max-[426px]:text-[16px] text-gray-300 ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
            >
              Everything you need to know about our treatments
            </p>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 border-primary/20 rounded-lg px-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left max-[426px]:text-[20px] text-white hover:text-primary font-semibold text-lg py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 max-[426px]:text-[16px] text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
     </>
  )
}
