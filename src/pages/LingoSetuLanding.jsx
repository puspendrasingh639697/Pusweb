import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  
   const servicesData = [
  {
    id: "ecommerce",
    title: "Ecommerce Development",
    heading: "Ecommerce Development",
    desc: "Take your online store to new heights with our eCommerce solutions. We specialize in crafting user-friendly websites and web development services that boost sales and customer satisfaction. From online stores to B2C and B2B platforms, we’ve got you covered. Let's elevate your online business together.",
    extra: "Our approach extends beyond just creating visually appealing websites. We dive deep into understanding your business model, target market, and industry trends to deliver solutions that are not only aesthetically pleasing but also highly functional and optimized for conversions. Partner with us to create an eCommerce presence that stands out and brings tangible results."
  },
  {
    id: "laravel",
    title: "Laravel Development",
    heading: "Laravel Development",
    desc: "Build robust and secure web applications with our expert Laravel developers. We specialize in creating high-performance backends and custom web solutions that ensure your business operates smoothly and securely at any scale.",
    extra: "Our Laravel experts utilize the latest framework features to build scalable architectures tailored to your specific business needs. From custom API development to complex enterprise systems, we ensure a seamless integration of features that drive efficiency. Partner with us to leverage the full power of Laravel for a secure and future-ready web application."
  },
  {
    id: "nodejs",
    title: "Node.js Development",
    heading: "Node.js Development",
    desc: "Experience lightning-fast performance with our specialized Node.js development services. We focus on building real-time, scalable applications that handle thousands of concurrent users with ease and efficiency.",
    extra: "Our approach involves using non-blocking I/O and event-driven architecture to ensure your application remains responsive under heavy loads. We dive deep into your technical requirements to deliver microservices or real-time solutions that are optimized for speed and long-term reliability in today's fast-paced digital market."
  },
  {
    id: "react",
    title: "React Web Development",
    heading: "React Web Development",
    desc: "Craft interactive and modern user interfaces with our React.js experts. We focus on building highly responsive single-page applications (SPAs) that provide a seamless and engaging experience for your users.",
    extra: "We utilize reusable components and the latest state management tools to ensure your frontend is both maintainable and incredibly fast. By understanding user behavior and performance bottlenecks, we deliver React solutions that are not only visually stunning but also optimized for maximum user retention and conversion."
  },
    {
      id: "vue",
      title: "Vue.js Development",
      heading: "Vue.js Development",
      desc: "Lightweight and versatile frontend solutions for modern web apps.",
      extra: "Easy integration and progressive web app capabilities for seamless user experience.",
      showButton: true
    },
    {
      id: "custom",
      title: "Custom Web Application",
      heading: "Custom Web Application",
      desc: "Get tailor-made software solutions designed specifically for your unique needs.",
      extra: "Our team ensures that every feature is aligned with your business goals and operational flow."
    },
    {
      id: "wordpress",
      title: "WordPress & CMS",
      heading: "WordPress & CMS",
      desc: "Manage your content effortlessly with our custom WordPress solutions.",
      extra: "We provide SEO-friendly themes and easy-to-use dashboards for non-technical users."
    }
  ];

  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="w-full bg-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0">

        {/* --- LEFT SIDEBAR: SERVICES LIST --- */}
        <div className="w-full md:w-1/3 border-r border-transparent">
          <div className="flex flex-col">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className="group flex justify-between items-center py-6 px-4 cursor-pointer border-b border-blue-800 transition-all"
              >
                <span className={`text-[17px] font-bold tracking-tight transition-colors duration-300
                  ${activeService.id === service.id ? 'text-blue-800' : 'text-blue-800'}`}>
                  {service.title}
                </span>

                <span className={`text-xl transition-all duration-300
                  ${activeService.id === service.id ? 'text-blue-800 translate-x-0' : 'text-blue-800 translate-x-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT CARD --- */}
        <div className="w-full md:w-2/3 mt-10 md:mt-0 md:pl-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[10px] p-12 md:p-20 shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-zinc-100 min-h-[550px] flex flex-col justify-center"
            >
              {/* Title Style from image_366d39 */}
              <h2 className={`text-blue-800 font-black  mb-10 
                ${activeService.id === 'vue' ? 'text-2xl text-center' : 'text-3xl text-left'}`}>
                {activeService.heading}
              </h2>

              <div className={`space-y-8 ${activeService.id === 'vue' ? 'text-center' : 'text-left'}`}>
                <p className="text-black text-[18px] leading-[1.8] font-medium">
                  {activeService.desc}
                </p>

                <p className="text-black text-[18px] leading-[1.8] font-medium">
                  {activeService.extra}
                </p>
              </div>

              {/* Button from image_367480 */}
              {activeService.showButton && (
                <div className="mt-14 flex justify-center">
                  <button className="bg-zinc-900 text-white px-10 py-5 rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-black transition-all active:scale-95 shadow-xl">
                    LEARN MORE ABOUT THIS SERVICE
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;