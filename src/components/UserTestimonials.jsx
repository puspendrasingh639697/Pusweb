import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, CheckCircle2, Star } from 'lucide-react';
import userProfileImg from '../assets/puspendra.png';

const testimonials = [
  { 
    name: "Aarav", 
    text: "LingoSetu made language learning so easy. The HD calls are super clear and the interface is incredibly smooth! I have never experienced such seamless interaction with tutors before. It truly feels like a global classroom right in my pocket.", 
    stars: 5, 
    img: userProfileImg, 
    contact: "+91 98765 43210", 
    status: "Active Student" 
  },
  { 
    name: "Sofia R.", 
    text: "Met amazing experts from around the world. Totally hooked to the progress tracker and real-time feedback system. It helped me overcome my speaking anxiety within just a few weeks of consistent practice and expert guidance.", 
    stars: 5, 
    img: userProfileImg,  
    contact: "+91 88223 99102", 
    status: "Pro Member"
  },
  { 
    name: "Karan", 
    text: "This app feels alive! Every lesson is exciting and the UI is just beautiful. Best learning experience so far. The community is very supportive and the native speakers provide insights that you just can't find in any textbook.", 
    stars: 5, 
    img: userProfileImg,  
    contact: "+91 70012 55430", 
    status: "Verified User"
  },
  { 
    name: "Priya M.", 
    text: "The best platform for mastering new languages quickly and efficiently. Highly recommended for professionals who travel. The flexibility of scheduling calls at any time fits perfectly with my busy work-life balance and goals.", 
    stars: 5, 
    img: userProfileImg,  
    contact: "+91 99334 11200", 
    status: "Early Bird"
  }
];

const TestimonialCard = ({ item }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[350px] bg-white border border-blue-800 p-8 rounded-[10px] mx-4 shadow-2xl transition-all duration-500 group hover:border-blue-600 cursor-pointer">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-5">
        <div className="relative">
          <img src={item.img} alt={item.name} className="w-16 h-16 border-2  group-hover:border-blue-600 transition-all" />
          {/* Tick Icon background changed to blue-800 */}
          <div className="absolute -bottom-2 -right-2 bg-blue-800 text-white rounded-full p-1 shadow-lg">
            <CheckCircle2 size={14} strokeWidth={3} />
          </div>
        </div>
        <div>
          <h4 className="text-blue-800 font-black text-xl tracking-tight uppercase italic group-hover:text-blue-600 transition-colors">{item.name}</h4>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{item.status}</span>
        </div>
      </div>
      {/* Message Icon changed to blue-800 */}
      <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-800 transition-all duration-500">
        <MessageCircle size={20} className="text-blue-800 group-hover:text-white" />
      </div>
    </div>
    
    <div className="min-h-[90px]">
        <p className="text-black text-[17px] italic leading-relaxed font-medium group-hover:text-zinc-700 transition-colors">
          "{item.text}"
        </p>
    </div>

    <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-between items-center group-hover:border-blue-800/20">
        <div className="flex flex-col gap-1">
            <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Contact Verified</span>
            <div className="flex items-center gap-2">
                <Phone size={12} className="text-blue-800" />
                <span className="text-black text-sm font-bold tracking-wider">{item.contact}</span>
            </div>
        </div>
        <div className="flex flex-col items-end">
            {/* Stars changed to blue-800 */}
            <div className="flex text-[#FFD700] gap-0.5 mb-1">
                {[...Array(item.stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            {/* Badge changed to blue-800 theme */}
            <span className="text-blue-800 text-[10px] font-black tracking-tighter  px-3 py-1">
                Identity Confirmed
            </span>
        </div>
    </div>
  </div>
);

const UserTestimonials = () => {
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-white pt-0 pb-20 overflow-hidden">
      
      {/* --- HEADING SECTION: Pure Blue Theme --- */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="flex flex-col items-center"
        >
          <h2 className="text-black text-3xl md:text-5xl font-black italic tracking-tighter leading-tight">
            Our <span className="text-blue-800">Reviews</span>
          </h2>

          {/* Sateek Blue Line */}
          <div className="w-16 h-1 bg-blue-800 mt-3" />
        </motion.div>
      </div>

      {/* --- SLIDERS: Seamless Scrolling --- */}
      <div className="flex flex-col gap-6">
        <div className="flex relative overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-33.33%"] }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {tripleTestimonials.map((item, idx) => (
              <TestimonialCard key={`row1-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>

        <div className="flex relative overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {tripleTestimonials.map((item, idx) => (
              <TestimonialCard key={`row2-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
