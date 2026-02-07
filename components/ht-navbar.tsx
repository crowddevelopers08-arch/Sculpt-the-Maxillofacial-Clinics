"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import ContactFormPopup from "./ht-contact-form";

const Navbar = () => {
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
      <nav className="sticky top-0 z-40 bg-white border-b border-primary-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-18 md:h-24">
            {/* Logo */}
            <Link href="/hair-transparent">
              <img
                src="/logos.png"
                alt="Clinic Logo"
                className="w-30 md:w-48 h-auto object-contain cursor-pointer hover:scale-105 transition"
              />
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <div className="px-4 mt-0">
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
      max-sm:px-4 max-sm:text-sm
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

      {/* Popup */}
      <ContactFormPopup
        isOpen={contactPopupOpen}
        onClose={() => setContactPopupOpen(false)}
      />
    </>
  );
};

export default Navbar;