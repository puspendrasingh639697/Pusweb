import React from 'react';
import { motion } from 'framer-motion';

// Sample images for users (Inhe apne assets se replace kar lena)
const userPics = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg"
];

export default function ActiveCommunity() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden flex flex-col items-center text-center">
      
      {/* 1. Main Heading */}
      <h2 className="text-white text-4xl md:text-6xl font-black mb-8">
        Join Our <span className="text-[#0BF487]">Active Community</span>
      </h2>

      {/* 2. User Avatar Stack (Same as image_e6613d) */}
      <div className="flex items-center justify-center -space-x-4 mb-10">
        {userPics.map((pic, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.1 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-black overflow-hidden shadow-[0_0_15px_rgba(11,244,135,0.3)]"
          >
            <img src={pic} alt="user" className="w-full h-full object-cover" />
          </motion.div>
        ))}
        {/* The +999 Counter */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-black bg-[#111] flex items-center justify-center shadow-[0_0_15px_rgba(11,244,135,0.3)]">
          <span className="text-[#0BF487] font-bold text-xl">+999</span>
        </div>
      </div>

      {/* 3. Subtext */}
      <p className="text-gray-400 text-lg md:text-xl font-medium mb-4">
        Ready to make <span className="text-white">real connections?</span>
      </p>

      {/* 4. Brand Tagline with Green Accent */}
      <p className="text-white text-sm md:text-base font-bold tracking-wide mb-12">
        <span className="text-[#0BF487] uppercase mr-2">LingoSetu</span>
        Connecting hearts across all 195 countries
      </p>

      {/* 5. CTA Button (Proper Neon Green) */}
      <motion.button
        whileHover={{ scale: 1.0, boxShadow: "0 0 30px #0BF487" }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#0BF487] text-black font-black px-10 py-4  uppercase tracking-wider text-lg transition-all"
      >
        Join Free Today
      </motion.button>

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0BF487] opacity-[0.05] blur-[120px] pointer-events-none" />
      
    </section>
  );
}