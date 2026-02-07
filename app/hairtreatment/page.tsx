"use client";
import BeforeAfterGalleryhair from '@/components/beforeafternew';
import BeforeAfterGallery from '@/components/beforeafternew';
import { TransformationSectionhair } from '@/components/BeforeAfterSectionnew';
import ClinicLocationMaphair from '@/components/ClinicLocationMaphair';
// import { TransformationSection } from '@/components/BeforeAfterSectionnew';
import ClinicLocationMap from '@/components/ClinicLocationMaphair';
import { ComparisonSectionhair } from '@/components/ComparisonSection.tsxComparisonSectionhair';
import ExpertSectionhair from '@/components/ExpertSectionhair';
// import { ComparisonSection } from '@/components/ComparisonSection.tsxComparisonSectionhair';
import ExpertSection from '@/components/ExpertSectionhair';
import FAQSectionhair from '@/components/FAQSectionhair';
import FAQSection from '@/components/FAQSectionhair';
import Footerhair from '@/components/Footerhair';
import Footer from '@/components/Footerhair';
import HairvideoCarousel from '@/components/hairvideo';
import HeroSection from '@/components/HeroSectionhair';
import IntroductionSection from '@/components/IntroductionSectionhair';
import Navigation from '@/components/Navigation';
import { TestimonialsSectionhair } from '@/components/TestimonialsSectionhair';
import { WhyChooseSectionhair } from '@/components/TrustSectionhair';
// import { WhyChooseSection } from '@/components/TrustSectionhair';
import React, { useState, useEffect } from 'react';

export default function Hair() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* <Navigation scrollY={scrollY} /> */}
      <HeroSection />
      <BeforeAfterGalleryhair />
        <HairvideoCarousel />
      <IntroductionSection />
      <ComparisonSectionhair />
      <TransformationSectionhair />
      <ExpertSectionhair />
      <WhyChooseSectionhair />
      <TestimonialsSectionhair />
    
      
      <FAQSectionhair />
      <ClinicLocationMaphair />
      <Footerhair />
    </div>
  );
}