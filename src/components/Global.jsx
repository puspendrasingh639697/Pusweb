import React from "react";
import { motion } from "framer-motion";

export default function Services() {

  const services = [
    {
      id: 1,
      title: "Website Development",
      desc: "Build powerful, responsive websites that enhance user experience, strengthen brand presence, and drive business growth with modern design and technology"
    },
    {
      id: 2,
      title: "App Development",
      desc: "Create scalable, high-performance applications that streamline business processes, enhance user experience, and drive innovation with modern technology and smart development."
    },
    {
      id: 3,
      title: "Search Engine Optimization",
      desc: "Boost your website visibility with strategic SEO, higher rankings, targeted traffic, and data-driven optimization for sustainable online growth."
    },
    {
      id: 4,
      title: "Lead Generation",
      desc: "Generate high-quality leads with targeted digital strategies that attract the right audience, increase engagement, and convert potential customers into loyal clients."
    },
    {
      id: 5,
      title: "Branding & Designing",
      desc: "Build a strong brand identity with creative design, compelling visuals, and strategic branding that makes your business memorable and impactful."
    },
    {
      id: 6,
      title: "Video Production",
      desc: "Create compelling videos that tell your brand story, engage audiences, and boost digital presence with creative, high-quality video production."
    }
  ];

  return (
    <div className="bg-white max-auto px-6 py-20">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {services.map((service, i) => (

      <motion.div
        key={i}
        whileHover={{ y: -12 }}
        transition={{ duration: 0.3 }}
        className="relative p-10 flex flex-col items-center justify-center rounded-xl 
bg-white text-black border border-gray-100 shadow-xl
hover:bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
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

      </motion.div>

    ))}

  </div>
</div>
  );
}