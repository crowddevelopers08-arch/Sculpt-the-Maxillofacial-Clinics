import React, { useState } from 'react';

const SkinheroSectionhair = () => {        
    const [expanded, setExpanded] = useState(false);

    return (
      <>
       <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
        <div className="min-h-screen" style={{fontFamily: "'Outfit', sans-serif"}}>
            {/* Fixed Navbar */}
            <header className="fixed top-0 left-0 right-0 py-3 bg-black sm:py-4 lg:py-6 z-50">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                       <div className="shrink-0">
          <a href="#" className="flex">
            <img
              src="bglogo.png"
              alt="Brand Logo"
              className="h-8 w-auto sm:h-10 lg:h-12 xl:h-14 object-contain"
            />
          </a>
        </div>

                        <div className="flex items-center space-x-4">
                            {/* Book Consultation Button - Hidden on mobile */}
                            <div className="hidden md:block">
                                <div className="relative inline-flex items-center justify-center group">
                                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
                                    <a href="#skinform" className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-normal text-white bg-black border border-transparent rounded-full sm:px-5 lg:px-6" role="button"> 
                                        Book Consultation 
                                    </a>
                                </div>
                            </div>

                            {/* Phone Number Button */}
                            <div className="relative inline-flex items-center justify-center group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
                                <a href="tel:9606601166" className="relative inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base sm:px-5 lg:px-6 font-normal text-white bg-black border border-transparent rounded-full" role="button"> +91 9606601166 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
         <section className="relative flex items-center bg-black pt-20 sm:pt-20 lg:pt-20 max-[470px]:pt-[30px]">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-8 lg:py-12">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Text Content */}
            <div className='text-center lg:text-left'>
                <h1 className="text-3xl font-normal max-[470px]:pt-[10px] text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight">
                    Discover Bangalore's Secret to Beautiful, Healthy Skin
                </h1>
                <p className="mt-4 text-base text-gray-400 sm:mt-5 sm:text-lg md:text-xl lg:mt-6 max-w-2xl mx-auto lg:mx-0">
                    Expert skin treatments designed to clear, brighten, and restore your natural glow
                </p>

                {/* Ratings and Stats */}
                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                    <div className="flex justify-center lg:justify-start items-center">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                                        fill="url(#b)"
                                    />
                                    <defs>
                                        <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#c99500" />
                                            <stop offset="100%" stopColor="#e6bc4e" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ))}
                        </div>
                        <span className="ml-2 text-base font-normal text-white"> 4.9/5 Google Rating </span>
                    </div>
                    
                    <div className="flex justify-center lg:justify-start items-center">
                        <span className="text-base font-normal text-white">7+ Years of Trusted Experiences</span>
                    </div>
                    
                    <div className="flex justify-center lg:justify-start items-center">
                        <span className="text-base font-normal text-white">1000+ Happy Patients</span>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="relative mt-8 sm:mt-10">
                    <div className="relative inline-flex items-center justify-center group">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
                        <a href="#skinform" className="relative inline-flex items-center justify-center px-6 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:px-8 sm:py-4" role="button"> 
                            Book My Appointment Now 
                        </a>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative">
                {/* Advanced Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#c99500] to-transparent rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tl from-[#e6bc4e] to-transparent rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-[#c99500] to-[#e6bc4e] rounded-full blur-3xl opacity-10"></div>
                </div>

                {/* Floating Elements Container */}
                <div className="relative w-full max-w-lg mx-auto">
                    {/* Main Image with Advanced Frame */}
                    <div className="relative z-10">
                        <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-[#c99500] to-[#e6bc4e] rounded-2xl blur-lg opacity-50"></div>
                        <div className="relative bg-black rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                            <img 
                                src="skinban.jpg" 
                                alt="Skin Treatment Results" 
                                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 bg-black/80 backdrop-blur-sm border border-[#c99500]/30 rounded-lg p-3 shadow-2xl">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#e6bc4e] rounded-full"></div>
                            <span className="text-xs font-medium text-white">Clear Skin</span>
                        </div>
                    </div>

                    <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-20 bg-black/80 backdrop-blur-sm border border-[#e6bc4e]/30 rounded-lg p-3 shadow-2xl">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#e6bc4e] rounded-full"></div>
                            <span className="text-xs font-medium text-white">Natural Glow</span>
                        </div>
                    </div>

                    {/* Animated Orb */}
                    <div className="absolute top-1/2 right-6 sm:right-8 transform -translate-y-1/2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#c99500] to-[#e6bc4e] rounded-full animate-ping opacity-75"></div>
                    </div>

                    {/* Decorative Elements */}
                    {/* <div className="absolute -bottom-6 sm:-bottom-8 left-6 sm:left-8">
                        <div className="flex space-x-2">
                            {[1, 2, 3].map((item) => (
                                <div 
                                    key={item}
                                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-[#c99500] to-[#e6bc4e] rounded-full opacity-60 animate-bounce"
                                    style={{ animationDelay: `${item * 0.2}s` }}
                                ></div>
                            ))}
                        </div>
                    </div> */}
                </div>

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                    }}></div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
        </>
    )
}
export default SkinheroSectionhair;