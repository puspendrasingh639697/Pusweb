


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

                    {servicesData.map((service, index) => (

                        <div key={service.id} className="border-b border-gray-200 py-6">

                            <button
                                onClick={() => setOpen(open === index ? null : index)}
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
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="mt-4 text-gray-700 space-y-4"
                                    >

                                        <p>{service.desc}</p>

                                        <button
                                            onClick={() => setActivePopup(service)}
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
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className=""
                    />

                </div>

            </div>


            {/* 3D POPUP */}

            <AnimatePresence>

                {activePopup && (

                    <motion.div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <motion.div
                            initial={{ scale: 0.6, rotateX: 40 }}
                            animate={{ scale: 1, rotateX: 0 }}
                            exit={{ scale: 0.6 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white p-12 rounded-2xl max-w-xl shadow-[0_30px_80px_rgba(0,0,0,0.3)] relative"
                        >

                            <button
                                onClick={() => setActivePopup(null)}
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