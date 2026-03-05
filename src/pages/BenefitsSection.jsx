import React from 'react';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Free Chat & Discovery",
      desc: "LingoSetu network se judne ke baad aap unlimited global discovery kar sakte hain aur free chatting ka maza le sakte hain.",
    },
    {
      title: "1-on-1 Video Calling",
      desc: "Face-to-face video calling feature aapko apne clients aur partners ke saath ek gehra trust banane mein madad karta hai.",
    },
    {
      title: "Group Video Calls",
      desc: "Team collaboration ke liye multiple users ke saath ek hi waqt par connect ho kar meetings karein.",
    },
    {
      title: "Freelancer Solutions",
      desc: "Duniya bhar ke freelancers ke liye communication ki sabse badi rukawat ko hum door karte hain.",
    }
  ];

  return (
    <section className="bg-black py-20 px-6 w-full flex flex-col items-center">
      
      {/* 1. HEADING - Center aligned */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-black uppercase italic">
          Benefits of <span className="text-[#0BF487]">Joining</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
          Our members enjoy several benefits that make working with us rewarding.
        </p>
      </div>

      {/* 2. CENTERED GRID - Height reduced (min-h-0) */}
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center mx-auto">
        {benefits.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-xl transition-all h-auto min-h-0" 
          >
            {/* GREEN CHECK ICON */}
            <div className="w-8 h-8 bg-[#0BF487] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
               <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
               </svg>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <h4 className="text-zinc-900 text-md font-black uppercase italic leading-tight mb-1">
                {item.title}
              </h4>
              <p className="text-zinc-600 text-xs leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. CENTERED FOOTER CTA */}
      <div className="mt-16 flex flex-col items-center gap-4">
         <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-[#0BF487] rounded-full animate-pulse"></div>
           <span className="text-zinc-600 text-[10px] font-black tracking-[0.4em] uppercase">Discovery Network Active</span>
         </div>
         <motion.button 
           whileHover={{ scale: 1.05 }}
           className="mt-2 border-2 border-[#0BF487] text-[#0BF487] font-black px-10 py-3 rounded-full uppercase tracking-widest text-xs hover:bg-[#0BF487] hover:text-black transition-all"
         >
           Contact Our Team
         </motion.button>
      </div>

    </section>
  );
}