import React from 'react';
import { motion } from 'framer-motion';

const featureList = [
  { title: "What makes LingoSetu truly unique", desc: "Each live session on LingoSetu feels effortless and real, powered by stable connections and ultra-smooth performance." },
  { title: "Meet the world from your screen", desc: "Thousands are discovering global friendships, meaningful talks, and honest moments every day on LingoSetu's live platform." },
  { title: "Protection you can rely on", desc: "Your privacy matters — LingoSetu encrypts every call and safeguards your data for a worry-free experience." },
  { title: "For work, fun, or deep talks", desc: "Whether you're practicing a professional pitch or just making a new friend, our HD calls keep you connected clearly." },
  { title: "Master new languages naturally", desc: "Connect with native speakers who help you understand slang, culture, and context that books can't teach." },
  { title: "Instant expert matching", desc: "Our smart system connects you with the right mentor or partner based on your fluency goals instantly." },
  { title: "No hidden boundaries", desc: "Break the ice with people from across the globe without worrying about distance or connectivity lag." },
  { title: "Crystal clear audio quality", desc: "Focus on the conversation, not the background noise, with our specialized noise-cancellation technology." },
  { title: "Real-time progress insights", desc: "See how your fluency is improving after every session with our automated learning dashboard." },
  { title: "Always free to start", desc: "LingoSetu is built for everyone. Start chatting and making global connections without any initial cost." }
];

const FeaturesSection = () => {
  return (
    <section className="bg-black py-32 px-6 md:px-32 relative overflow-hidden">
      {/* Right Side Subtle Glow */}
      <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-[#0BF487]/5 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* TOP HEADING - Right Aligned Touch */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-28 md:ml-20"
        >
          <h2 className="text-white text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
            Discover real connections on <br />
            <span className="text-[#0BF487] italic font-semibold">LingoSetu Live Chat</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-4xl font-light leading-relaxed">
            LingoSetu isn't just a random video platform — it's your space to meet genuine people, 
            share moments, and enjoy a smooth, engaging chat experience.
          </p>
        </motion.div>

        {/* FEATURES LIST SHIFTED TO RIGHT */}
        <div className="space-y-24 md:ml-20 relative">
          {featureList.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative pl-16 group cursor-pointer"
            >
              {/* Permanent Active Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#0BF487]/20 rounded-full transition-all group-hover:bg-[#0BF487]/40"></div>

              {/* Running Glow Line (Location style) */}
              <motion.div 
                animate={{ 
                  top: ["0%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: idx * 0.3 
                }}
                className="absolute left-0 w-[4px] h-[45%] bg-[#0BF487] shadow-[0_0_20px_#0BF487] rounded-full z-10"
              />

              {/* Heading: Green to White on Hover */}
              <h3 className="text-[#0BF487] text-2xl md:text-4xl font-medium mb-4 tracking-tight italic transition-all duration-300 group-hover:text-white">
                {feature.title}
              </h3>
              
              {/* Description: Zinc to White on Hover */}
              <p className="text-zinc-500 text-base md:text-xl max-w-5xl leading-relaxed font-light transition-all duration-300 group-hover:text-zinc-100">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;