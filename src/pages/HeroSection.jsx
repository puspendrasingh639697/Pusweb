import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'; 
import bgImage from '../assets/slide2.jpg';

export default function HeroSection() {
  const fullText = "AI Technology";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ HANDLE SUBMIT (API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://sg-lyla.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Form Submitted ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: ""
      });

    } catch (error) {
      alert("Error ❌");
    }
  };

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(fullText.substring(0, index - 1));
        setIndex(index - 1);
        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <section className="relative min-h-screen overflow-hidden  lg:pt-32 pb-16 px-6 md:px-20">
      
      <div className="absolute inset-0 pointer-events-none">
        <img src={bgImage} alt="background" className="w-full h-full object-cover" />
       
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SAME */}
        <div className="text-white space-y-8">
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
            <p>
              Next-Gen Digital Marketing Enhanced with
              <br/>
              <span className="inline-block min-h-[1.2em]">
                <span className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] bg-clip-text text-transparent">
                  {text}
                </span>
              </span>
            </p>
          </motion.h1>

          <p className="text-white text-lg max-w-lg">
            We help businesses grow online through strategic digital marketing and SEO solutions designed to increase traffic, leads, and measurable ROI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            {[
              "Data-Driven Marketing and Smart Campaigns",
              "Welcome to the New Way of Connection",
              "AI-Powered Digital Marketing Solutions",
              "Smarter Digital Marketing for Real Business Growth"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-sm bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] border border-white/10 shadow-[1px_1px_0px_#8A6E2F] hover:shadow-[8px_8px_0px_#9f7928] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-white/30 hover:bg-white transition-colors">
                  <CheckCircle2 size={18} className="text-white hover:text-black" />
                </div>
                <p className="text-[13px] md:text-sm font-medium text-white leading-snug">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM (UI SAME — ONLY props added) */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] rounded-xl shadow-2xl max-w-md mx-end lg:ml-auto">
          
          <div className="p-12 text-center text-white relative">
            <div className="flex justify-center -space-x-2 mb-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Discuss Your Requirements</h3>
            <p className="text-sm text-white/90">Get our quick yet quality services!</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-4 bg-white rounded-b-xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name*" className="w-full border-b border-blue-800 py-2 outline-none text-sm text-black" />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Business Email Address*" className="w-full border-b border-blue-800 py-2 outline-none text-sm text-black" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center border-b border-black py-2">
                <span className="mr-2">🇮🇳</span>
                <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="+91" className="w-full outline-none text-sm text-black" />
              </div>
              <input name="organization" value={formData.organization} onChange={handleChange} type="text" placeholder="Organization / Institution*" className="w-full border-b border-blue-900 py-2 outline-none text-sm text-black" />
            </div>

            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message*" rows="3" className="w-full border-b border-blue-900 py-2 outline-none text-sm text-black resize-none" />
            
            <button className="w-full bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] text-white font-bold py-4 rounded-sm flex items-center justify-center gap-2 transition-all group mt-4 hover:scale-[1.02]">
              Submit <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}