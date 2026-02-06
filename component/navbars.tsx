"use client";

import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import ContactFormPopup from "./contact-form";

const Navbared = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);

  const colors = {
    primary: "#bc9c24",
    dark: "#8b6c0d",
    light: "#f4e8c1",
    text: "#333333",
    white: "#ffffff",
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className="sticky top-0 z-40 bg-white border-b"
        style={{ borderColor: colors.light }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="cursor-pointer">
              <img
                src="/logos.png"
                alt="Maxillofacial Clinic"
                className="w-40 md:w-48 h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* ================= DESKTOP CTA ONLY ================= */}
            <div className="px-4 mt-6">
              <a
                href="tel:+91 9606601166" // ← change your number here
                onClick={() => setMobileOpen(false)}
                className="
      w-full
      px-6 py-3
      rounded-full
      font-semibold
      text-white
      flex items-center justify-center gap-2
      transition-all duration-300
      hover:shadow-lg
      max-sm:px-4 max-sm:text-md
    "
                style={{
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.dark})`,
                }}
              >
                +91 9606601166
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbared;
