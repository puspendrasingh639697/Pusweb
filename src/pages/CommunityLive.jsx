import React from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import translationAnim from '../assets/Translation.json';
// Icons import karein
import { Smartphone, BarChart3, Search, Globe } from 'lucide-react';

export default function ConnectionSection() {
  return (
    <section className="bg-white text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: TEXT */}
        <div className="space-y-12">
          {/* --- HEADER SECTION --- */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black leading-tight text-black">
                Welcome to the <br /> New Way of <br />
                <span className="text-blue-900">Connection</span>
              </h2>
              <p className="text-black text-lg max-w-md">
                Join the global community. <span className="text-blue-800 font-bold">LingoSetu</span> is where the world talks in real-time.
              </p>
            </div>
          </div>

          <div className="space-y-10 pt-4">
            {[
              {
                title: "App Development",
                desc: "Crafting high-performance mobile applications with seamless user experiences for iOS and Android.",
                icon: <Smartphone size={24} />
              },
              {
                title: "Data Analysis",
                desc: "Turning raw data into actionable insights to help you make smarter, faster business decisions.",
                icon: <BarChart3 size={24} />
              },
              {
                title: "Search Engine Optimization",
                desc: "Boosting your online visibility with in-depth research and proven result-oriented strategies.",
                icon: <Search size={24} />
              },
              {
                title: "Web Development",
                desc: "Building stunning, responsive, and user-friendly websites that perfectly reflect your brand identity.",
                icon: <Globe size={24} />
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 items-start group relative">
                {/* Animated Active Line */}
                <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-blue-800 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                {/* ICON BOX - Heading ke aage */}
                <div className="flex-shrink-0 mt-1 text-blue-800 group-hover:scale-110 transition-transform duration-300">
                   {feature.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-blue-800 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-black text-sm leading-relaxed max-w-lg transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: LOTTIE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center items-center "
        >
          <div className="w-full max-w-[550px] z-10 ">
            <Lottie 
              animationData={translationAnim} 
              loop={true}
              className="w-full h-full mix-blend-multiply" // White background par "multiply" better kaam karega
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}