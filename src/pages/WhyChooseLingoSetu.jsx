import React from 'react';
import { motion } from 'framer-motion';
// Aapki local image
import menImg from '../assets/men.png'; 

export default function WhyChooseLingoSetu() {
  const points = [
    { title: "FREE CHAT & DISCOVERY" },
    { title: "1-ON-1 VIDEO CALLING" },
    { title: "GROUP TEAM MEETINGS" },
    { title: "FREELANCER SOLUTIONS" },
    { title: "END-TO-END SECURITY" },
    { title: "24/7 NODE SUPPORT" }
  ];

  return (
    // FULL SCREEN - NO SCROLL
    <section className="h-screen w-full bg-black flex items-center justify-center overflow-hidden px-10">
      
      <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: IMAGE (Exact Gativyaa Style) --- */}
        <div className="flex justify-center">
          <motion.img 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src={menImg} 
            alt="LingoSetu Model" 
            // Image size and shadow matched to reference
            className="w-full max-w-[550px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* --- RIGHT SIDE: CONTENT (Perfectly Aligned) --- */}
        <div className="flex flex-col">
          {/* Main Heading - All Caps, Bold, Italic */}
          <h1 className="text-white text-5xl md:text-6xl font-[900] uppercase italic leading-[0.9] tracking-tighter">
            WHY CHOOSE <br />
            <span className="text-[#0BF487]">LINGOSETU?</span>
          </h1>
          
          {/* Short description */}
          <p className="text-zinc-500 text-sm mt-8 leading-relaxed max-w-xxl font-medium">
            LingoSetu delivers faster, safer, and more accurate professional discovery using advanced 3D networking and live AI-driven node mapping.
          </p>

          {/* --- POINTS GRID (2 Columns - Same as Gativyaa) --- */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 mt-12">
            {points.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                {/* Minimalist Green Checkmark */}
                <div className="w-12 h-12 rounded-full border border-[#0BF487] flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-[#0BF487]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-white text-[16px]  group-hover:text-[#0BF487] transition-colors">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-14 flex gap-6">
             <button className="bg-[#0BF487] text-black font-black px-10 py-3.5 r text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#0BF487]/20">
               Join Now
             </button>
             
          </div>
        </div>

      </div>
    </section>
  );
}