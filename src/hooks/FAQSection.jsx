import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PhoneCall, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is LingoSetu free to use?",
    answer: "Yes! Basic language learning, private HD calls, and meeting experts can be started for free. Some advanced features might require credits, but you can explore most of the app without paying anything."
  },
  {
    question: "How do I download LingoSetu?",
    answer: "LingoSetu is available on both Google Play Store and Apple App Store. Simply click the download buttons in the header or search for 'LingoSetu' in your store."
  },
  {
    question: "Is my data and communication safe?",
    answer: "Safety is our priority. All your chats and HD video calls are end-to-end encrypted. We also have 24/7 moderation to keep the community respectful and secure."
  },
  {
    question: "What are LingoSetu credits?",
    answer: "Credits are our in-app currency used to unlock premium lessons, book dedicated time with top global experts, and access special learning materials."
  },
  {
    question: "Can I delete my account anytime?",
    answer: "Yes, you have full control over your data. You can delete your account and payment information instantly through the app settings whenever you want."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 w-full max-w-4xl mx-auto px-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 bg-[#0F0F0F] border-2 transition-all duration-300 rounded-[25px] ${
          isOpen ? 'border-[#0BF487] shadow-[0_0_25px_rgba(11,244,135,0.15)]' : 'border-white/5 hover:border-white/10'
        }`}
      >
        <span className={` md:text-xl  italic tracking-tight text-left ${isOpen ? 'text-[#0BF487]' : 'text-white'}`}>
          {question}
        </span>
        {/* Icons hamesha green rahenge */}
        <ChevronDown 
          className={`transition-transform duration-300 text-[#0BF487] ${isOpen ? 'rotate-180' : ''}`} 
          size={24}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 text-zinc-400 text-sm md:text-lg leading-relaxed italic bg-black/60 rounded-b-[25px] mt-[-15px] border-x-2 border-b-2 border-[#0BF487]/20 shadow-inner">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0BF487]/5 blur-[120px] rounded-full -z-10"></div>

      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-white text-3xl md:text-8xl font-[1000] uppercase italic tracking-tighter mb-6 leading-none">
            FREQUENTLY ASKED <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0BF487] to-white/50">
              QUESTIONS
            </span>
          </h2>
        </motion.div>
        
      
      </div>

      <div className="flex flex-col items-center space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>

     
    </section>
  );
};

export default FAQSection;