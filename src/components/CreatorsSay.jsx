
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Jannn Mentur", role: "Director", quote: "The ching ward as thee of hoivent you casy ous mise.", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Setlin Cuione", role: "Designer", quote: "The lafces that if bee the has a lanters anid seot.", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Notim Srrotor", role: "Dev", quote: "I hidin wort as or amd no ourt of mith plone.", img: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Alex Rivar", role: "Manager", quote: "Amazing tool for scaling global communication.", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Sarah Kon", role: "Creator", quote: "The AI voice cloning is absolutely mind-blowing.", img: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Mike Ross", role: "CEO", quote: "Language barriers are finally gone with LingoSetu.", img: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Elena G.", role: "Influencer", quote: "Translation speed is faster than anything else.", img: "https://randomuser.me/api/portraits/women/7.jpg" },
  { name: "David Wu", role: "Producer", quote: "The best video translator in the market today.", img: "https://randomuser.me/api/portraits/men/8.jpg" }
];

export default function CreatorsSay() {
  return (
    <section className="bg-black pb-20 pt-4 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* CREATORS SAY HEADING */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            CREATORS <span className="text-white">SAY</span>
          </h2>
          <div className="w-32 h-1.5 bg-[#0BF487] mt-3 mx-auto md:mx-0 shadow-[0_0_15px_#0BF487]" />
        </div>

        {/* TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"> {/* Margin-bottom added for spacing */}
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="relative group bg-[#0A0A0A] p-6 rounded-2xl border-2 border-[#0BF487]/20 hover:border-[#0BF487] transition-all duration-300 shadow-xl"
            >
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-full border-2 border-[#0BF487]/30 group-hover:border-[#0BF487] p-1 transition-all">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-white text-sm italic mb-6 leading-relaxed">“{item.quote}”</p>
                <h4 className="text-[#0BF487] font-black text-sm uppercase">{item.name}</h4>
                <p className="text-gray-500 text-[10px] font-bold uppercase mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WORLD MAP IMAGE - AB YAHAN HAI AAPKI IMAGE */}
       
      </div>
    </section>
  );
}