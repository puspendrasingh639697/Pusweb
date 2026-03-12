import React from 'react';
import { motion } from 'framer-motion';
// Aapka image path
import heroImage from '../assets/pushpend.webp'; 

const FeaturesSection = () => {
  return (
    /* h-screen aur overflow-hidden se scrolling band hogi. 
       Mobile par height 'min-h-screen' ki hai taaki content na kute */
    <div className="w-full h-screen flex flex-col font-sans overflow-hidden bg-black">
      
      {/* --- TOP SECTION (Orange Banner - Exact 50% Height) --- */}
      <section className=" bg-[#f8a548] h-1/2 relative flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-20 w-full grid grid-cols-1 md:grid-cols-2 items-center h-full">
          
          {/* Left Content - Mobile centered, Desktop left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white z-10 text-center md:text-left mt-4 md:mt-0"
          >
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight">
              What Will AI Cost You And <br className="hidden md:block" /> What Will It Save You?
            </h1>
            <p className="text-[10px] sm:text-xs md:text-base lg:text-lg opacity-90 font-light max-w-md mb-4 md:mb-6 mx-auto md:mx-0">
              Get a clear estimate of effort, timeline, and ROI before committing resources.
            </p>
            
            <button className="bg-white text-[#f8a548] text-xs md:text-base font-semibold py-2 px-6 md:py-3 md:px-8 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get AI Cost & ROI Estimate
            </button>
          </motion.div>

          {/* Right Image - Mobile hidden or scaled down */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end items-end h-full relative overflow-hidden"
          >
            <img 
              src={heroImage} 
              alt="Expert Profile" 
              className="h-[70%] sm:h-[80%] md:h-[90%] w-auto object-contain brightness-110 mb-0 pointer-events-none" 
            />
          </motion.div>
        </div>
      </section>

      {/* --- BOTTOM SECTION (Blue/Black Process - Exact 50% Height) --- */}
      <section className="bg-black h-1/2 flex flex-col justify-center items-center text-center px-4 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 w-full"
          >
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 uppercase tracking-tight">
              Our Process for Delivering AI <br className="hidden md:block" /> Development Solutions
            </h2>
            <p className="text-white text-[10px] sm:text-xs md:text-base lg:text-lg max-w-3xl mx-auto font-light px-2">
              Here's our transparent, 6-phase process that turns your <br className="hidden md:block" /> problem into a working solution.
            </p>
          </motion.div>

          {/* Animated Line - Hidden on very small screens for space */}
          <div className=" w-full max-w-xs md:max-w-2xl h-[2px] bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-[#030802] bg-[#f8a548]"
              />
          </div>

          {/* Footer Text - Adjusted for mobile */}
          <p className="absolute bottom-4 md:bottom-8 text-white/80 text-[10px] md:text-xl tracking-[0.2em] md:tracking-widest uppercase font-medium">
            Ready to scale your business?
          </p>
      </section>

    </div>
  );
};

export default FeaturesSection;