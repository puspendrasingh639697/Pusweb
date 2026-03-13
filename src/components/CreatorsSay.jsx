import React from 'react';
import { motion } from 'framer-motion';
import pushImg from '../assets/push.png';

const stats = [
  { value: "24+", label: "Years In AI & Engineering" },
  { value: "50+", label: "AI Models Deployed" },
  { value: "30+", label: "Enterprise AI Use Cases" },
  { value: "99.9%", label: "AI System Uptime" },
  { value: "100%", label: "Secure Data Ownership" },
];

const brands = [
  { name: "Asons", color: "text-green" },
  { name: "Bestin", color: "text-blue-800 italic" },
  { name: "Rupeedot", color: "text-[#e11d48]" },
  { name: "Agni Devices", color: "text-[#0057b7]" },
  { name: "Ankur Electrical", color: "text-red" },
  { name: "Diamore", color: "text-[#89c440]" }
];

export default function CreatorsSay() {
  return (
    <section className="bg-white pb-28 pt-4 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Trusted Brands */}
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black bg-clip-text text-transparent text-lg md:text-xl font-medium mb-12 tracking-wide"
          >
            Trusted and used by teams around the globe
          </motion.h3>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 px-4">
            {brands.map((brand, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className={`${brand.color} font-black text-xl md:text-xl tracking-tighter cursor-default transition-all duration-300`}
              >
                {brand.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-24 p-[1px] bg-black rounded-[0.5rem]"
        >

          {/* Main Container */}
          <div className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] py-20 px-6 md:px-10 rounded-[1.5rem] shadow-4xl">
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center py-6">
                  
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="text-3xl md:text-5xl text-white mb-2"
                  >
                    {stat.value}
                  </motion.h4>

                  <p className="text-xs md:text-sm text-white uppercase font-semibold tracking-widest">
                    {stat.label}
                  </p>

                </div>
              ))}
            </div>

          </div>


          {/* Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#0BF487]/5 blur-[100px] pointer-events-none" />

        </motion.div>

      </div>
    </section>
  );
}