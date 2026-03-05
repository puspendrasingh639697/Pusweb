import React from 'react';
import { motion } from 'framer-motion';
import { Video, Languages, Mic, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import globVideo from '../assets/Glob.mp4'; 
import logoImg from '../assets/logo.png'; 

export default function LingoSetuPro() {
  const navigate = useNavigate(); // 2. Initialize the hook

  const features = [
    { title: "Video Translator", desc: "Live transcribe & translate any video instantly.", icon: <Video size={42} /> },
    { title: "All Voice Support", desc: "Bridging communication across 70+ languages.", icon: <Languages size={42} /> },
    { title: "AI Chat Bot", desc: "Smart AI Chat & real-time response system.", icon: <Bot size={42} /> },
    { title: "Voice Calling AI", desc: "Real-time AI voice cloning and smart calling.", icon: <Mic size={42} /> }
  ];

  return (
    <div className="bg-black font-sans text-white">
      
      {/* --- FIXED TOP NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-[1000] px-4 py-1 h-18 flex justify-between items-center bg-black/40 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center h-full">
          <img 
            src={logoImg} 
            alt="Logo" 
            className="h-12 md:h-14 w-auto object-contain" 
          />
        </div>

        <div className="flex items-center gap-4">
          {/* 3. Added onClick handler to navigate to /Login */}
          <button 
            onClick={() => navigate('/Login')}
            className="bg-[#0BF487] text-black px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-[11px] font-black tracking-tight hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(11,244,135,0.3)]"
          >
            Login
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
          <source src={globVideo} type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center px-4 mt-[-50px]">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-black italic text-xl md:text-6xl tracking-[0.2em] md:tracking-[0.3em] uppercase leading-tight"
          >
            SMASH THE <br className="md:hidden" />
            <span className="text-[#0BF487]">LANGUAGE</span> BARRIER.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-[#0BF487]" style={{ clipPath: 'ellipse(80% 100% at 50% 100%)' }} />
      </section>

      {/* --- CARDS SECTION --- */}
      <section className="relative z-30 px-6 py-20 max-w-7xl mx-auto bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }} 
              className="relative group p-6 py-10 rounded-2xl flex flex-col items-center text-center transition-all duration-500 cursor-pointer border border-white/10 overflow-hidden shadow-2xl bg-[#0A0A0A]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 bg-[#0BF487]" />
              <div className="relative z-10 mb-6 transition-all duration-500 group-hover:text-white text-[#0BF487]">
                 {item.icon}
              </div>
              <h3 className="relative z-10 text-md font-black mb-3 transition-all duration-500 text-[#0BF487] group-hover:text-white uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="relative z-10 text-white/60 text-[11px] font-bold mb-8 px-2 leading-snug transition-all duration-500 group-hover:text-white">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}


