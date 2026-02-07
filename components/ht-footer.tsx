"use client";

import {
  MapPin,
  Phone,
  Clock,

} from "lucide-react";

const Footer = () => {
  // Using the same color scheme from previous components
  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff",
    dark: "#1a1a1a",
  };

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Doctor", href: "#doctors" },
    { name: "Contact", href: "#" },
  ];

  const services = [
    { name: "Best Hair Transplant Clinic", href: "#TRIKUT" },
    { name: "Affordable Hair Restoration Surgery", href: "#TRIKUT" },
    { name: "FUE & FUT Hair Transplant Experts", href: "#TRIKUT" },
    { name: "Permanent Hair Loss Treatment", href: "#TRIKUT" },
    { name: "Natural Hair Regrowth Solutions", href: "#TRIKUT" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-5 md:py-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-12">
          {/* Column 1: About & Map */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex justify-center md:justify-start">
              <img
                src="/treatment/logo1.png"
                alt="Sculpt Clinic"
                className="h-20 md:h-22 w-auto object-contain"
              />
            </div>

            <p className="text-gray-300 text-sm md:text-base mb-0 md:mb-5 leading-relaxed">
              Your trusted partner in hair restoration and maxillofacial
              surgery. Expert care with proven results.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-lg md:text-xl font-bold max-sm:mb-2 mb-4"
              style={{ color: colors.primary }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center gap-2 max-sn:gap-1 group"
                  >
                    <span
                      className="w-0 h-0.5 group-hover:w-4 transition-all duration-300"
                      style={{ backgroundColor: colors.primary }}
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              className="text-lg md:text-xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 h-0.5 group-hover:w-4 transition-all duration-300"
                      style={{ backgroundColor: colors.primary }}
                    />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4
              className="text-lg md:text-xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex  items-start gap-3 text-gray-300 text-sm md:text-base">
                <MapPin
                  size={20}
                  className="flex-shrink-0 mt-1"
                  style={{ color: colors.primary }}
                />
                <div className="flex flex-col">
                <span>315, Sapthagiri 60 Feet, Health,</span>
                <span> Layout, Chandrashekhara Layout,</span>
                <span>Annapurneshwari Nagar,</span>
                <span> Bengaluru,Karnataka 560091, India</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <Phone
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: colors.primary }}
                />
                <a
                  href="tel:+91 9606601166"
                  className="hover:text-white transition-colors"
                >
                  +91 9606601166
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                <Clock
                  size={20}
                  className="flex-shrink-0 mt-1"
                  style={{ color: colors.primary }}
                />
                <span>
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Sculpt Maxillofacial Clinic. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy-hairtreatments" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
