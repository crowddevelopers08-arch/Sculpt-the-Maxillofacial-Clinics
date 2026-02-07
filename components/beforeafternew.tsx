"use client";
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterItem {
  before: string;
  after: string;
  age: string;
  procedure: string;
}

interface BeforeAfterGalleryProps {
  items?: BeforeAfterItem[];
}

const BeforeAfterGalleryhair = ({ 
  items = [
    {
      before: "hair1.jpg",
      after: "hair2.jpg",
      age: "32",
      procedure: "FUE Hair Transplant"
    },
    {
      before: "hair3.jpg",
      after: "hair4.jpg",
      age: "28",
      procedure: "DHI Technique"
    },
    {
      before: "hair5.jpg",
      after: "hair6.jpg",
      age: "35",
      procedure: "Beard Transplant"
    },
    {
      before: "hair7.jpg",
      after: "hair8.jpg",
      age: "29",
      procedure: "Eyebrow Restoration"
    },
     {
      before: "hair9.jpg",
      after: "hair10.jpg",
      age: "29",
      procedure: "Eyebrow Restoration"
    }
  ]
}: BeforeAfterGalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Set up auto-scroll interval
  useEffect(() => {
    if (autoPlay) {
      carouselIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      }, 4000);
    }
    
    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [autoPlay, items.length]);

  const nextSlide = () => {
    // Pause auto-play when user manually navigates
    setAutoPlay(false);
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    
    setCurrentSlide((prev) => (prev + 1) % items.length);
    
    // Resume auto-play after a delay
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const prevSlide = () => {
    // Pause auto-play when user manually navigates
    setAutoPlay(false);
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
    
    // Resume auto-play after a delay
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const goToSlide = (index: number) => {
    // Pause auto-play when user manually navigates
    setAutoPlay(false);
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    
    setCurrentSlide(index);
    
    // Resume auto-play after a delay
    setTimeout(() => setAutoPlay(true), 5000);
  };

  return (
    <>
     <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
    <section className="relative overflow-hidden"style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center max-[470px]:mb-4 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            
          <motion.h2 
            className="text-[40px] max-[470px]:text-[22px] md:text-4xl pt-[20px] font-bold text-center max-[470px]:mb-2 mb-6 text-[#0d0d0d] relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
          >
            <span className="relative inline-block">
              Before & After Gallery
             
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg max-[470px]:text-[16px] text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Witness the incredible transformation of our satisfied patients
          </motion.p>
        </motion.div>
        
        {/* Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-xl bg-white">
              <div className="relative">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {items.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Before */}
                        <div className="relative group">
                          <img 
                            src={item.before}
                            alt={`Before - ${item.procedure}`}
                            className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="text-sm font-medium">Before</div>
                            <div className="text-xs opacity-80">{item.age} years • {item.procedure}</div>
                          </div>
                        </div>
                        
                        {/* After */}
                        <div className="relative group">
                          <img 
                            src={item.after}
                            alt={`After - ${item.procedure}`}
                            className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="text-sm font-medium">After</div>
                            <div className="text-xs opacity-80">Transformation complete</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#0d0d0d] group-hover:text-[#c99500] transition-colors" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#0d0d0d] group-hover:text-[#c99500] transition-colors" />
                </button>
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center space-x-3 p-4 md:p-6 bg-gray-50">
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#c99500] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default BeforeAfterGalleryhair;