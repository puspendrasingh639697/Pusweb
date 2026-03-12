import React from 'react';
import { motion } from 'framer-motion';

// --- IMAGES IMPORT ---
import bgImage from '../assets/pus1.jpg';
import officeImg from '../assets/office_photo.webp'; // Aapki nayi office photo

export default function AboutSection() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Professional Light Overlay */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      <div className="max-w-[1350px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 px-6 md:px-12">

        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="flex flex-col order-2 lg:order-1">

          <div className="flex flex-col mb-6">
            <h3 className="bg-[#f8a548] bg-clip-text text-transparent text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Know More About Us
            </h3>
            <div className="w-20 h-[4px] bg-[#f8a548]" /> {/* Bold Red Line */}
          </div>



          <div className="space-y-6 max-w-xl">
            <p className="text-black text-lg leading-relaxed font-semibold">
              At Grav Web Solution Pvt Ltd our mission is to empower businesses with innovative digital marketing solutions that drive growth and success. We are committed to delivering tailored services in social media marketing, performance marketing, website design, lead generation, and email marketing, ensuring our clients achieve their goals in an ever-evolving digital landscape.
            </p>

          </div>

          <div className="mt-6">
            <button className="bg-[#f8a548] hover:bg-black text-white font-black px-12 py-4 rounded-sm text-[11px] uppercase tracking-[0.2em] transition-all shadow-2xl">
              Learn More
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: OFFICE PHOTO --- */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative p-3 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-[#f8a548] group"
          >
            {/* The Office Image */}
            <img
              src={officeImg}
              alt="iB Arts Office"
              className="w-full max-w-[600px] h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Decorative Corner Box like Image 1aa67d */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4  border-[#f8a548] -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4  border-[#f8a548] -z-10" />
          </motion.div>
        </div>

      </div>


    </section>
  );
}