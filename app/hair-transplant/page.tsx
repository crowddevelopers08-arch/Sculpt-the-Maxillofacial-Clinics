// import ServicesWeProvide from "@/components/hr-treatments";
import ServicesWeProvide from "@/components/hr-treatments";
import WhoAreWeSection from "@/components/ht-about-clinic";
import BeforeAfterSlider from "@/components/ht-before-after";
import MeetDrPriyankaRaj from "@/components/ht-doctor";
import FrequentlyAskedQuestions from "@/components/ht-faq";
import Footer from "@/components/ht-footer";
import HeroSection from "@/components/ht-herosection";
import Navbar from "@/components/ht-navbar";
import TestimonialsCarousel from "@/components/ht-reviews";
import HealthStats from "@/components/ht-stats";
import WhyChooseUs from "@/components/ht-tricut-apart";


export default function Home() {
  return (
   <>
   <Navbar />
   <HeroSection />
   <HealthStats />
   <BeforeAfterSlider />
   <WhoAreWeSection />
   <ServicesWeProvide />
   <WhyChooseUs />
   <TestimonialsCarousel />
   <MeetDrPriyankaRaj />
   <FrequentlyAskedQuestions />
   <Footer />
   </>
  );
}
