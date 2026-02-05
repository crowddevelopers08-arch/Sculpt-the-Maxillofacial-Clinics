"use client";

import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import ContactFormPopup from "./contact-form";
// import ContactFormPopup from "./ContactFormPopup";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  
  const colors = {
    primary: "#bc9c24",
    dark: "#8b6c0d",
    light: "#f4e8c1",
    text: "#333333",
    white: "#ffffff"
  };

  const navItems = ["Home", "Services", "Doctors", "Contact"];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-b" style={{ borderColor: colors.light }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="cursor-pointer">
              <img
                src="/logos.png"
                alt="Maxillofacial Clinic"
                className="w-40 md:w-48 h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="relative px-2 py-1 font-semibold transition-colors duration-300 hover:text-[#bc9c24] group"
                  style={{ color: colors.text }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bc9c24] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}

              {/* Book Appointment Button */}
              <button
                onClick={() => setContactPopupOpen(true)}
                className="px-6 py-2.5 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
                style={{ 
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.dark})`
                }}
              >
                <Calendar size={18} />
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors hover:bg-opacity-10"
              style={{ color: colors.primary }}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white z-50 shadow-2xl md:hidden">
            {/* Drawer Header */}
            <div className="flex justify-center py-6 border-b" style={{ borderColor: colors.light }}>
              <img
                src="/logos.png"
                alt="Logo"
                className="w-20 h-auto"
              />
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              <X size={20} />
            </button>

            {/* Mobile Navigation */}
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors hover:bg-opacity-5"
                  style={{ color: colors.text }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-4 mt-4">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setContactPopupOpen(true);
                }}
                className="w-full px-6 py-3 rounded-full font-semibold text-white flex items-center justify-center gap-2"
                style={{ 
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.dark})`
                }}
              >
                <Calendar size={18} />
                Book Appointment
              </button>
            </div>
          </div>
        </>
      )}

      {/* Contact Form Popup */}
      <ContactFormPopup 
        isOpen={contactPopupOpen} 
        onClose={() => setContactPopupOpen(false)} 
      />
    </>
  );
};

export default Navbar;