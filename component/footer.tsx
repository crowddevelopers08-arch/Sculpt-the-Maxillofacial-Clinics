"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
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
    { name: "Doctor", href: "doctors" },
    { name: "Contact", href: "#" },
  ];

  const services = [
    { name: "Doctor-led care by Dr. Priyanka Raj", href: "#TRIKUT" },
    { name: "Hairlines crafted with surgical precision", href: "#TRIKUT" },
    { name: "Virtually painless with advanced anesthesia", href: "#TRIKUT" },
    { name: "Bio-Profiling FUE for maximum graft survival", href: "#TRIKUT" },
    { name: "GFC + PRP therapies boost healing and volume", href: "#TRIKUT" },
    { name: "Transparent pricing with 0% EMI, no hidden costs", href: "#TRIKUT" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About & Map */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl md:text-3xl font-extrabold mb-4"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sculpt Clinic
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
              Your trusted partner in hair restoration and maxillofacial
              surgery. Expert care with proven results.
            </p>

            {/* Google Map Iframe */}
            <div
              className="rounded-xl overflow-hidden shadow-lg border-2"
              style={{ borderColor: colors.primary }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2239671096524!2d80.24409931482186!3d12.961089990863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d5f0c5e3c3b%3A0x1c8c8c8c8c8c8c8c!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sculpt Clinic Location"
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-lg md:text-xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center gap-2 group"
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
              <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <Mail
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: colors.primary }}
                />
                <a
                  href="mailto:sculptmaxillo.clinic@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  sculptmaxillo.clinic@gmail.com
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

        {/* Social Media Links */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h5 className="text-lg font-semibold mb-3 md:mb-0">
                Follow Us On Social Media
              </h5>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
                  style={{
                    borderColor: colors.primary,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
