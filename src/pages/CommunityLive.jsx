import React from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import translationAnim from '../assets/Translation.json';

export default function ConnectionSection() {
  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: TEXT */}
        <div className="space-y-12">
  {/* --- HEADER SECTION --- */}
  <div className="space-y-6">
    <div className="flex items-center gap-3">
     
      <div className="flex items-center gap-2 bg-[#0BF487]/10 px-3 py-1 rounded-full border border-[#0BF487]/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0BF487] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0BF487]"></span>
        </span>
    
      </div>
    </div>
    
    <div className="space-y-4">
      <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
        Welcome to the <br /> New Way of <br />
        <span className="text-[#0BF487] drop-shadow-[0_0_20px_rgba(11,244,135,0.4)]">Connection</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-md">
        Join the global community. <span className="text-white font-bold">LingoSetu</span> is where the world talks in real-time.
      </p>
    </div>
  </div>

  {/* --- INTERACTIVE ACTIVE FEATURES --- */}
  <div className="space-y-10 pt-4">
    {[
      {
        title: "Real-Time AI Matching",
        desc: "Our system is actively pairing users based on interests and language goals right now.",
        
      },
      {
        title: "Verified Community",
        desc: "100% human-verified profiles. No bots allowed in our active network.",
        
      },
      {
        title: "Instant Connection",
        desc: "Zero lag, high-definition communication that stays active 24/7 globally.",
        tag: "24/7"
      }
    ].map((feature, idx) => (
      <div key={idx} className="flex gap-6 items-start group relative">
        {/* Animated Active Line */}
        <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-[#0BF487] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

        {/* Status Icon */}
        <div className="flex-shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full border border-[#0BF487]/30 flex items-center justify-center bg-[#0BF487]/5 group-hover:bg-[#0BF487]/20 transition-all">
             <div className="w-2.5 h-2.5 bg-[#0BF487] rounded-full shadow-[0_0_15px_#0BF487]" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-[#0BF487] group-hover:text-[#0BF487] transition-colors">
              {feature.title}
            </h3>
            
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg group-hover:text-gray-300 transition-colors">
            {feature.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* RIGHT SIDE: LOTTIE (Fixing the White Background) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center items-center bg-black"
        >
          {/* Neon Glow Aura */}
          <div className="absolute w-[450px] h-[450px] bg-[#0BF487] opacity-10 blur-[130px] pointer-events-none rounded-full" />
          
          <div className="w-full max-w-[550px] z-10 bg-black overflow-hidden">
            <Lottie 
              animationData={translationAnim} 
              loop={true}
              // "mix-blend-screen" white background ko gayab kar deta hai black par
              className="w-full h-full lottie-green-override mix-blend-screen" 
              style={{ backgroundColor: 'black' }} 
            />
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        /* Lottie container and all its parent elements FORCE BLACK */
        .lottie-green-override, 
        .lottie-green-override svg,
        .lottie-green-override rect {
            fill: black !important; /* Agar koi background rectangle hai toh use black karo */
            background-color: black !important;
        }

        /* All shapes and text to Green #0BF487 */
        .lottie-green-override path { stroke: #0BF487 !important; }
        .lottie-green-override g path[fill], 
        .lottie-green-override g circle[fill],
        .lottie-green-override g rect[fill]:not(:first-child) { 
          fill: #0BF487 !important; 
        }
        .lottie-green-override text, 
        .lottie-green-override tspan { fill: #0BF487 !important; }
      `}</style>
    </section>
  );
}