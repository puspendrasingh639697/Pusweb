import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
// import pusImage from "../assets/Pus.png";

const faqs = [
  {
    question: "What services does SG Technology provide?",
    answer: "SG Technology offers a wide range of digital services including web development, app development, UI/UX design, and digital marketing solutions tailored to business needs."
  },
  {
    question: "Why should I choose SG Technology?",
    answer: "SG Technology focuses on quality, innovation, and customer satisfaction. Their professional team ensures timely delivery and high-performance solutions."
  },
  {
    question: "Does SG Technology provide custom solutions?",
    answer: "Yes, SG Technology specializes in creating custom solutions based on your business requirements to ensure the best results."
  },
  {
    question: "How can I contact SG Technology?",
    answer: "You can contact SG Technology through their website, email, or phone. Their support team is responsive and ready to assist you."
  },
  {
    question: "Is SG Technology suitable for startups?",
    answer: "Absolutely! SG Technology works with startups as well as established businesses, offering scalable and cost-effective solutions."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 transition-all duration-300 rounded-xl border-b border-zinc-100 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] ${
          isOpen ? 'shadow-md' : 'hover:bg-zinc-50'
        }`}
      >
        <span className={`text-lg  tracking-tight text-left ${isOpen ? 'text-white' : 'text-white'}`}>
          {question}
        </span>

        <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-800 text-white rotate-45' : 'bg-white text-blue-900'}`}>
          <Plus size={20} className="text-[#f8a548]" />
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
            <span className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
bg-clip-text text-transparent  text-xl">
              Reason to Choose Us
            </span>

            <h2 className="bg-black bg-clip-text text-transparent text-3xl md:text-5xl font-black  mt-4 mb-8  uppercase">
              Client Focused Solutions : <br />
              <span className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
bg-clip-text text-transparent">
                The Reasons Behind Our Success
              </span>
            </h2>

            <p className="text-black text-lg leading-relaxed max-w-xl italic font-medium relative z-10">
 Innovate your marketing with SG Media. Our skilled digital marketing professionals deliver creative strategies, targeted campaigns, and real business growth
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