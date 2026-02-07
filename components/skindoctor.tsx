import React from 'react';
import { Award, Shield, Users, Heart } from 'lucide-react';

export default function Skindoctor() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
      <section className="min-h-screen mt-[50px] max-[470px]:mt-[30px] flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] via-gray-900 to-[#0d0d0d] relative overflow-hidden max-[470px]:py-4 py-8 md:py-8" style={{fontFamily: "'Outfit', sans-serif"}}>
        {/* Animated Background */}
        
        <div className="absolute inset-0">
          
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#c99500]/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#c99500]/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-4">
                  <div className="text-center mb-8">
  <h2 className="text-5xl max-[470px]:text-[26px] sm:text-5xl lg:text-5xl font-bold text-white max-[470px]:mb-0 mb-6">
   Meet the Specialist Behind Your Transformation
  </h2>
</div>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Image - Now first on mobile */}
            <div className="relative order-1 lg:order-1">
              <div className="relative group">
                {/* Floating Achievement Badges */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-top-6 lg:-left-6 bg-[#c99500] text-[#0d0d0d] p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl lg:shadow-2xl z-10 animate-bounce">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-black">15+</div>
                    <div className="text-xs font-bold">Years</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-r from-[#c99500] to-[#e6b800] text-[#0d0d0d] p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl lg:shadow-2xl z-10 animate-bounce animation-delay-1000">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-black">2000+</div>
                    <div className="text-xs font-bold">Happy Patients</div>
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                  <img 
                    src="doc1.jpg"
                    alt="Dr. Priyanka Raj"
                    className="w-full h-[300px] max-[770px]:h-[650px] max-[470px]:h-[350px] lg:h-[450px] xl:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c99500]/20 via-transparent to-[#c99500]/20"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 w-full h-full bg-gradient-to-br from-[#c99500]/30 to-transparent rounded-2xl md:rounded-3xl transform rotate-3"></div>
                <div className="absolute -z-20 top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-12 lg:left-12 w-full h-full bg-gradient-to-br from-[#c99500]/20 to-transparent rounded-2xl md:rounded-3xl transform rotate-6"></div>
              </div>
            </div>
            

            {/* Right Content - Now second on mobile */}
            <div className="text-white space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-2">
              {/* Credentials Badge */}

             
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                <h2 className="text-[35px] max-[470px]:text-[22px] sm:text-4xl md:text-[35px] font-black leading-tight">
                  <span className="bg-gradient-to-r from-[#c99500] to-[#e6b800] bg-clip-text text-transparent">
                    Dr. Priyanka Raj
                  </span>
                </h2>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6 xl:p-8 border border-white/10">
                  <p className="text-base max-[470px]:text-[14px] sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    Dr. Priyanka Raj brings specialised expertise in hair restoration and facial aesthetics. She is internationally recognised for her artistry in designing natural hairlines and her pioneering minimally invasive techniques. Every consultation and procedure is personally led or closely supervised by her, so you always feel safe, comfortable, and cared for.
                  </p>
                </div>
              </div>

              {/* Achievement Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 xl:p-6 border border-white/10 hover:border-[#c99500]/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#c99500]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" style={{ color: '#c99500' }} />
                    </div>
                    <span className="font-bold text-sm sm:text-base md:text-lg">Gold Medalist</span>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 xl:p-6 border border-white/10 hover:border-[#c99500]/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#c99500]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" style={{ color: '#c99500' }} />
                    </div>
                    <span className="font-bold text-sm sm:text-base md:text-lg">Internationally Published Author</span>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 xl:p-6 border border-white/10 hover:border-[#c99500]/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#c99500]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" style={{ color: '#c99500' }} />
                    </div>
                    <span className="font-bold text-sm sm:text-base md:text-lg">2000+ Happy Patients</span>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 xl:p-6 border border-white/10 hover:border-[#c99500]/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#c99500]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" style={{ color: '#c99500' }} />
                    </div>
                    <span className="font-bold text-sm sm:text-base md:text-lg">Expert Speaker</span>
                  </div>
                </div>
              </div>

              {/* CTA Button with specified style */}
              <div className="pt-2 md:pt-3 lg:pt-4">
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
                  <a href="#skinform" className="relative inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4.5 xl:px-12 xl:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white bg-black border border-transparent rounded-full" role="button">
                    <span className="flex items-center space-x-2 sm:space-x-3">
                      <span className="whitespace-nowrap">I'm Ready To Get The Best Consultation</span>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}