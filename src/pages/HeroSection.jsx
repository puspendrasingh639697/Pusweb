// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react'; 
// import { CheckCircle2 } from 'lucide-react';
// // Button icon ke liye
// import bgImage from '../assets/slide3.webp'; // Background image placeholder

// export default function  HeroSection() {
//   return (
//     <section className="  relative min-h-screen  overflow-hidden pt-24 lg:pt-32 pb-16 px-6 md:px-20">
//       {/* Background Overlay */}
//       <div className="absolute inset-0  pointer-events-none">
//          <img src={bgImage} alt="background" className="w-full h-full object-cover" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="text-white space-y-8">
//           <motion.h1 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-4xl md:text-6xl font-extrabold leading-tight"
//           >
//            <p>Next-Gen Digital Marketing
// Enhanced with AI Technology</p>
//           </motion.h1>

//           <p className="text-white text-lg max-w-lg">
//             We help businesses grow online through strategic digital marketing and SEO solutions designed to increase traffic, leads, and measurable ROI
//           </p>

//      {/* Feature Grid */}

//      {/* Feature Grid */}
// <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
//   {[
//     "Data-Driven Marketing and Smart Campaigns",
//     "Welcome to the New Way of Connection",
//     "AI-Powered Digital Marketing Solutions",
//     "Smarter Digital Marketing for Real Business Growth"
//   ].map((text, i) => (

//     <div 
//       key={i} 
//       className="flex items-center gap-4 p-4 rounded-lg
//       bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
//       border border-white/10
//       shadow-[6px_6px_0px_#8A6E2F]
//       hover:shadow-[8px_8px_0px_#9f7928]
//       hover:-translate-y-1 hover:-translate-x-1
//       transition-all duration-300"
//     >

//       {/* Checkbox */}
//       <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-white/30 hover:bg-white transition-colors">
//         <CheckCircle2 size={18} className="text-white hover:text-black" />
//       </div>

//       {/* Text */}
//       <p className="text-[13px] md:text-sm font-medium text-white leading-snug">
//         {text}
//       </p>

//     </div>

//   ))}
// </div>

         
//         </div>

//         {/* RIGHT FORM CARD */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] rounded-xl n shadow-2xl max-w-md mx-end lg:ml-auto"
//         >
//           {/* Form Header (Orange Section) */}
//           <div className="   p-12 text-center text-white relative">
//             <div className="flex justify-center -space-x-2 mb-3">
//               <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden" />
//               <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden" />
//               <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 overflow-hidden" />
//             </div>
//             <h3 className="text-xl font-bold">Discuss Your Requirements</h3>
//             <p className="text-sm text-white/90">Get our quick yet quality services!</p>
            
//           </div>

//           {/* Form Fields */}
//           <form className="p-8 space-y-4 bg-white">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input type="text" placeholder="Full Name*" className="w-full border-b border-blue-800 py-2 outline-none focus:border-[#f15a24] text-sm text-black" />
//               <input type="email" placeholder="Business Email Address*" className="w-full border-b border-blue-800 py-2 outline-none focus:border-[#f15a24] text-sm text-black" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex items-center border-b border-black py-2">
//                 <span className="mr-2">🇮🇳</span>
//                 <input type="text" placeholder="+91" className="w-full outline-none text-sm text-black" />
//               </div>
//               <input type="text" placeholder="Organization / Institution*" className="w-full border-b border-blue-900 py-2 outline-none focus:border-[#f15a24] text-sm text-black" />
//             </div>
//             <textarea placeholder="Message*" rows="3" className="w-full border-b border-blue-900  py-2 outline-none focus:border-[#f15a24] text-sm text-black resize-none" />
            
//             <button className="w-full bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] hover:bg-[#d44d1d] text-white font-bold py-4 rounded-sm flex items-center justify-center gap-2 transition-all group mt-4">
//               Submit <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </button>
//           </form>
//         </motion.div>

//       </div>
//     </section>
//   );
// }




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; 
import { CheckCircle2 } from 'lucide-react';
import bgImage from '../assets/slide3.webp';

export default function HeroSection() {

  const fullText = "AI Technology";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {

      if (!isDeleting) {

        setText(fullText.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
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
    <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-32 pb-16 px-6 md:px-20">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={bgImage} alt="background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white space-y-8">

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <p>
              Next-Gen Digital Marketing Enhanced with
              <br/>

              <span className="
              bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
              bg-clip-text text-transparent
              ">
                {text}
              </span>

            </p>
          </motion.h1>

          <p className="text-white text-lg max-w-lg">
            We help businesses grow online through strategic digital marketing and SEO solutions designed to increase traffic, leads, and measurable ROI
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            {[
              "Data-Driven Marketing and Smart Campaigns",
              "Welcome to the New Way of Connection",
              "AI-Powered Digital Marketing Solutions",
              "Smarter Digital Marketing for Real Business Growth"
            ].map((text, i) => (

              <div 
                key={i} 
                className="flex items-center gap-4 p-4 rounded-lg
                bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
                border border-white/10
                shadow-[6px_6px_0px_#8A6E2F]
                hover:shadow-[8px_8px_0px_#9f7928]
                hover:-translate-y-1 hover:-translate-x-1
                transition-all duration-300"
              >

                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-white/30 hover:bg-white transition-colors">
                  <CheckCircle2 size={18} className="text-white hover:text-black" />
                </div>

                <p className="text-[13px] md:text-sm font-medium text-white leading-snug">
                  {text}
                </p>

              </div>

            ))}
          </div>

        </div>

        {/* RIGHT FORM CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] rounded-xl shadow-2xl max-w-md mx-end lg:ml-auto"
        >

          <div className="p-12 text-center text-white relative">
            <div className="flex justify-center -space-x-2 mb-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 overflow-hidden" />
            </div>

            <h3 className="text-xl font-bold">Discuss Your Requirements</h3>
            <p className="text-sm text-white/90">Get our quick yet quality services!</p>
          </div>

          <form className="p-8 space-y-4 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name*" className="w-full border-b border-blue-800 py-2 outline-none focus:border-[#f15a24] text-sm text-black" />
              <input type="email" placeholder="Business Email Address*" className="w-full border-b border-blue-800 py-2 outline-none focus:border-[#f15a24] text-sm text-black" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center border-b border-black py-2">
                <span className="mr-2">🇮🇳</span>
                <input type="text" placeholder="+91" className="w-full outline-none text-sm text-black" />
              </div>
              <input type="text" placeholder="Organization / Institution*" className="w-full border-b border-blue-900 py-2 outline-none focus:border-[#f15a24] text-sm text-black" />
            </div>

            <textarea placeholder="Message*" rows="3" className="w-full border-b border-blue-900 py-2 outline-none focus:border-[#f15a24] text-sm text-black resize-none" />
            
            <button className="w-full bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] text-white font-bold py-4 rounded-sm flex items-center justify-center gap-2 transition-all group mt-4">
              Submit <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

        </motion.div>

      </div>
    </section>
  );
}