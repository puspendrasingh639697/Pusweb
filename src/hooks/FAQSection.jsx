import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
// import pusImage from "../assets/Pus.png";

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
    <div className="mb-4 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 transition-all duration-300 rounded-xl border-b border-zinc-100 bg-white ${
          isOpen ? 'shadow-md' : 'hover:bg-zinc-50'
        }`}
      >
        <span className={`text-lg  tracking-tight text-left ${isOpen ? 'text-blue-900' : 'text-blue-900'}`}>
          {question}
        </span>

        <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-800 text-white rotate-45' : 'bg-blue-800 text-blue-900'}`}>
          <Plus size={20} className="text-white" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 text-black text-base leading-relaxed bg-zinc-50/50 rounded-b-xl border-x border-b border-zinc-100">
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
   <section className="bg-[#fcfcfc] pt-24 pb-40 px-6 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-900  text-xl">
              Reason to Choose Us
            </span>

            <h2 className="text-black text-3xl md:text-5xl font-black  mt-4 mb-8  uppercase">
              Client Focused Solutions : <br />
              <span className="text-blue-900">
                The Reasons Behind Our Success
              </span>
            </h2>

            <p className="text-black text-lg leading-relaxed max-w-xl italic font-medium relative z-10">
  Accelerate innovation with world-class tech teams. We'll match you
  to an entire remote team of incredible freelance talent for all
  your software development needs.
</p>
          </motion.div>
        </div>

        {/* RIGHT SIDE FAQ */}
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col space-y-1">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Overlap Image */}
   

</section>
  );
};

export default FAQSection;