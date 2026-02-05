import React from 'react';

const HealthStats = () => {
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#000000",
    textLight: "#6b7280",
    white: "#ffffff",
    orange: "#ff6347",
    bgLight: "#f8f9fa",
  };

  const stats = [
    {
      percentage: "4.9/5 ",
      description: "Ratings",
      isFilled: false
    },
    {
      percentage: "7 +",
      description: "Years of Surgical Excellence",
      isFilled: true
    },
    {
      percentage: "1,000 +",
      description: " Transformations Completed",
      isFilled: false
    },
    {
      percentage: "100%",
      description: "Gold Medalist Expertise (MDS Maxillofacial Surgery)",
      isFilled: true
    }
  ];

  return (
    <div className="w-full max-sm:py-6 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-12">
          <h1 
            className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 px-2"
            style={{ color: colors.text }}
          >
           Numbers That Reflect
           {" "}
              <span className="bg-gradient-to-r from-[#bc9c24] to-[#bc9c24] bg-clip-text text-transparent">
                Sculpt's Expertise
              </span>
          </h1>
          
          <p 
            className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4"
            style={{ color: colors.textLight }}
          >
            Excellence in hair treatments is our standard, and our numbers back it up. From clients satisfaction rates to successful treatment outcomes.
          </p>
        </div>

        {/* Stats Grid - Stack vertically on mobile */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:gap-0 sm:items-center sm:justify-center group/section cursor-pointer">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="w-40 h-40 sm:w-44 sm:h-44 md:w-55 md:h-55 rounded-full flex flex-col items-center justify-center relative transition-all duration-300 ease-in-out
                sm:[&:not(:first-child)]:-ml-8"  // Apply negative margin only on sm screens and above, and not to first child
              style={{
                backgroundColor: stat.isFilled ? colors.primary : colors.white,
                border: `2px solid ${colors.primary}`,
                zIndex: 10 - index, // Ensure proper stacking order
              }}
            >
              <div className="text-center px-4 sm:px-6 relative z-10">
                <h2 
                  className={`text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
                    stat.isFilled 
                      ? 'group-hover/section:text-black' 
                      : 'group-hover/section:text-white'
                  }`}
                  style={{ color: stat.isFilled ? colors.text : colors.text }}
                >
                  {stat.percentage}
                </h2>
                <p 
                  className={`text-xs sm:text-sm md:text-md leading-relaxed transition-colors duration-300 ${
                    stat.isFilled 
                      ? 'group-hover/section:text-black' 
                      : 'group-hover/section:text-white'
                  }`}
                  style={{ color: stat.isFilled ? colors.text : colors.text }}
                >
                  {stat.description}
                </p>
              </div>
              
              {/* Hover overlay for background color swap */}
              <div 
                className={`absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover/section:opacity-100`}
                style={{
                  backgroundColor: stat.isFilled ? colors.white : colors.primary,
                  border: `3px solid ${colors.primary}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthStats;