import React from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Heart, Award, CheckCircle, Smile, MessageSquare, Zap, Target, ShieldCheck } from 'lucide-react';

const features = [
  { title: "Expert Feedback", desc: "Good icons and professional team support.", icon: <Star size={24} />, row: 1 },
  { title: "Client Review", desc: "Excellent design with good icons and UI.", icon: <ThumbsUp size={24} />, row: 1, isFeatured: true },
  { title: "User Choice", desc: "Top-rated services with good icons used.", icon: <Heart size={24} />, row: 1 },
  { title: "Quality Work", desc: "Good icons and perfect pixel execution.", icon: <Award size={24} />, row: 2 },
  { title: "Verified Pro", desc: "100% verified with good icons feedback.", icon: <CheckCircle size={24} />, row: 2 },
  { title: "Happy Client", desc: "Great experience and very good icons.", icon: <Smile size={24} />, row: 2 },
  { title: "Quick Response", desc: "Fast support with good icons system.", icon: <MessageSquare size={24} />, row: 2 },
  { title: "Prime Delivery", desc: "Super fast work and good icons quality.", icon: <Zap size={24} />, row: 3 },
  { title: "Goal Achieved", desc: "Target met using good icons and strategy.", icon: <Target size={24} />, row: 3 },
  { title: "Secure Partner", desc: "Trusted firm with good icons and safety.", icon: <ShieldCheck size={24} />, row: 4 },
];

export default function PyramidGrid() {
  const renderRow = (rowNum) => (
    // Gap aur Margin adjust kiya gaya hai hexagons ko chipkane ke liye
    <div className={`flex justify-center gap-4 ${rowNum > 1 ? '-mt-14' : ''} flex-wrap`}>
      {features.filter(f => f.row === rowNum).map((item, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ scale: 1.05, zIndex: 50 }}
          className="relative w-64 h-72 flex items-center justify-center group transition-all duration-300"
          style={{
            // Ye layered shadow aapke card ko depth degi (Image 3 ki tarah)
            filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.08)) drop-shadow(0px 2px 4px rgba(0,0,0,0.02))"
          }}
        >
          {/* HEXAGON BACKGROUND */}
          <div 
            className={`absolute inset-0 transition-all duration-500 border-2 
              ${item.isFeatured 
                ? 'bg-[#f8a548]' // Featured card blue rahega
                : 'bg-white border-zinc-50 group-hover:bg-[#f8a548] group-hover:border-bg-[#f8a548]'
              }`}
            style={{ 
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" 
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center px-10 transition-colors duration-300">
            <div className={`mb-3 transition-colors ${item.isFeatured ? 'text-[#0BF487]' : 'text-[#f8a548] group-hover:text-white'}`}>
              {item.icon}
            </div>
            <h4 className={`text-[18px] font-bold mb-1 ${item.isFeatured ? 'text-white' : 'bg-black bg-clip-text text-transparent group-hover:text-white'}`}>
              {item.title}
            </h4>
            <p className={`text-[15px] leading-tight ${item.isFeatured ? 'text-blue-100' : 'text-black group-hover:text-white'}`}>
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="bg-slate-50 py-24 px-6 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full">
        {[1, 2, 3, 4].map(num => renderRow(num))}
      </div>
    </section>
  );
}