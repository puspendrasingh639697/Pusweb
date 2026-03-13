// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const ServicesSection = () => {
  
//    const servicesData = [
//   {
//     id: "ecommerce",
//     title: "Ecommerce Development",
//     heading: "Ecommerce Development",
//     desc: "Take your online store to new heights with our eCommerce solutions. We specialize in crafting user-friendly websites and web development services that boost sales and customer satisfaction. From online stores to B2C and B2B platforms, we’ve got you covered. Let's elevate your online business together.",
//     extra: "Our approach extends beyond just creating visually appealing websites. We dive deep into understanding your business model, target market, and industry trends to deliver solutions that are not only aesthetically pleasing but also highly functional and optimized for conversions. Partner with us to create an eCommerce presence that stands out and brings tangible results."
//   },
//   {
//     id: "laravel",
//     title: "Laravel Development",
//     heading: "Laravel Development",
//     desc: "Build robust and secure web applications with our expert Laravel developers. We specialize in creating high-performance backends and custom web solutions that ensure your business operates smoothly and securely at any scale.",
//     extra: "Our Laravel experts utilize the latest framework features to build scalable architectures tailored to your specific business needs. From custom API development to complex enterprise systems, we ensure a seamless integration of features that drive efficiency. Partner with us to leverage the full power of Laravel for a secure and future-ready web application."
//   },
//   {
//     id: "nodejs",
//     title: "Node.js Development",
//     heading: "Node.js Development",
//     desc: "Experience lightning-fast performance with our specialized Node.js development services. We focus on building real-time, scalable applications that handle thousands of concurrent users with ease and efficiency.",
//     extra: "Our approach involves using non-blocking I/O and event-driven architecture to ensure your application remains responsive under heavy loads. We dive deep into your technical requirements to deliver microservices or real-time solutions that are optimized for speed and long-term reliability in today's fast-paced digital market."
//   },
//   {
//     id: "react",
//     title: "React Web Development",
//     heading: "React Web Development",
//     desc: "Craft interactive and modern user interfaces with our React.js experts. We focus on building highly responsive single-page applications (SPAs) that provide a seamless and engaging experience for your users.",
//     extra: "We utilize reusable components and the latest state management tools to ensure your frontend is both maintainable and incredibly fast. By understanding user behavior and performance bottlenecks, we deliver React solutions that are not only visually stunning but also optimized for maximum user retention and conversion."
//   },
//     {
//       id: "vue",
//       title: "Vue.js Development",
//       heading: "Vue.js Development",
//       desc: "Lightweight and versatile frontend solutions for modern web apps.",
//       extra: "Easy integration and progressive web app capabilities for seamless user experience.",
//       showButton: true
//     },
//     {
//       id: "custom",
//       title: "Custom Web Application",
//       heading: "Custom Web Application",
//       desc: "Get tailor-made software solutions designed specifically for your unique needs.",
//       extra: "Our team ensures that every feature is aligned with your business goals and operational flow."
//     },
//     {
//       id: "wordpress",
//       title: "WordPress & CMS",
//       heading: "WordPress & CMS",
//       desc: "Manage your content effortlessly with our custom WordPress solutions.",
//       extra: "We provide SEO-friendly themes and easy-to-use dashboards for non-technical users."
//     }
//   ];

//   const [activeService, setActiveService] = useState(servicesData[0]);

//   return (
//     <div className="w-full bg-white py-24 px-6 md:px-20 font-sans">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0">

//         {/* --- LEFT SIDEBAR: SERVICES LIST --- */}
//         <div className="w-full md:w-1/3 border-r border-transparent">
//           <div className="flex flex-col">
//             {servicesData.map((service) => (
//               <div
//                 key={service.id}
//                 onClick={() => setActiveService(service)}
//                 className="group flex justify-between items-center py-6 px-4 cursor-pointer border-b border-green-900 transition-all"
//               >
//                 <span className={`text-[17px] font-bold tracking-tight transition-colors duration-300
//                   ${activeService.id === service.id ? 'bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]  bg-clip-text text-transparent' : 'bg-black  bg-clip-text text-transparent'}`}>
//                   {service.title}
//                 </span>

//                 <span className={`text-xl transition-all duration-300
//                   ${activeService.id === service.id ? 'text-[#f8a548] translate-x-0' : 'text-[#f8a548] translate-x-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>
//                   →
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- RIGHT SIDE: CONTENT CARD --- */}
//         <div className="w-full md:w-2/3 mt-10 md:mt-0 md:pl-12">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeService.id}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-[10px] p-12 md:p-20 shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-zinc-100 min-h-[550px] flex flex-col justify-center"
//             >
//               {/* Title Style from image_366d39 */}
//               <h2 className={`bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
// bg-clip-text text-transparent font-black  mb-10 
//                 ${activeService.id === 'vue' ? 'text-2xl text-center' : 'text-3xl text-left'}`}>
//                 {activeService.heading}
//               </h2>

//               <div className={`space-y-8 ${activeService.id === 'vue' ? 'text-center' : 'text-left'}`}>
//                 <p className="text-black text-[18px] leading-[1.8] font-medium">
//                   {activeService.desc}
//                 </p>

//                 <p className="text-black text-[18px] leading-[1.8] font-medium">
//                   {activeService.extra}
//                 </p>
//               </div>

//               {/* Button from image_367480 */}
//               {activeService.showButton && (
//                 <div className="mt-14 flex justify-center">
//                   {/* <button className="bg-zinc-900 text-white px-10 py-5 rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-black transition-all active:scale-95 shadow-xl">
//                     LEARN MORE ABOUT THIS SERVICE
//                   </button> */}
//                 </div>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ServicesSection;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/pushpend.webp";

const ServicesSection = () => {

const servicesData = [
{
id: "ecommerce",
title: "Ecommerce Development",
heading: "Ecommerce Development",
desc: "Take your online store to new heights with our eCommerce solutions.",
extra: "Our approach extends beyond just creating visually appealing websites."
},
{
id: "laravel",
title: "Laravel Development",
heading: "Laravel Development",
desc: "Build robust and secure web applications with our expert Laravel developers.",
extra: "Our Laravel experts utilize the latest framework features."
},
{
id: "nodejs",
title: "Node.js Development",
heading: "Node.js Development",
desc: "Experience lightning-fast performance with our Node.js services.",
extra: "Event-driven architecture ensures your application stays responsive."
},
{
id: "react",
title: "React Web Development",
heading: "React Web Development",
desc: "Craft interactive and modern user interfaces.",
extra: "Reusable components and optimized performance."
},
{
id: "vue",
title: "Vue.js Development",
heading: "Vue.js Development",
desc: "Lightweight and versatile frontend solutions.",
extra: "Progressive web app capabilities."
}
];

const [open, setOpen] = useState(null);
const [activePopup, setActivePopup] = useState(null);

return (

<div className="w-full bg-white py-24 px-6 md:px-20">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

{/* LEFT SIDE SERVICES */}

<div>

{servicesData.map((service,index)=>(

<div key={service.id} className="border-b border-gray-200 py-6">

<button
onClick={()=> setOpen(open === index ? null : index)}
className="w-full flex justify-between items-center text-left"
>

<span className="font-bold text-lg bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] bg-clip-text text-transparent">

{service.title}

</span>

<span className="text-2xl">
{open === index ? "-" : "+"}
</span>

</button>

<AnimatePresence>

{open === index && (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
exit={{opacity:0,height:0}}
transition={{duration:0.4}}
className="mt-4 text-gray-700 space-y-4"
>

<p>{service.desc}</p>

<button
onClick={()=> setActivePopup(service)}
className="mt-3 text-sm font-semibold text-[#caa24c] hover:underline"
>

Read More →

</button>

</motion.div>

)}

</AnimatePresence>

</div>

))}

</div>


{/* RIGHT SIDE IMAGE */}

<div className="flex items-center justify-center">

<motion.img
src={img1}
alt="service"
initial={{scale:0.9,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:0.8}}
className="rounded-2xl shadow-2xl"
/>

</div>

</div>


{/* 3D POPUP */}

<AnimatePresence>

{activePopup && (

<motion.div
className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
>

<motion.div
initial={{scale:0.6,rotateX:40}}
animate={{scale:1,rotateX:0}}
exit={{scale:0.6}}
transition={{duration:0.4}}
className="bg-white p-12 rounded-2xl max-w-xl shadow-[0_30px_80px_rgba(0,0,0,0.3)] relative"
>

<button
onClick={()=> setActivePopup(null)}
className="absolute top-4 right-6 text-2xl"
>
✕
</button>

<h2 className="text-3xl font-bold mb-6 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] bg-clip-text text-transparent">

{activePopup.heading}

</h2>

<p className="text-gray-700 leading-relaxed mb-6">

{activePopup.desc}

</p>

<p className="text-gray-700 leading-relaxed">

{activePopup.extra}

</p>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</div>

);
};

export default ServicesSection;