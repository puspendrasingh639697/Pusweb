import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  PenLine,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export default function ContactSection() {
  const enquiryTypes = ["Buyer", "Farmer", "Partnership", "Other"];
  const text = "Get In Touch";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Golden Gradient Class for Reuse
  const goldGradient = "bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]";

  useEffect(() => {
    let typingSpeed = isDeleting ? 60 : 120;
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          if (prev.length < text.length) return text.slice(0, prev.length + 1);
          setTimeout(() => setIsDeleting(true), 2000);
          return prev;
        } else {
          if (prev.length > 0) return text.slice(0, prev.length - 1);
          setIsDeleting(false);
          return "";
        }
      });
    }, typingSpeed);
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => { clearInterval(typingInterval); clearInterval(cursorInterval); };
  }, [isDeleting]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="Contact-Us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Heading Section */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className={`${goldGradient} text-white mb-6 px-10 py-2 font-black text-[10px] uppercase tracking-[0.3em] inline-block shadow-lg`}>
            Contact Us
          </span>

          <h2 className="text-5xl lg:text-6xl font-black mb-6 text-[#9f7928] tracking-tighter">
            {displayText}
            <span className="ml-1 text-[#FDB931]">{showCursor ? "|" : " "}</span>
          </h2>

          <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-gray-500 uppercase">
            Ready to start your journey?{" "}
            <span className="text-[#8A6E2F] font-black underline decoration-[#FDB931] decoration-2 underline-offset-8">
              Contact our team today
            </span>
          </h2>
        </motion.div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white border border-gray-100 rounded-sm">
              <form className="space-y-8">
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="group">
                    <label className="text-[11px] font-black mb-3 block text-[#8A6E2F] uppercase tracking-[0.15em]">
                      Full Name
                    </label>
                    <div className="relative border-b-2 border-gray-200 group-focus-within:border-[#FDB931] transition-colors">
                      <User className="absolute left-0 top-3 w-5 h-5 text-[#D1B464]" />
                      <input
                        type="text"
                        placeholder="ENTER YOUR NAME"
                        className="w-full bg-transparent pl-10 pr-4 py-3 text-black font-bold text-sm focus:outline-none placeholder:text-gray-300 tracking-wider"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="text-[11px] font-black mb-3 block text-[#8A6E2F] uppercase tracking-[0.15em]">
                      Email Address
                    </label>
                    <div className="relative border-b-2 border-gray-200 group-focus-within:border-[#FDB931] transition-colors">
                      <Mail className="absolute left-0 top-3 w-5 h-5 text-[#D1B464]" />
                      <input
                        type="email"
                        placeholder="YOUR@EMAIL.COM"
                        className="w-full bg-transparent pl-10 pr-4 py-3 text-black font-bold text-sm focus:outline-none placeholder:text-gray-300 tracking-wider"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Custom Dropdown */}
                <div ref={dropdownRef} className="group">
                  <label className="text-[11px] font-black mb-3 block text-[#8A6E2F] uppercase tracking-[0.15em]">
                    Subject of Enquiry
                  </label>
                  <div className="relative border-b-2 border-gray-200 group-focus-within:border-[#FDB931] transition-colors">
                    <MessageSquare className="absolute left-0 top-3 w-5 h-5 text-[#D1B464] pointer-events-none" />
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full pl-10 pr-10 py-3 cursor-pointer flex items-center justify-between"
                    >
                      <span className={`text-sm font-bold tracking-wider ${selectedEnquiry ? "text-black" : "text-gray-300"}`}>
                        {selectedEnquiry || "SELECT OPTION"}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-[#FDB931] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </div>

                    {isOpen && (
                      <div className="absolute z-50 mt-1 w-full bg-white border border-gray-100 shadow-2xl rounded-sm overflow-hidden">
                        {enquiryTypes.map((type, index) => (
                          <div
                            key={index}
                            onClick={() => { setSelectedEnquiry(type); setIsOpen(false); }}
                            className="px-6 py-4 cursor-pointer text-xs font-black tracking-widest text-[#8A6E2F] hover:bg-gray-50 transition-all uppercase"
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Box */}
                <div className="group">
                  <label className="text-[11px] font-black mb-3 block text-[#8A6E2F] uppercase tracking-[0.15em]">
                    Your Message
                  </label>
                  <div className="relative border-b-2 border-gray-200 group-focus-within:border-[#FDB931] transition-colors">
                    <PenLine className="absolute left-0 top-3 w-5 h-5 text-[#D1B464]" />
                    <textarea
                      rows={4}
                      placeholder="HOW CAN WE HELP YOU?"
                      className="w-full bg-transparent pl-10 pr-4 py-3 text-black font-bold text-sm focus:outline-none placeholder:text-gray-300 resize-none tracking-wider"
                      required
                    />
                  </div>
                </div>

                {/* THE GOLD BUTTON - AS REQUESTED */}
                <div className="pt-8">
                  <button
                    type="submit"
                    className={`${goldGradient} w-full text-white font-black px-12 py-5 rounded-sm text-[11px] uppercase tracking-[0.2em] 
                    flex justify-center items-center gap-4 shadow-[0_10px_30px_rgba(159,121,40,0.4)] 
                    hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer`}
                  >
                    Send Enquiry
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          </motion.div>
          
          <p className="text-center mt-12 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            * Our team typically responds within 24 business hours
          </p>
        </div>
      </div>
    </section>
  );
}