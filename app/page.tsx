import WhoAreWeSection from "@/component/ht-about-clinic";
import BeforeAfterGallery from "@/component/ht-before-after";
import ReadyToSimplifyBilling from "@/component/ht-doctor";
import FrequentlyAskedQuestions from "@/component/ht-faq";
import Footer from "@/component/ht-footer";
import HeroSection from "@/component/ht-herosection";
import Navbar from "@/component/ht-navbar";
import PatientStories from "@/component/ht-reviews";
import StatsSection from "@/component/ht-stats";
import ServicesWeProvide from "@/component/hr-treatments";
import WhatMakesSculptDifferent from "@/component/ht-tricut-apart";
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
