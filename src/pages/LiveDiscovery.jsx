
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Lightbulb, Rocket, Shield, Cpu, Trophy, Handshake, Headphones, Globe, Clock, Lock } from 'lucide-react';

const features = [
  { title: "Expert Team", desc: "Our skilled professionals bring 9+ experience.", icon: <Star size={20} />, row: 1 },
  { title: "In-House Excellence", desc: "Benefit from the 80+ in-house experts.", icon: <Lightbulb size={20} />, row: 1 },
  { title: "Title", desc: "Our visit from the expertise by utilizing state-of-strat.", icon: <Rocket size={20} />, row: 1 },
  { title: "Ditle Title", desc: "With technical experts ISO 27001 certified firm.", icon: <Shield size={20} />, row: 1 },
  { title: "Cutting-Edge Tech", desc: "Stay ahead of in utilizing state-of-strat.", icon: <Cpu size={20} />, row: 2 },
  { title: "Project 200 History", desc: "With over 200 projects, we have experience.", icon: <Trophy size={20} />, row: 2 },
  { title: "Tailored Solutions", desc: "Our team works closely to understand needs.", icon: <Handshake size={20} />, row: 2 },
  { title: "Global Reach", desc: "With 150+ worldwide, an ISO certified firm.", icon: <Globe size={20} />, row: 3 },
  { title: "24/7 Support", desc: "Expect a response within 8 hours from our team.", icon: <Headphones size={20} />, row: 3 },
  { title: "Trusted Partner", desc: "Join forces with an ISO certified firm.", icon: <Lock size={20} />, row: 4 },
];

export default function PyramidGrid() {
  const renderRow = (rowNum) => (
    <div className="flex justify-center gap-4 flex-wrap">
      {features.filter(f => f.row === rowNum).map((item, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="relative w-64 h-64 flex items-center justify-center group transition-all duration-300"
        >
          {/* OCTAGON SHAPE LAYER */}
          <div 
            className="absolute inset-0 transition-all duration-300 bg-zinc-800/40 border border-zinc-700 group-hover:bg-[#0BF487] group-hover:border-[#0BF487] group-hover:shadow-[0_0_30px_rgba(11,244,135,0.6)]"
            style={{ 
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" 
            }}
          />

          {/* CONTENT (Text White, Icon Green -> Hover: All Black) */}
          <div className="relative z-10 flex flex-col items-center text-center px-8 transition-colors duration-300">
            <div className="mb-4 text-[#0BF487] group-hover:text-black">
              {item.icon}
            </div>
            <h4 className="text-[14px] font-black uppercase tracking-tight text-white group-hover:text-black mb-2">
              {item.title}
            </h4>
            <p className="text-[11px] text-zinc-400 group-hover:text-black/80 leading-tight font-medium">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="bg-black py-20 px-6 min-h-screen flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-8">
        {[1, 2, 3, 4].map(num => renderRow(num))}
      </div>
    </section>
  );
}