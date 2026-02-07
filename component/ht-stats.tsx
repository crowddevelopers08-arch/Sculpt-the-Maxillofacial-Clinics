"use client";
import React from "react";

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
      isFilled: false,
    },
    {
      percentage: "7 +",
      description: "Years of Surgical Excellence",
      isFilled: true,
    },
    {
      percentage: "1,000 +",
      description: " Transformations Completed",
      isFilled: false,
    },
    {
      percentage: "0%",
      description: "Compromise on Safety Standards",
      isFilled: true,
    },
  ];

  return (
    <div className="w-full max-sm:py-6 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-12">
          <h1
            className="text-2xl sm:text-2xl md:text-4xl font-bold mb-2 px-2"
            style={{ color: colors.text }}
          >
            Numbers That Reflect{" "}
            <span className="bg-gradient-to-r from-[#bc9c24] to-[#bc9c24] bg-clip-text text-transparent">
              Sculpt's Expertise
            </span>
          </h1>

          <div className="flex justify-center">
            <div className="w-48 mt-0">
              <svg width="100%" height="20" viewBox="0 0 100 20">
                <path
                  d="M0,10 C10,10 15,10 25,10 S40,10 50,10 S65,10 75,10 S90,10 100,10"
                  stroke={colors.primaryDark}
                  strokeWidth="2"
                  fill="none"
                  style={{
                    animation: `svgWave 2s ease-in-out infinite`,
                  }}
                />
              </svg>
            </div>
            <style jsx>{`
              @keyframes svgWave {
                0%,
                100% {
                  d: path(
                    "M0,10 C10,10 15,10 25,10 S40,10 50,10 S65,10 75,10 S90,10 100,10"
                  );
                }
                25% {
                  d: path(
                    "M0,10 C10,5 15,15 25,10 S40,5 50,10 S65,15 75,10 S90,5 100,10"
                  );
                }
                50% {
                  d: path(
                    "M0,10 C10,15 15,5 25,10 S40,15 50,10 S65,5 75,10 S90,15 100,10"
                  );
                }
                75% {
                  d: path(
                    "M0,10 C10,5 15,15 25,10 S40,5 50,10 S65,15 75,10 S90,5 100,10"
                  );
                }
              }
            `}</style>
          </div>
        </div>

        {/* Stats Grid - Simple 2x2 grid for mobile, overlapping for large screens */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:gap-0 sm:items-center sm:justify-center group/section cursor-pointer">
          {/* Mobile Layout - 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 max-sm:gap-0 sm:hidden w-full max-w-md mx-auto">
            {/* Top Left - White */}
            <div
              className="w-full aspect-square rounded-full flex flex-col items-center justify-center relative transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: colors.white,
                border: `2px solid ${colors.primary}`,
              }}
            >
              <div className="text-center px-4 relative z-10">
                <h2
                  className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300 group-hover/section:text-white"
                  style={{ color: colors.text }}
                >
                  {stats[0].percentage}
                </h2>
                <p
                  className="text-[10px] sm:text-xs leading-tight transition-colors duration-300 group-hover/section:text-white"
                  style={{ color: colors.text }}
                >
                  {stats[0].description}
                </p>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover/section:opacity-100"
                style={{
                  backgroundColor: colors.primary,
                  border: `3px solid ${colors.primary}`,
                }}
              />
            </div>

            {/* Top Right - White */}
            <div
              className="w-full aspect-square rounded-full flex flex-col items-center justify-center relative transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: colors.primary,
                border: `2px solid ${colors.primary}`,
              }}
            >
              <div className="text-center px-4 relative z-10">
                <h2
                  className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300 group-hover/section:text-white"
                  style={{ color: colors.white }}
                >
                  {stats[1].percentage}
                </h2>
                <p
                  className="text-[10px] sm:text-xs leading-tight transition-colors duration-300 group-hover/section:text-white"
                  style={{ color: colors.white }}
                >
                  {stats[1].description}
                </p>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover/section:opacity-100"
                style={{
                  backgroundColor: colors.primary,
                  border: `3px solid ${colors.primary}`,
                }}
              />
            </div>

            {/* Bottom Left - Primary Color (same as top-right should be white, but you said use primary color) */}
            <div
              className="w-full aspect-square rounded-full flex flex-col items-center justify-center relative transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: colors.primary,
                border: `2px solid ${colors.primary}`,
              }}
            >
              <div className="text-center px-4 relative z-10">
                <h2
                  className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300 group-hover/section:text-black"
                  style={{ color: colors.white }}
                >
                  {stats[2].percentage}
                </h2>
                <p
                  className="text-[10px] sm:text-xs leading-tight transition-colors duration-300 group-hover/section:text-black"
                  style={{ color: colors.white }}
                >
                  {stats[2].description}
                </p>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover/section:opacity-100"
                style={{
                  backgroundColor: colors.white,
                  border: `3px solid ${colors.primary}`,
                }}
              />
            </div>

            {/* Bottom Right - White */}
            <div
              className="w-full aspect-square rounded-full flex flex-col items-center justify-center relative transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: colors.white,
                border: `2px solid ${colors.primary}`,
              }}
            >
              <div className="text-center px-4 relative z-10">
                <h2
                  className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300 group-hover/section:text-white"
                  style={{ color: colors.text }}
                >
                  {stats[3].percentage}
                </h2>
                <p
                  className="text-[10px] sm:text-xs leading-tight transition-colors duration-300 group-hover/section:text-white"
                  style={{ color: colors.text }}
                >
                  {stats[3].description}
                </p>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover/section:opacity-100"
                style={{
                  backgroundColor: colors.primary,
                  border: `3px solid ${colors.primary}`,
                }}
              />
            </div>
          </div>

          {/* Large screen layout (unchanged) */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="hidden sm:flex w-44 h-44 md:w-55 md:h-55 rounded-full flex-col items-center justify-center relative transition-all duration-300 ease-in-out sm:[&:not(:first-child)]:-ml-8"
              style={{
                backgroundColor: stat.isFilled ? colors.primary : colors.white,
                border: `2px solid ${colors.primary}`,
                zIndex: 10 - index,
              }}
            >
              <div className="text-center px-6 relative z-10">
                <h2
                  className={`text-2xl md:text-4xl font-bold mb-3 transition-colors duration-300 ${
                    stat.isFilled
                      ? "group-hover/section:text-black"
                      : "group-hover/section:text-white"
                  }`}
                  style={{ color: stat.isFilled ? colors.text : colors.text }}
                >
                  {stat.percentage}
                </h2>
                <p
                  className={`text-sm md:text-md leading-relaxed transition-colors duration-300 ${
                    stat.isFilled
                      ? "group-hover/section:text-black"
                      : "group-hover/section:text-white"
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
                  backgroundColor: stat.isFilled
                    ? colors.white
                    : colors.primary,
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