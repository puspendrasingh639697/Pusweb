import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react'; 
import logo from '../assets/logo1.png';

export default function LingoSetuHeader() {
  const navigate = useNavigate();

  return (
    // font-poppins yahan add kar diya hai taaki poore header par apply ho
    <header className="w-full font-poppins"> 
      
      {/* --- TOP CONTACT BAR --- */}
      <div className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]  text-white py-2 px-6 md:px-20 flex justify-between items-center text-xs md:text-sm border-b border-white/5">
        <div className="flex items-center gap-6">
          <a href="tel:+919717580410" className="flex items-center gap-2  transition-colors font-medium">
            <Phone size={14} className="text-white" />
            <span>+91 9584218956</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:business@lingosetu.com" className="flex items-center gap-2  transition-colors font-medium">
            <Mail size={14} className="text-white" />
            <span className="hidden md:inline">business@sgtechnology.com</span>
          </a>
        </div>
      </div>

     <nav className="bg-white h-[90px] px-6 md:px-20 flex items-center shadow-sm sticky top-0 z-50">
        
  {/* LEFT SIDE */}
  <div className="flex items-center gap-4 md:gap-8">

    <div className="hidden lg:flex items-center gap-6  pr-8">
      
    {/* Logo Container */}
<div className="flex items-center h-[120px]">
  <div
    className="h-full w-[180px]"
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

      

    </div>

    {/* Mobile Logo */}
    <div className="lg:hidden flex items-center">
      <img src={logo} alt="Logo" className="h-[70px]  object-contain" />
    </div>

  </div>



</nav>
    </header>
  );
}