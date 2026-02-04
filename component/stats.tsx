"use client";

import { Star, Award, Users, Shield, Medal, ArrowRight } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Star size={24} className="sm:size-6 md:size-8" />,
      value: "4.9/5",
      label: "Ratings",
      description: "Exceptional Patient Satisfaction",
    },
    {
      icon: <Award size={24} className="sm:size-6 md:size-8" />,
      value: "7+",
      label: "Years",
      description: "Surgical Excellence",
    },
    {
      icon: <Users size={24} className="sm:size-6 md:size-8" />,
      value: "1,000+",
      label: "Transformations",
      description: "Completed Successfully",
    },
    {
      icon: <Medal size={24} className="sm:size-6 md:size-8" />,
      value: "Gold",
      label: "Medalist",
      description: "MDS Maxillofacial Surgery",
    },
    {
      icon: <Shield size={24} className="sm:size-6 md:size-8" />,
      value: "0%",
      label: "Compromise",
      description: "On Safety Standards",
    },
  ];

  return (
    <div className="relative py-8 sm:py-10 md:py-12 lg:py-8 xl:py-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-12 -right-12 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px] rounded-full bg-gradient-radial from-[#bc9c2410] to-transparent animate-pulse-slow" />
      <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] rounded-full bg-gradient-radial from-[#bc9c2405] to-transparent animate-pulse-slower" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Headline Section */}
        <div className="text-center mb-2 sm:mb-10 md:mb-10 lg:mb-5">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#333333] mb-1 sm:mb-4 md:mb-3 leading-tight tracking-tight">
            Numbers That Reflect{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] bg-clip-text text-transparent">
              Sculpt's Expertise
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-[#333333] opacity-80 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed">
            Our commitment to excellence is quantified in every achievement. We
            measure success by the smiles we create and the trust we earn.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl border border-[#f4e8c1] p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 text-center transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-[#bc9c24] relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 sm:before:h-1 before:bg-gradient-to-r before:from-[#bc9c24] before:to-[#8b6c0d] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              {/* Icon Container */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-20 xl:h-20 mx-auto mb-3 sm:mb-4 md:mb-5 bg-gradient-to-br from-[#bc9c24] to-[#8b6c0d] rounded-full flex items-center justify-center text-white after:absolute after:inset-0 after:rounded-full after:border after:border-[#f4e8c1] sm:after:border-2 after:animate-pulse">
                {stat.icon}
              </div>

              {/* Stat Value */}
              <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-3.5xl xl:text-4xl 2xl:text-4.5xl font-extrabold bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] bg-clip-text text-transparent mb-1 sm:mb-2 animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {stat.value}
              </h3>

              {/* Stat Label */}
              <h4 className="text-sm sm:text-base md:text-lg font-semibold sm:font-bold text-[#333333] mb-1 sm:mb-2">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-[#333333] opacity-70 leading-snug sm:leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-4 sm:mb-5 md:mb-5">
          <a
            href="#"
            className="group relative bg-gradient-to-r from-[#bc9c24] to-[#8b6c0d] text-white rounded-full py-3 px-6 sm:py-3 sm:px-8 md:py-3 md:px-10 lg:py-3 lg:px-12 text-sm sm:text-base md:text-lg lg:text-lg font-bold transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:from-[#8b6c0d] hover:to-[#bc9c24] active:translate-y-0 overflow-hidden"
          >
            <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              Schedule Your Hair Assessment
              <ArrowRight size={16} className="sm:size-5 md:size-6" />
            </div>

            {/* Shine Effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full" />
          </a>
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="text-center min-w-[100px] sm:min-w-[120px]">
            <h4 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-[#bc9c24]">
              98%
            </h4>
            <p className="text-xs sm:text-sm md:text-md text-[#333333] opacity-80">
              Patient Satisfaction
            </p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#bc9c24]/30"></div>
          <div className="text-center min-w-[100px] sm:min-w-[120px]">
            <h4 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-[#bc9c24]">
              24/7
            </h4>
            <p className="text-xs sm:text-sm md:text-md text-[#333333] opacity-80">
              Support Available
            </p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#bc9c24]/30"></div>
          <div className="text-center min-w-[100px] sm:min-w-[120px]">
            <h4 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-[#bc9c24]">
              100%
            </h4>
            <p className="text-xs sm:text-sm md:text-md text-[#333333] opacity-80">
              Sterilization Standards
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Custom font sizes for better scaling */
        @media (min-width: 1024px) {
          .text-5\.5xl {
            font-size: 3.375rem;
            line-height: 1;
          }
        }

        @media (min-width: 1280px) {
          .text-5\.5xl {
            font-size: 3.5rem;
            line-height: 1;
          }
        }

        @media (min-width: 1536px) {
          .text-5\.5xl {
            font-size: 3.625rem;
            line-height: 1;
          }
          
          .text-6xl {
            font-size: 3.75rem;
            line-height: 1;
          }
          
          .text-4\.5xl {
            font-size: 2.625rem;
            line-height: 2.5rem;
          }
        }

        /* Custom height for icon containers */
        .h-18 {
          height: 4.5rem;
        }
        .w-18 {
          width: 4.5rem;
        }
        
        .text-3\.5xl {
          font-size: 2rem;
          line-height: 2.25rem;
        }
      `}</style>
    </div>
  );
};

export default StatsSection;