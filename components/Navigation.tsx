"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500" 
         style={{ transform: `translateX(-50%) translateY(${scrollY > 100 ? '0' : '-20px'})` }}>
      <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-gray-200/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold" style={{ color: '#c99500' }}>
            Sculpt Maxillofacial
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-8">
            <a href="#home" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-[#c99500] hover:bg-[#c99500]/10 transition-all duration-300">Home</a>
            <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-[#c99500] hover:bg-[#c99500]/10 transition-all duration-300">About</a>
            <a href="#services" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-[#c99500] hover:bg-[#c99500]/10 transition-all duration-300">Services</a>
            <a href="#testimonials" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-[#c99500] hover:bg-[#c99500]/10 transition-all duration-300">Testimonials</a>
            <button className="px-6 py-2 rounded-full text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group" 
                   style={{ backgroundColor: '#c99500' }}>
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e6b800] to-[#c99500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-4">
          <div className="space-y-2">
            <a href="#home" className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-[#c99500] hover:bg-[#c99500]/10 transition-all duration-300">Home</a>
            <a href="#about" className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-[#c99500] hover:bg-[#c99500]/10 transition-all duration-300">About</a>
            <a href="#services" className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-[#c99500] hover:bg-[#c99500]/10 transition-all duration-300">Services</a>
            <a href="#testimonials" className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-[#c99500] hover:bg-[#c99500]/10 transition-all duration-300">Testimonials</a>
            <button className="w-full px-4 py-3 rounded-xl text-base font-bold text-white transition-all duration-300" style={{ backgroundColor: '#c99500' }}>Contact</button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}