import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Twitter } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const ContactFooter = () => {
  return (
    <footer className="relative w-full py-24 bg-black overflow-hidden border-t border-[#0BF487]/20">
      {/* Background Neon Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0BF487]/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* 1. TYPING BRAND NAME (Text size optimized) */}
        <div className="mb-6 min-h-[50px] flex justify-center items-center">
          <TypeAnimation
            sequence={[
              'LINGOSETU',
              2000,
              '',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-white text-2xl md:text-7xl font-[100]"
            repeat={Infinity}
          />
        </div>

        {/* 2. PROMOTIONAL TEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-zinc-400 text-base md:text-xl font-bold max-w-2xl mx-auto italic leading-relaxed mb-12"
        >
          Have more questions or need assistance? Reach out to us, and we'll be happy to help.
        </motion.p>

        {/* 3. CONTACT INFO (Text sizes reduced as requested) */}
        <div className="flex flex-col items-center space-y-6 mt-10">
          
          {/* Email Support (Size: md:text-xl) */}
          <motion.a 
            href="mailto:support@lingosetu.com"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 text-lg md:text-xl text-white hover:text-[#0BF487] transition-all group"
          >
            <div className="bg-[#0BF487] p-3 rounded-full group-hover:bg-[#0BF487] group-hover:text-black transition-all shadow-[0_0_15px_rgba(11,244,135,0.2)]">
              <Mail size={18} className="text-white group-hover:text-black" />
            </div>
            <span className="tracking-tight">support@lingosetu.com</span>
          </motion.a>

          {/* Phone Support (Size: md:text-3xl) */}
          <motion.a 
            href="tel:+911234567890"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 text-lg md:text-xl text-white  hover:text-[#0BF487] transition-all group"
          >
            <div className="bg-[#0BF487] p-3 rounded-full group-hover:bg-[#0BF487] group-hover:text-black transition-all shadow-[0_0_15px_rgba(11,244,135,0.2)]">
              <Phone size={18} fill="currentColor" className="text-white group-hover:text-black" />
            </div>
            <span className="tracking-tighter">+91-1234567890</span>
          </motion.a>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;