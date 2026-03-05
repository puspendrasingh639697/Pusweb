import React from 'react';
import { motion } from 'framer-motion';
// Aapki original sharp image ka path
import showImage from '../assets/show.png';

const LingoSetuLanding = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      
      {/* 1. BACKGROUND - ORIGINAL SHARP IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={showImage} 
          alt="LingoSetu Premium UI" 
          className="w-full h-full object-cover" 
        />
        {/* Sirf Left side par gradient hai taaki text dikhe, Right ekdum transparent hai */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent"></div>
      </div>

      {/* 2. OVERLAY CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-5xl space-y-8">
        
       

        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h1 className="text-white text-4xl md:text-[50px] font-[900] leading-none tracking-tighter uppercase italic flex flex-wrap gap-3">
  <span>Dream it.</span>
  <span className="text-[#0BF487] drop-shadow-[0_0_20px_rgba(11,244,135,0.4)]">
    Plan 
  </span>
</h1>

          <p className="text-white/80 text-xl md:text-3xl font-black uppercase italic tracking-widest mt-6">
            Wherever you are.
          </p>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed font-bold italic uppercase tracking-tighter"
        >
          The **Lingo Setu** app will be your greatest ally as you master new languages. 
          Save lessons, track progress, and learn like a pro.
        </motion.p>

        {/* 3. PREMIUM PROMOTIONAL INPUT FIELD */}
        <div className="space-y-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-0 w-full max-w-md bg-white/10 backdrop-blur-lg rounded-full border border-white/20 p-1.5 shadow-2xl group focus-within:border-[#0BF487] transition-all"
          >
            <div className="pl-4 pr-2 text-[#0BF487] font-black text-sm italic">+91</div>
            <input 
              type="tel" 
              placeholder="Enter phone for early access..." 
              className="flex-1 bg-transparent border-none outline-none text-white text-sm font-medium placeholder:text-zinc-500 px-2"
            />
            <button className="bg-[#0BF487] text-black px-8 py-3 rounded-full text-[10px] font-[900] uppercase tracking-tighter hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_15px_rgba(11,244,135,0.4)]">
              Get Started Free
            </button>
          </motion.div>
          <p className="text-[10px] text-zinc-500 ml-5 font-bold uppercase italic tracking-[0.2em]">
            * Limited 2026 early bird access
          </p>
        </div>

        {/* App Store Badges */}
        <div className="flex gap-4 pt-4">
          <img 
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
            className="h-11 cursor-pointer hover:scale-110 transition" 
            alt="App Store"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            className="h-11 cursor-pointer hover:scale-110 transition" 
            alt="Play Store"
          />
        </div>
      </div>

     

    </div>
  );
};

export default LingoSetuLanding;