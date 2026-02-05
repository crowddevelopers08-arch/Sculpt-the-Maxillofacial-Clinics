"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import ContactFormPopup from "./contact-form";

const PatientStories = () => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Using the same color scheme from previous components
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    orange: "#ff6347",
  };

  const testimonials = [
    {
      id: 1,
      name: "Shashwath Girish",
      location: "Mumbai, Maharashtra",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "So satisfied with the treatment, got done for hair and happy with the results and great support from the doctor and staff , will definitely suggest the clinic for others about their hair concerns for effective and long lasting results!!",
    },
    {
      id: 2,
      name: "Manjula Manjula",
      location: "Delhi, NCR",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "I am taking kenacort injection for hair loss. I can see tremendous improvement in my hair growth. Thanks to sculpt team .I highly recommend sculpt clinic for all the skin and hair problems.",
    },
    {
      id: 3,
      name: "Arun Patel",
      location: "Bangalore, Karnataka",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      review:
        "An Excellent Hair Transplant I cannot begin to express how pleased and grateful I am for the life-changing experience I had with my recent hair transplant. I had been struggling with hair loss for years, and it took a toll on my self-confidence and overall well-being. However, thanks to the exceptional team at SCULPT The Maxillofacial Clinic, I now feel like a completely new person",
    },
    {
      id: 4,
      name: "Krishna Kishore",
      location: "Hyderabad, Telangana",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "Priyanka Mam really helped me a lottt.My wife left me that i heardly having hair .From then I am very my depressed. I went almost all places in Bangalore.finally Heard about Priyanka mam and started my treatment.I am very happy with the result.",
    },
    {
      id: 5,
      name: "Niharika Gowda",
      location: "Pune, Maharashtra",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      review:
        "Advanced anesthesia made the procedure completely painless. The doctor-led care ensured I was comfortable throughout. Results started showing in 3 months, and now at 8 months, I have a full head of hair. Incredible experience! ",
    },
    {
      id: 6,
      name: "sanjaygs sanjaygs",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      review:
        "Had a great experience here and i have seen great changes in just 1 month And very helpful staffs.It is good experince in suplut and there are good expiernce doctors",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index : number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <>
    <div className="py-6 md:py-10 lg:py-10 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-4 md:mb-8">
          <h2
            className="text-2xl md:text-4xl lg:text-4xl font-extrabold mb-3"
            style={{ color: colors.text }}
          >
            Read Patient Stories At{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] bg-clip-text text-transparent">
              Sculpt
            </span>
          </h2>

          {/* Trust Line with Google Ratings */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-2">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <div className="flex items-center gap-1">
                <span
                  className="text-md font-bold"
                  style={{ color: colors.text }}
                >
                  4.9/5
                </span>
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              {/* Google Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-semibold" style={{ color: colors.text }}>
                Google Ratings
              </span>
            </div>

            <div className="bg-white px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold" style={{ color: colors.text }}>
                • Verified Patient Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl hidden md:flex"
            style={{ backgroundColor: colors.primary }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" strokeWidth={3} />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl hidden md:flex"
            style={{ backgroundColor: colors.primary }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" strokeWidth={3} />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            {/* Mobile: 1 card */}
            <div className="lg:hidden">
              <div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2"
                style={{ borderColor: colors.primaryLight }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2"
                    style={{ borderColor: colors.primary }}
                  />
                  <div className="flex-1">
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ color: colors.text }}
                    >
                      {testimonials[currentIndex].name}
                    </h4>
                    <p
                      className="text-sm mb-2"
                      style={{ color: colors.textLight }}
                    >
                      {testimonials[currentIndex].location}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: colors.textLight }}
                >
                  "{testimonials[currentIndex].review}"
                </p>
              </div>
            </div>

            {/* Desktop: 3 cards */}
            <div className="hidden lg:grid grid-cols-3 gap-6 m-2">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 transition-all duration-300 hover:scale-105"
                  style={{ borderColor: colors.primaryLight }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2"
                      style={{ borderColor: colors.primary }}
                    />
                    <div className="flex-1">
                      <h4
                        className="text-lg font-bold mb-1"
                        style={{ color: colors.text }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-sm mb-2"
                        style={{ color: colors.textLight }}
                      >
                        {testimonial.location}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: colors.textLight }}
                  >
                    "{testimonial.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    currentIndex === index
                      ? colors.primary
                      : colors.primaryLight,
                  width: currentIndex === index ? "2rem" : "0.625rem",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center mt-7">
          <button
          onClick={() => setContactPopupOpen(true)}
            className="group relative bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] text-white rounded-full py-3 px-7 max-sm:px-3 text-sm md:text-lg font-bold transition-all duration-400 hover:-translate-y-1 hover:from-[#8b6c0d] hover:to-[#bc9c24] active:translate-y-0 overflow-hidden"
          >
            <div className="relative z-10 flex items-center justify-center gap-3">
              Get An Expert Advice For Your Hair
              <ArrowRight size={20} />
            </div>

            {/* a Shine Effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full" />
          </button>
        </div>
      </div>
    </div>
    <ContactFormPopup 
  isOpen={contactPopupOpen} 
  onClose={() => setContactPopupOpen(false)} 
/>
    </>
  );
};

export default PatientStories;
