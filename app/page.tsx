import WhoAreWeSection from "@/component/about-clinic";
import BeforeAfterGallery from "@/component/before-after";
import ReadyToSimplifyBilling from "@/component/doctor";
import FrequentlyAskedQuestions from "@/component/faq";
import Footer from "@/component/footer";
import HeroSection from "@/component/herosection";
import Navbar from "@/component/navbar";
import PatientStories from "@/component/reviews";
import StatsSection from "@/component/stats";
import ServicesWeProvide from "@/component/treatments";
import WhatMakesSculptDifferent from "@/component/tricut-apart";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar />
   <HeroSection />
   <StatsSection />
   <BeforeAfterGallery />
   <WhoAreWeSection />
   <ServicesWeProvide />
   <WhatMakesSculptDifferent />
   <PatientStories />
   <ReadyToSimplifyBilling />
   <FrequentlyAskedQuestions />
   <Footer />
   </>
  );
}
