"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImagePair {
  id: number;
  before: string;
  after: string;
  title: string;
}

const BeforeAfterCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sample image pairs - replace with your actual images
  const imagePairs: ImagePair[] = [
    {
      id: 1,
      before: "31.jpg",
      after: "411.jpg",
      title: "Office Transformation"
    },
    {
      id: 2,
      before: "611.jpg",
      after: "511.jpg",
      title: "Kitchen Renovation"
    },
    {
      id: 3,
      before: "811.jpg",
      after: "711.jpg",
      title: "Living Room Makeover"
    },
    {
      id: 6,
      before: "11.jpg",
      after: "21.jpg",
      title: "Bathroom Renovation"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagePairs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, imagePairs.length]);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % imagePairs.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + imagePairs.length) % imagePairs.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToImage = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
  };

  const currentImage = imagePairs[activeIndex];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-[#070707] rounded-xl shadow-2xl mt-6 sm:mt-8 md:mt-12">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c99500] mb-2">Before & After Gallery</h2>
        <p className="text-gray-300 text-sm sm:text-base">Witness the amazing transformations</p>
      </div>

      {/* Main Carousel Container */}
      <div className="relative bg-[#070707] rounded-lg overflow-hidden shadow-lg">

        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden">
          
          {/* Image Container */}
          <div className="flex w-full h-full">
            {/* Before Image - Left Side */}
            <div className="w-1/2 relative overflow-hidden group">
              <img
                src={currentImage.before}
                alt={`${currentImage.title} - Before`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 bg-black/80 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                Before
              </div>
              {/* Gradient overlay for better text visibility */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Divider Line */}
            <div className="w-1 bg-[#c99500] shadow-lg relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#c99500] rounded-full shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-[#070707] rounded-full"></div>
              </div>
            </div>

            {/* After Image - Right Side */}
            <div className="w-1/2 relative overflow-hidden group">
              <img
                src={currentImage.after}
                alt={`${currentImage.title} - After`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-[#c99500] text-[#070707] px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-bold">
                After
              </div>
              {/* Gradient overlay for better text visibility */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-10
                       bg-[#c99500]/90 hover:bg-[#c99500] text-[#070707] p-2 sm:p-2.5 md:p-3 rounded-full 
                       transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg
                       backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 z-10
                       bg-[#c99500]/90 hover:bg-[#c99500] text-[#070707] p-2 sm:p-2.5 md:p-3 rounded-full 
                       transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg
                       backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2 overflow-x-auto pb-2">
        {imagePairs.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToImage(index)}
            className={`flex-shrink-0 w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12 rounded-lg overflow-hidden 
                       transition-all duration-300 hover:scale-110 relative ${
                         index === activeIndex
                           ? 'ring-2 sm:ring-3 ring-[#c99500] shadow-lg transform scale-105'
                           : 'ring-1 sm:ring-2 ring-gray-600 hover:ring-[#c99500]/50'
                       }`}
          >
            <img
              src={image.before}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {index === activeIndex && (
              <div className="absolute inset-0 bg-[#c99500]/20 border-2 border-[#c99500] rounded-lg"></div>
            )}
          </button>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
        {imagePairs.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 hover:scale-110 ${
              index === activeIndex ? 'bg-[#c99500] w-6 sm:w-8' : 'bg-gray-600 w-1.5 sm:w-2 hover:bg-gray-500'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="flex justify-center mt-3 sm:mt-4">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
            isAutoPlay 
              ? 'bg-[#c99500] text-[#070707] hover:bg-[#c99500]/90' 
              : 'bg-gray-600 text-white hover:bg-gray-500'
          }`}
        >
          {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
        </button>
      </div>

      {/* Instructions */}
      <div className="text-center mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm">
        <p>Use arrows to navigate • Click thumbnails to jump • Auto-plays every 4 seconds</p>
      </div>
    </div>
  );
};

export default BeforeAfterCarousel;