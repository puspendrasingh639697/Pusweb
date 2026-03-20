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
  FaGlobe,
  FaVideo,
  FaWhatsapp,
  FaCalendarAlt 
} from "react-icons/fa";
// import { FaPhoneAlt, FaWhatsapp, FaVideo } from "react-icons/fa";

import logo from "../assets/logo.png";
import pusImage from "../assets/Pus.png";

const Footer = () => {
  return (
    <footer className="relative bg-white min-h-[50vh] flex flex-col justify-between px-6 md:px-16 lg:px-20 pt-10 overflow-hidden">

     <div className="absolute bottom-0 left-0 w-full h-[35%] pointer-events-none z-0">
  <img
    src={pusImage}
    alt="footer wave"
    className="w-full h-full object-cover grayscale brightness-0"
    style={{ filter: "sepia(1) saturate(5) hue-rotate(330deg)" }}
  />
</div>

      {/* Footer Content */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 w-full">

        {/* Logo Section */}
        <div className="space-y-4">
<div className="flex items-center h-[140px]">
  <div
    className="h-full w-[200px]"
    style={{
      background:
        "radial-gradient(ellipse farthest-corner at right bottom,#FEDB37 0%,#FDB931 8%,#9f7928 30%,#8A6E2F 40%,transparent 80%), radial-gradient(ellipse farthest-corner at left top,#FFFFFF 0%,#FFFFAC 8%,#D1B464 25%,#5d4a1f 62.5%,#5d4a1f 100%)",
      WebkitMaskImage: `url(${logo})`,
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      WebkitMaskPosition: "center",
      maskImage: `url(${logo})`,
      maskRepeat: "no-repeat",
      maskSize: "contain",
      maskPosition: "center",
    }}
  />
</div>

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
                  className="w-9 h-9 flex items-center justify-center bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] text-white hover:bg-black transition"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Top Links */}
        <div>
          <h3 className="font-bold text-lg bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] bg-clip-text text-transparent mb-4">
            Top Links
          </h3>

          <ul className="space-y-2 text-sm text-black font-semibold">
            <li><Link to="/" className="hover:text-[#f8a548]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#f8a548]">About Us</Link></li>
            <li><Link to="/connectionSection" className="hover:text-[#f8a548]">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-[#f8a548]">Blog</Link></li>
            <li><Link to="/Servies" className="hover:text-[#f8a548]">Servies</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] bg-clip-text text-transparent mb-4">
            Our Services
          </h3>

          <ul className="space-y-2 text-sm text-black font-semibold">
            <li><Link to="/" className="hover:text-[#f8a548]">Web Development</Link></li>
            <li><Link to="/" className="hover:text-[#f8a548]">Mobile App Development</Link></li>
            <li><Link to="/" className="hover:text-[#f8a548]">UI/UX Design</Link></li>
            <li><Link to="/" className="hover:text-[#f8a548]">Cloud Solutions</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold text-lg bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] bg-clip-text text-transparent mb-4">
            Information
          </h3>

          <div className="space-y-3 text-sm font-semibold text-black">

            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-[#f8a548]" />
              <p>Moradabad Noida, Uttar Pradesh</p>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="text-[#f8a548]" />
              <p>+91 9584218956</p>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="text-[#f8a548]" />
              <div>
                <p>business@sgtechnology.com</p>
                <p>support@sgtechnology.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>

  


<div className="fixed right-5 bottom-24 flex flex-col gap-3 z-50">

  {/* Call */}
  <a
    href="tel:+9584218956"
    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] hover:bg-blue-600 transition"
  >
    <FaPhoneAlt size={18}  />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919192939495"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] hover:bg-green-600 transition"
  >
    <FaWhatsapp size={18} />
  </a>

  {/* Meeting */}
  <a
    href="https://meet.google.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg  bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] hover:bg-blue-800 transition"
  >
    <FaCalendarAlt size={18} />
  </a>

</div>
      {/* Bottom Line */}
      <div className="border-t border-black mt-8 py-4 text-center text-sm text-black relative z-10">
        ©2026 <span className="font-semibold">Sgtechnology.com</span>. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;


