"use client";
import React, { useState, useRef, useEffect } from "react";

const HairvideoCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef([]);
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Desktop videos
  const desktopVideos = [
    { src: "videoone.mp4" },
    { src: "videothree.mp4" },
   
    { src: "videotwo.mp4" },
     { src: "mobvideoone.mp4" },
    { src: "videofive.mp4" },
    { src: "videosix.mp4" },
    { src: "videoseven.mp4" },
  ];

  // Mobile videos
  const mobileVideos = [
    { src: "mobvideoone.mp4" },
    { src: "mobvideotwo.mp4" },
    { src: "mobvideothree.mp4" },
    { src: "mobvideofour.mp4" },
      { src: "videofive.mp4" },
    { src: "videosix.mp4" },
    { src: "videoseven.mp4" },
  ];

  // Use different videos based on screen size
  const videos = isMobile ? mobileVideos : desktopVideos;

  // Create extended array for seamless looping (triple the array for smooth infinite scroll)
  const extendedVideos = [...videos, ...videos, ...videos];
  const totalOriginalVideos = videos.length;

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleVideoError = (index) => {
    setVideoErrors(prev => ({ ...prev, [index]: true }));
  };

  const playVideo = (index) => {
    if (activeVideo !== null && videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].pause();
    }
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().then(() => {
        setActiveVideo(index);
        // Center the playing video
        centerVideo(index);
      });
    }
  };

  const pauseVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      setActiveVideo(null);
    }
  };

  // Get card dimensions based on screen size
  const getCardDimensions = () => {
    if (isMobile) {
      return { width: 288, gap: 12 }; // w-72 = 288px for mobile
    }
    return { width: 384, gap: 16 }; // w-96 = 384px for desktop
  };

  // Center the video in the carousel
  const centerVideo = (index) => {
    if (carouselRef.current) {
      const { width: cardWidth, gap } = getCardDimensions();
      const containerWidth = carouselRef.current.offsetWidth;
      
      // Calculate the position to center the video
      const videoPosition = index * (cardWidth + gap);
      const centerPosition = videoPosition - (containerWidth / 2) + (cardWidth / 2);
      
      carouselRef.current.scrollTo({
        left: centerPosition,
        behavior: 'smooth'
      });
    }
  };

  // Get the original index for video source
  const getOriginalIndex = (index) => {
    return index % totalOriginalVideos;
  };

  // Navigation functions with centering
  const scrollLeft = () => {
    if (carouselRef.current) {
      const { width: cardWidth, gap } = getCardDimensions();
      
      // Calculate new index
      const newIndex = currentIndex - 1 < 0 ? totalOriginalVideos - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);

      // Calculate the actual index in the extended array (middle section)
      const extendedIndex = newIndex + totalOriginalVideos;
      
      // Pause current video if playing
      if (activeVideo !== null) {
        pauseVideo(activeVideo);
      }

      // Center the new video
      centerVideo(extendedIndex);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const { width: cardWidth, gap } = getCardDimensions();
      
      // Calculate new index
      const newIndex = (currentIndex + 1) % totalOriginalVideos;
      setCurrentIndex(newIndex);

      // Calculate the actual index in the extended array (middle section)
      const extendedIndex = newIndex + totalOriginalVideos;
      
      // Pause current video if playing
      if (activeVideo !== null) {
        pauseVideo(activeVideo);
      }

      // Center the new video
      centerVideo(extendedIndex);
    }
  };

  // Enhanced scroll handler with auto-centering
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const { width: cardWidth, gap } = getCardDimensions();
      const totalCardWidth = cardWidth + gap;
      const totalExtendedWidth = totalCardWidth * totalOriginalVideos * 3;

      // Calculate boundaries for seamless looping
      const firstSetBoundary = totalCardWidth * totalOriginalVideos;
      const secondSetBoundary = totalCardWidth * totalOriginalVideos * 2;

      // When scrolled to the beginning of the first set, jump to the middle set
      if (scrollLeft < firstSetBoundary - 10) {
        carouselRef.current.scrollLeft = scrollLeft + firstSetBoundary;
      }
      // When scrolled to the end of the last set, jump to the middle set
      else if (scrollLeft > secondSetBoundary + 10) {
        carouselRef.current.scrollLeft = scrollLeft - firstSetBoundary;
      }

      // Auto-center the nearest video when scroll stops
      clearTimeout(carouselRef.current.scrollTimeout);
      carouselRef.current.scrollTimeout = setTimeout(() => {
        autoCenterNearestVideo();
      }, 150);
    }
  };

  // Auto-center the nearest video
  const autoCenterNearestVideo = () => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;
      const { width: cardWidth, gap } = getCardDimensions();
      const totalCardWidth = cardWidth + gap;

      // Find the nearest video index
      const scrollPosition = scrollLeft + (carouselRef.current.offsetWidth / 2);
      const nearestIndex = Math.round(scrollPosition / totalCardWidth);
      
      // Center the nearest video
      centerVideo(nearestIndex);

      // Update current index
      const originalIndex = nearestIndex % totalOriginalVideos;
      setCurrentIndex(originalIndex);
    }
  };

  // Initialize carousel position to the middle set and center first video
  useEffect(() => {
    if (carouselRef.current) {
      const { width: cardWidth, gap } = getCardDimensions();
      const totalCardWidth = cardWidth + gap;
      
      // Start in the middle section for seamless infinite scroll
      const middleSectionStart = totalCardWidth * totalOriginalVideos;
      carouselRef.current.scrollLeft = middleSectionStart;

      // Center the first video after a brief delay to ensure DOM is ready
      setTimeout(() => {
        centerVideo(totalOriginalVideos); // Center the first video of middle section
      }, 100);
    }
  }, [totalOriginalVideos, isMobile]);

  // Reset active video when screen size changes
  useEffect(() => {
    if (activeVideo !== null) {
      pauseVideo(activeVideo);
    }
    setActiveVideo(null);
    
    // Re-initialize carousel position when screen size changes
    if (carouselRef.current) {
      const { width: cardWidth, gap } = getCardDimensions();
      const totalCardWidth = cardWidth + gap;
      const middleSectionStart = totalCardWidth * totalOriginalVideos;
      carouselRef.current.scrollLeft = middleSectionStart;

      // Center the first video after screen resize
      setTimeout(() => {
        centerVideo(totalOriginalVideos);
      }, 100);
    }
  }, [isMobile]);

  // Pause videos when component unmounts
  useEffect(() => {
    return () => {
      videoRefs.current.forEach(video => {
        if (video) video.pause();
      });
    };
  }, []);

  return (
    <div className="w-full bg-[#0d0d0d] max-[470px]:py-5 py-8 md:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-[470px]:mb-4 mb-8">
          <h2
            className={`text-[40px] max-[426px]:text-[22px] sm:text-4xl font-bold text-white font-sans ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Real Stories, <span className="text-[#c99500]">Real Results</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#d39f16] hover:bg-[#b88a13] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollRight}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#d39f16] hover:bg-[#b88a13] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto space-x-3 md:space-x-4 py-4 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {extendedVideos.map((video, index) => (
              <div
                key={index}
                className={`flex-shrink-0 bg-white/10 rounded-xl md:rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-white/15 border border-white/10 hover:border-[#d39f16]/30 backdrop-blur-sm snap-center ${
                  isMobile ? 'w-72' : 'w-96'
                } ${
                  // Highlight the centered/active video
                  index === currentIndex + totalOriginalVideos ? 'ring-2 ring-[#d39f16] scale-105' : ''
                }`}
                style={{ 
                  height: isMobile ? '400px' : '550px'
                }}
              >
                <div className="relative w-full h-full bg-gray-800">
                  {!videoErrors[getOriginalIndex(index)] ? (
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={videos[getOriginalIndex(index)].src}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      onClick={() => activeVideo === index ? pauseVideo(index) : playVideo(index)}
                      onEnded={() => setActiveVideo(null)}
                      onError={() => handleVideoError(getOriginalIndex(index))}
                      controls={activeVideo === index}
                      muted
                      preload="metadata"
                      playsInline
                    />
                  ) : (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700">
                      <span className="text-white text-sm md:text-base">
                        {isMobile ? 'Mobile video not available' : 'Video not found'}
                      </span>
                    </div>
                  )}
                  
                  {activeVideo !== index && !videoErrors[getOriginalIndex(index)] && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/30 transition-all duration-300"
                      onClick={() => playVideo(index)}
                    >
                      <div className={`${
                        isMobile ? 'w-12 h-12' : 'w-16 h-16 md:w-24 md:h-24'
                      } bg-[#d39f16] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                        <svg className={`${
                          isMobile ? 'w-4 h-4' : 'w-6 h-6 md:w-10 md:h-10'
                        } text-white ml-0.5 md:ml-1`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Playing indicator */}
                  {activeVideo === index && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4">
                      <div className={`${
                        isMobile ? 'w-2 h-2' : 'w-3 h-3 md:w-4 md:h-4'
                      } bg-[#d39f16] rounded-full animate-pulse shadow-lg`}></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced gradient overlays - responsive */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent pointer-events-none" />
        </div>

        {/* Instructions */}
        <div className="text-center mt-4 md:mt-4">
          <p className="text-gray-400 text-xs md:text-sm">
            Use arrows to navigate • Click to play/pause • Only one video plays at a time
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HairvideoCarousel;