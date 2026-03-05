import React from 'react';
import { motion } from 'framer-motion';

// Assets path
import leftImg from '../assets/mengirls.png';
import rightImg from '../assets/Offies.png';

export default function ContactSection() {
  // 8 Active Users - Grid-like placement for 3D feel
  const liveUsers = [
    { id: 1, x: "20%", y: "15%", img: "https://i.pravatar.cc/150?img=11" },
    { id: 2, x: "80%", y: "12%", img: "https://i.pravatar.cc/150?img=32" },
    { id: 3, x: "35%", y: "45%", img: "https://i.pravatar.cc/150?img=53" },
    { id: 4, x: "65%", y: "40%", img: "https://i.pravatar.cc/150?img=44" },
    { id: 5, x: "15%", y: "75%", img: "https://i.pravatar.cc/150?img=20" },
    { id: 6, x: "85%", y: "80%", img: "https://i.pravatar.cc/150?img=25" },
    { id: 7, x: "50%", y: "20%", img: "https://i.pravatar.cc/150?img=33" },
    { id: 8, x: "50%", y: "85%", img: "https://i.pravatar.cc/150?img=47" },
  ];

  return (
    <section className="bg-black py-20 px-6 w-full overflow-hidden relative min-h-[900px] flex flex-col items-center">
      
      {/* 1. MAIN 3D TOP HEADING */}
      <div className="text-center mb-16 z-[100] perspective-1000">
        <motion.div
          initial={{ rotateX: 45, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-white text-6xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            GLOBAL <span className="text-[#0BF487] drop-shadow-[0_0_15px_rgba(11,244,135,0.5)]">ACTIVE</span> HUB
          </h2>
          <p className="text-zinc-500 text-xs font-bold tracking-[0.5em] uppercase mt-4">
            Connecting 8 live nodes across the 3D discovery network
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
        
        {/* --- LEFT SIDE (IMAGE ONLY) --- */}
        <div className="flex justify-center lg:justify-start relative z-20 group">
             <img 
                src={leftImg} 
                className="w-full h-auto object-contain max-h-[550px] grayscale-0 brightness-100 group-hover:grayscale group-hover:brightness-50 transition-all duration-700 ease-in-out" 
                alt="left-team"
             />
        </div>

        {/* --- RIGHT SIDE (IMAGE ONLY) --- */}
        <div className="flex justify-center lg:justify-end relative z-20 group">
             <img 
                src={rightImg} 
                className="w-full h-auto object-contain max-h-[550px] grayscale-0 brightness-100 group-hover:grayscale group-hover:brightness-50 transition-all duration-700 ease-in-out" 
                alt="right-team"
             />
        </div>

        {/* --- CENTER OVERLAY: 3D USERS (ONLY GREEN ON HOVER) --- */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
          <div className="relative w-full h-[650px] max-w-[900px]">
            {liveUsers.map((user) => (
              <motion.div
                key={user.id}
                className="absolute"
                style={{ top: user.y, left: user.x }}
                animate={{ 
                  y: [0, -30, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  delay: user.id * 0.3,
                  ease: "easeInOut" 
                }}
              >
                <div className="relative pointer-events-auto cursor-pointer group/user">
                  {/* Glow: Only on hover */}
                  <div className="absolute -inset-4 bg-[#0BF487] rounded-full blur-xl opacity-0 group-hover/user:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Avatar: Green border only on hover */}
                  <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-zinc-800 p-1 bg-black group-hover/user:border-[#0BF487] transition-all duration-500">
                      <img src={user.img} className="w-full h-full rounded-full object-cover grayscale group-hover/user:grayscale-0 transition-all" alt="active" />
                      
                      {/* Active Dot: Green on hover */}
                      <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-zinc-800 rounded-full border-2 border-black group-hover/user:bg-[#0BF487] transition-colors"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}