import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/Logo.png";
import pusImage from "../assets/Pus.png";

const Footer = () => {
  return (
    <footer className="relative bg-white min-h-[50vh] flex flex-col justify-between px-6 md:px-16 lg:px-20 pt-10 overflow-hidden">

      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] pointer-events-none z-0">
        <img
          src={pusImage}
          alt="footer wave"
          className="w-full h-full object-cover"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(17%) sepia(83%) saturate(1200%) hue-rotate(210deg) brightness(85%) contrast(95%)"
          }}
        />
      </div>

      {/* Footer Content */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 w-full">

        {/* Logo Section */}
        <div className="space-y-4">

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-36"
          />

          

          {/* Description */}
          <p className="text-sm text-black leading-relaxed">
            We are at LingoSetu, Discover, Design and Deliver from simple to
            complex mobile & web solutions for diverse business verticals.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center bg-blue-900 text-white hover:bg-black transition"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>

        </div>

        {/* Top Links */}
        <div>
          <h3 className="font-bold text-lg text-blue-900 mb-4">
            Top Links
          </h3>

          <ul className="space-y-2 text-sm text-black font-semibold">
            <li><Link to="/about" className="hover:text-blue-900">About Us</Link></li>
            <li><Link to="/team" className="hover:text-blue-900">Our Team</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue-900">Portfolio</Link></li>
            <li><Link to="/career" className="hover:text-blue-900">Career</Link></li>
            <li><Link to="/contact" className="hover:text-blue-900">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg text-blue-900 mb-4">
            Our Services
          </h3>

          <ul className="space-y-2 text-sm text-black font-semibold">
            <li><Link to="/web-development" className="hover:text-blue-900">Web Development</Link></li>
            <li><Link to="/app-development" className="hover:text-blue-900">Mobile App Development</Link></li>
            <li><Link to="/ui-ux" className="hover:text-blue-900">UI/UX Design</Link></li>
            <li><Link to="/cloud" className="hover:text-blue-900">Cloud Solutions</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold text-lg text-blue-900 mb-4">
            Information
          </h3>

          <div className="space-y-3 text-sm font-semibold text-black">

            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-blue-900" />
              <p>Moradabad Noida, Uttar Pradesh</p>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="text-blue-900" />
              <p>+91 9192939495</p>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="text-blue-900" />
              <div>
                <p>info@lingosetu.com</p>
                <p>support@lingosetu.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-black mt-8 py-4 text-center text-sm text-black relative z-10">
        ©2026 <span className="font-semibold">LingoSetu</span>. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;