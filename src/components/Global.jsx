import React from 'react';
import { motion } from 'framer-motion';
import MapImage from '../assets/Map.png'; 

export default function GlobalReach() {
  const stats = [
    { label: "Active Countries", value: "120+" },
    { label: "Total Users", value: "1M+" },
    { label: "Daily Translations", value: "500K+" }
  ];

  return (
    <section className="relative bg-black py-20 overflow-hidden flex flex-col items-center">
      
      {/* 1. HEADING - TOP CENTER */}
      <div className="relative z-20 text-center mb-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter"
        >
          A GLOBAL <span className="text-[#0BF487]">NETWORK</span>
        </motion.h2>
        {/* Chhoti decorative line heading ke niche */}
        <div className="w-24 h-1 bg-[#0BF487] mx-auto mt-4 shadow-[0_0_15px_#0BF487]" />
      </div>

      {/* 2. MAP AREA - CENTER */}
      <div className="relative w-full max-w-5xl flex justify-center items-center px-4 -mt-10">
        {/* Glow behind map */}
        <div className="absolute w-[400px] h-[400px] bg-[#0BF487] opacity-10 blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full"
        >
          <img 
            src={MapImage} 
            alt="Global Reach Map" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* 3. STATS - BOTTOM CENTER */}
      <div className="relative z-20 w-full max-w-4xl px-6 mt-10">
        <div className="flex flex-row items-center justify-around gap-4 md:gap-16">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <p className="text-[#0BF487] text-2xl md:text-4xl font-black mb-1">{s.value}</p>
              <p className="text-gray-500 text-[9px] md:text-[11px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0BF487]/30 to-transparent" />
    </section>
  );
}