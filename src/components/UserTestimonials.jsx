import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react'; // Contact icons ke liye

// Aapki local assets
import MenAvatar from '../assets/men.png';
import WomenAvatar from '../assets/mengirls.png';

const testimonials = [
  { name: "Aarav", text: "LingoSetu made language learning so easy. The HD calls are super clear!", stars: 5, img: MenAvatar, contact: "+91 98765XXXXX" },
  { name: "Sofia R.", text: "Met amazing experts from around the world. Totally hooked to the progress tracker.", stars: 5, img: WomenAvatar, contact: "+91 88223XXXXX" },
  { name: "Karan", text: "This app feels alive! Every lesson is exciting and the UI is just beautiful.", stars: 5, img: MenAvatar, contact: "+91 70012XXXXX" },
  { name: "Priya M.", text: "The best platform for mastering new languages quickly and efficiently.", stars: 5, img: WomenAvatar, contact: "+91 99334XXXXX" },
  { name: "John D.", text: "Highly professional mentors and end-to-end secure communication. 10/10!", stars: 5, img: MenAvatar, contact: "+91 81122XXXXX" },
  { name: "Elena", text: "I love how I can track my progress real-time. Best choice for students!", stars: 5, img: WomenAvatar, contact: "+91 77665XXXXX" },
  { name: "Rahul S.", text: "Smooth interface and very helpful community support. Recommended!", stars: 5, img: MenAvatar, contact: "+91 90001XXXXX" },
  { name: "Sana K.", text: "LingoSetu is my daily go-to app for language practice. Amazing experience.", stars: 5, img: WomenAvatar, contact: "+91 82233XXXXX" }
];

const TestimonialCard = ({ item }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[420px] bg-[#0F0F0F] border-2 border-white/5 p-8 rounded-[30px] mx-6 shadow-2xl transition-all duration-500 group hover:border-[#0BF487] hover:shadow-[0_0_30px_rgba(11,244,135,0.2)] cursor-pointer">
    
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-5">
        {/* Avatar with Hover Effect */}
        <img 
          src={item.img} 
          alt={item.name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-[#0BF487] transition-colors duration-500" 
        />
        <div>
          <h4 className="text-white font-black text-lg tracking-tight uppercase italic group-hover:text-[#0BF487] transition-colors">{item.name}</h4>
          <div className="flex text-[#0BF487] text-xs gap-1 mt-1">
            {"★".repeat(item.stars)}
          </div>
        </div>
      </div>
      
      {/* Contact Icon */}
      <div className="bg-white/5 p-3 rounded-full group-hover:bg-[#0BF487] transition-all duration-500">
        <MessageCircle size={18} className="text-zinc-500 group-hover:text-black" />
      </div>
    </div>
    
    <p className="text-zinc-400 text-sm md:text-base italic leading-relaxed font-medium group-hover:text-zinc-200 transition-colors">
      "{item.text}"
    </p>

    {/* Contact Detail & Verification */}
    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center group-hover:border-[#0BF487]/20">
        <div className="flex items-center gap-2">
            <Phone size={12} className="text-[#0BF487]" />
            <span className="text-zinc-500 text-[11px] font-bold group-hover:text-white transition-colors">
                {item.contact}
            </span>
        </div>
        <span className="text-[#0BF487] text-[10px] font-black uppercase tracking-widest bg-[#0BF487]/10 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Verified
        </span>
    </div>
  </div>
);

const UserTestimonials = () => {
  return (
    <section className="bg-black py-24 overflow-hidden border-t border-white/5">
      <div className="text-center mb-20">
      <h2 className="text-white text-2xl md:text-7xl font-[50] uppercase italic tracking-tighter leading-none flex flex-wrap gap-3 justify-center text-center">
  <span>The Global Word</span>
  <span className="text-[#0BF487] drop-shadow-[0_0_20px_rgba(11,244,135,0.3)]">
    on the Street
  </span>
</h2>


      </div>

      <div className="flex flex-col gap-12">
        {/* ROW 1: LEFT TO RIGHT */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: RIGHT TO LEFT */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [-2000, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;