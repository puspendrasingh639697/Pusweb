import React from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import translationAnim from '../assets/Translation.json';

// Icons import
import { Smartphone, Search, Globe, Share2, Megaphone } from 'lucide-react';

export default function ConnectionSection() {
  return (
    <section className="bg-white text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-12">

          {/* HEADER */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black leading-tight text-black">
                Welcome to the <br /> New Way of <br />
                <span className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
bg-clip-text text-transparent">Connection</span>
              </h2>

              <p className="text-black text-lg max-w-md">
                Join the global community. 
                <span className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
bg-clip-text text-transparent font-bold"> LingoSetu</span> 
                is where the world talks in real-time.
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-10 pt-4">
            {[
              {
                title: "App Development",
                desc: "Crafting high-performance mobile applications with seamless user experiences for iOS and Android.",
                icon: <Smartphone size={24} />
              },
              {
                title: "Social Media Marketing",
                desc: "Growing your brand on platforms like Instagram, Facebook, and LinkedIn with engaging content and targeted campaigns.",
                icon: <Share2 size={24} />
              },
              {
                title: "Digital Marketing",
                desc: "Promoting your business online using ads, SEO strategies, and smart campaigns to reach the right audience.",
                icon: <Megaphone size={24} />
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

                {/* Animated Line */}
                <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-[#030802] bg-[linear-gradient(-5deg,rgba(3,8,2,1)_0%,rgba(3,74,31,1)_50%)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                {/* ICON */}
                <div className="flex-shrink-0 mt-1 text-[#f8a548] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* TEXT */}
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold bg-black bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-black text-sm leading-relaxed max-w-lg">
                    {feature.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-full max-w-[550px] z-10 relative">

            <Lottie
              animationData={translationAnim}
              loop={true}
              className="w-full h-full mix-blend-multiply"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#f8a548] bg-[linear-gradient(-5deg,rgba(3,8,2,1)_0%,rgba(3,74,31,1)_50%)] mix-blend-color"></div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}