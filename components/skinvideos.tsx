import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SkinvideoTestimonials() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoStates, setVideoStates] = useState<boolean[]>([]);

  // IDs / URLs
  const elfsightAppId = "1f9edc53-23c7-4ec5-aeb3-0f9d9440d131";
  const SHAPO_WIDGET_ID = "shapo-widget-8d147fdad92f1e724a14";
  const SHAPO_SCRIPT_ID = "shapo-embed-js";
  const SHAPO_SRC = "https://cdn.shapo.io/js/embed.js";

  // Load (or reuse) Elfsight script and (re)initialize widgets
  useEffect(() => {
    const SRC = "https://elfsightcdn.com/platform.js";

    const initElfsight = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && (window as any).ELFSIGHT_APP_WIDGETS?.init) {
        // @ts-ignore
        (window as any).ELFSIGHT_APP_WIDGETS.init();
      }
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (existing) {
      initElfsight();
      return;
    }

    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    script.defer = true;
    script.onload = initElfsight;
    document.head.appendChild(script);
  }, []);

  // Load (or reuse) Shapo script — only if the container exists on the page
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!document.getElementById(SHAPO_WIDGET_ID)) return;

    const existing = document.getElementById(SHAPO_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) return;

    const script = document.createElement("script");
    script.id = SHAPO_SCRIPT_ID;
    script.src = SHAPO_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const videoTestimonials = [
    { videoUrl: "DIVVYASHREE REEL.mp4" },
    { videoUrl: "MADHUMITA REEL.mp4" },
    { videoUrl: "sculpt reviews reel.mp4" },
  ];

  // Initialize video states
  useEffect(() => {
    setVideoStates(Array(videoTestimonials.length).fill(false));
  }, []);

  // Pause all videos except the current one
  const pauseOtherVideos = (currentVideo: HTMLVideoElement) => {
    videoRefs.current.forEach((video) => {
      if (video && video !== currentVideo && !video.paused) {
        video.pause();
      }
    });
  };

  // Handle video play
  const handleVideoPlay = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      pauseOtherVideos(currentVideo);
      // Update video state to hide overlay
      setVideoStates(prev => {
        const newStates = [...prev];
        newStates[index] = true;
        return newStates;
      });
    }
  };

  // Handle video pause/end to show overlay again
  const handleVideoPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video && video.paused) {
      setVideoStates(prev => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    }
  };

  // Handle click to play video
  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch(console.error);
    }
  };

  const scrollToIndex = (index: number) => {
    const el = railRef.current;
    if (!el) return;
    
    const card = el.children[0]?.children[index] as HTMLElement;
    if (card) {
      const scrollLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
      el.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const scrollByViewport = (dir: "left" | "right") => {
    const el = railRef.current;
    if (!el) return;
    
    let newIndex = dir === "right" ? currentIndex + 1 : currentIndex - 1;
    newIndex = Math.max(0, Math.min(newIndex, videoTestimonials.length - 1));
    
    scrollToIndex(newIndex);
  };

  // Handle scroll to update current index
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.children[0]?.children[0]?.clientWidth || 0;
      const gap = 24; // gap-6 = 1.5rem = 24px
      
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.max(0, Math.min(newIndex, videoTestimonials.length - 1)));
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="testimonials" className="py-12 max-[470px]:py-6 bg-slate-50" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-[470px]:mb-8 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See what our clients say about our factory-direct service
            </p>
          </div>

          {/* Video Rail */}
          <div className="relative">
            {/* Arrows - Always visible on all screen sizes */}
            <button
              onClick={() => scrollByViewport("left")}
              aria-label="Previous testimonials"
              disabled={currentIndex === 0}
              className={`flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white 
                         text-slate-700 rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110
                         ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => scrollByViewport("right")}
              aria-label="Next testimonials"
              disabled={currentIndex === videoTestimonials.length - 1}
              className={`flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white 
                         text-slate-700 rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110
                         ${currentIndex === videoTestimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Scrollable rail with centered alignment for mobile */}
            <div
              ref={railRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
            >
              <div className="flex gap-6 px-12 sm:px-16">
                {videoTestimonials.map((video, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 snap-center w-[85vw] max-w-xs sm:w-[45%] md:w-[30%] md:max-w-md mx-auto"
                  >
                    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                      <div className="relative aspect-[9/16] bg-slate-200">
                        <video
                          ref={(el) => {
                            videoRefs.current[idx] = el;
                          }}
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                          playsInline
                          onPlay={() => handleVideoPlay(idx)}
                          onPause={() => handleVideoPause(idx)}
                          onEnded={() => handleVideoPause(idx)}
                        >
                          <source src={video.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Video Overlay - Shows when video is not playing */}
                        {!videoStates[idx] && (
                          <div 
                            className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-black/20"
                            onClick={() => handleVideoClick(idx)}
                          >
                            <div className="bg-white/90 rounded-full p-4 sm:p-6 mb-3 sm:mb-4 shadow-lg transform transition-transform hover:scale-110">
                              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700 fill-current ml-1" />
                            </div>
                            <span className="text-white font-semibold text-sm sm:text-lg bg-black/50 px-3 py-1 rounded-full">
                              Click to view
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile dots indicator */}
            <div className="flex justify-center mt-6 md:hidden gap-2">
              {videoTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-slate-700 scale-125' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}