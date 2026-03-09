import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react'; 
import logo from '../assets/Logo.png';

export default function LingoSetuHeader() {
  const navigate = useNavigate();

  return (
    // font-poppins yahan add kar diya hai taaki poore header par apply ho
    <header className="w-full font-poppins"> 
      
      {/* --- TOP CONTACT BAR --- */}
      <div className="bg-blue-900 text-white py-2 px-6 md:px-20 flex justify-between items-center text-xs md:text-sm border-b border-white/5">
        <div className="flex items-center gap-6">
          <a href="tel:+919717580410" className="flex items-center gap-2  transition-colors font-medium">
            <Phone size={14} className="text-white" />
            <span>+91 1234567890</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:business@lingosetu.com" className="flex items-center gap-2  transition-colors font-medium">
            <Mail size={14} className="text-white" />
            <span className="hidden md:inline">business@lingosetu.com</span>
          </a>
        </div>
      </div>

     <nav className="bg-white/95 backdrop-blur-md h-[90px] px-6 md:px-20 flex items-center shadow-sm sticky top-0 z-50">
        
  {/* LEFT SIDE */}
  <div className="flex items-center gap-4 md:gap-8">

    <div className="hidden lg:flex items-center gap-6  pr-8">
      
      {/* Logo Container */}
      <div className="flex items-center h-[120px]">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-full w-auto object-contain"
        />
      </div>

      <span className="text-[14px] font-bold text-gray-800 tracking-tight">
        Puspendra
      </span>

    </div>

    {/* Mobile Logo */}
    <div className="lg:hidden flex items-center">
      <img src={logo} alt="Logo" className="h-[70px]  object-contain" />
    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="ml-auto flex items-center gap-4">
    <button 
      onClick={() => navigate('/Login')}
      className="bg-blue-900 text-white px-8 py-2.5 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-black transition-all"
    >
      Login
    </button>
  </div>

</nav>
    </header>
  );
}