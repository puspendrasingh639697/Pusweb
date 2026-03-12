import React from "react";
import { motion } from "framer-motion";

export default function Services() {

  const services = [
    {
      id: 1,
      title: "Website Development",
      desc: "Our services are designed to help you create a stunning, user-friendly website that reflects your brand."
    },
    {
      id: 2,
      title: "Social Media Marketing",
      desc: "Strategizing creative campaigns to discover and engage with your target audience."
    },
    {
      id: 3,
      title: "Search Engine Optimization",
      desc: "With our in-depth research and proven result oriented strategies."
    },
    {
      id: 4,
      title: "Lead Generation",
      desc: "Helping businesses generate high quality leads for better conversions."
    },
    {
      id: 5,
      title: "Branding & Designing",
      desc: "Creative branding solutions to build a strong and memorable brand."
    },
    {
      id: 6,
      title: "Video Production",
      desc: "Professional video production services to elevate your brand."
    }
  ];

  return (
    <div className="bg-white  mx-auto px-6 py-20">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {services.map((service, i) => (

          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative p-10 flex flex-col items-center justify-center rounded-xl 
bg-white text-black border border-gray-100 shadow-xl
hover:bg-[#f8a548] hover:text-white hover:border-[#034A1F]
hover:shadow-[0_20px_60px_rgba(10,31,92,0.4)]
transition-all duration-300 group"
          >

            {/* Icon Box */}
            <div className="w-20 h-20 mb-8 rounded-2xl flex items-center justify-center 
bg-gray-50 group-hover:bg-white/10 transition-all duration-300">

              <div className="w-12 h-12 border-2 border-dashed border-gray-400 
rounded-md opacity-40 group-hover:border-white group-hover:opacity-70"/>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-4 bg-black bg-clip-text text-transparent group-hover:text-white transition">
               {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-black group-hover:text-white/80 mb-8 text-center transition">
              {service.desc}
            </p>

            {/* Button */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="border-2 border-white/50 px-6 py-2 rounded-full text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#0a1f5c] transition cursor-pointer">
                LEARN MORE →
              </div>
            </div>

          </motion.div>

        ))}

      </div>
    </div>
  );
}