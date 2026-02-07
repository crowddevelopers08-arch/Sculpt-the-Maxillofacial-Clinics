"use client";
import BeforeAfterGalleryskin from '@/components/befaftskin';
import ClinicLocationMaphair from '@/components/ClinicLocationMaphair';
import Footerskin from '@/components/footerskin';
import SkinCombinedSectionhair from '@/components/skincombine';
import Skindoctor from '@/components/skindoctor';
import FAQSectionskin from '@/components/skinfaq';
import SkinheroSectionhair from '@/components/skinhero';
import Skintreatment from '@/components/skintreatments';
import SkinvideoTestimonials from '@/components/skinvideos';
import { TestimonialsSectionskin } from '@/components/testimonialskin';
import WhyTrustSectionskin from '@/components/whyskin';
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
      <section id='home'>
      <SkinheroSectionhair />
      </section>
       <BeforeAfterGalleryskin />
      <SkinvideoTestimonials />
      <section id='treatment'>
      <Skintreatment />
      </section>
      <SkinCombinedSectionhair />
      <section id='doctor'>
      <Skindoctor />
      </section>
      <WhyTrustSectionskin />
      <TestimonialsSectionskin />
      <FAQSectionskin />
      <ClinicLocationMaphair />
      <Footerskin />
    </div>
  );
}