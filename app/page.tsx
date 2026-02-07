import { HeroSection } from "@/components/hero-section"
import CombinedSection from "@/components/about-section"
import { TreatmentsSection } from "@/components/treatments-section"
import { DoctorSection } from "@/components/doctor-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ClinicLocationMap from "@/components/maps"
import { VideoTestimonials } from "@/components/video-testimonials"
import BeforeAfterSlider from "@/components/beforeafter"
import ClickReview from "./client-review/page"
import ImageCarousel from "@/components/caurosel"
import CarouselDemo from "@/components/caurosel"



export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <section id="contact-section"> */}
      <CombinedSection />
         {/* </section> */}

      
      <TreatmentsSection />
    
      <DoctorSection />
      <WhyChooseSection />
      <BeforeAfterSlider />
      <TestimonialsSection />
     
      <FAQSection />
      <ClinicLocationMap />
      <Footer />    
    </main>
    </>
  )
}
