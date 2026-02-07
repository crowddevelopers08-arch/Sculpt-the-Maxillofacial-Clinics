"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface CarouselProps {
  images?: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({
  images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop'
  ],
  autoPlay = true,
  autoPlayInterval = 4000,
  showDots = true,
  showArrows = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setCurrentIndex(index);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, goToNext, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl group ${className}`}>
      {/* Main Image Container */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && images.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              disabled={isTransitioning}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? (
            <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
          ) : (
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
          )}
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dots Indicator */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && isPlaying && (
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % autoPlayInterval) / autoPlayInterval) * 100}%`,
              animation: `progress ${autoPlayInterval}ms linear infinite`
            }}
          />
        </div>
      )}

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

// Example usage component
const CarouselDemo: React.FC = () => {
  const customImages = [
    'new1.png',
    'new2.png',
    'new3.png',
    'new4.png',
    'new5.png',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Responsive Image Carousel
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            A fully responsive carousel with auto-play, keyboard navigation, and smooth animations.
            Use arrow keys or click the controls to navigate.
          </p>
        </div>

        {/* Main Carousel */}
        <ImageCarousel
          images={customImages}
          autoPlay={true}
          autoPlayInterval={5000}
          showDots={true}
          showArrows={true}
          className="mb-8"
        />

        {/* Features List */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Features:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Infinite loop navigation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Auto-play with pause/resume</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Keyboard navigation (←/→/Space)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Touch/swipe support ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>Fully responsive design</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span>Smooth transitions & animations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselDemo;