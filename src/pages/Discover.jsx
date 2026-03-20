import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function LingoSetuHeader() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Servies", path: "/servies" },
    { name: "Our Team", path: "/globalReach" },
    { name: "Portfolio", path: "/connectionSection" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full font-poppins">

      {/* TOP BAR */}
      <div className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] text-white py-2 px-4 md:px-20 flex justify-between items-center text-xs md:text-sm">

        <a href="tel:+919584218956" className="flex items-center gap-2">
          <Phone size={14} />
          <span>+91 9584218956</span>
        </a>

        <a href="mailto:business@sgtechnology.com" className="flex items-center gap-2">
          <Mail size={14} />
          <span className="hidden md:inline">business@sgtechnology.com</span>
        </a>

      </div>

      {/* NAVBAR */}
      <nav className="bg-white h-[80px] px-4 md:px-20 flex items-center justify-between shadow-sm sticky top-0 z-50">

        {/* LOGO */}
        <div
          className="h-[120px] w-[180px] cursor-pointer"
          onClick={() => navigate("/home")}
          style={{
            background:
              "radial-gradient(ellipse farthest-corner at right bottom,#FEDB37 0%,#FDB931 8%,#9f7928 30%,#8A6E2F 40%,transparent 80%), radial-gradient(ellipse farthest-corner at left top,#FFFFFF 0%,#FFFFAC 8%,#D1B464 25%,#5d4a1f 62.5%,#5d4a1f 100%)",
            WebkitMaskImage: `url(${logo})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
          }}
        />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-black">

          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="hover:text-[#9f7928] transition"
            >
              {item.name}
            </button>
          ))}

        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">

          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}

        </div>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="lg:hidden bg-white shadow-lg">

          {menuItems.map((item, index) => (

            <div
              key={index}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
              className="px-6 py-4 border-b text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              {item.name}
            </div>

          ))}

        </div>

      )}

    </header>
  );
}