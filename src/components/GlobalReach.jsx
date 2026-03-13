import React, { useEffect, useState } from "react";

import img1 from "../assets/pushpend.webp";
import img2 from "../assets/puspendra.png";

export default function GlobalReach() {
    const employees = [
        { name: "Puspendra", role: "Developer", img: img1 },
        { name: "Puspendra", role: "Designer", img: img2 },
        { name: "Puspendra", role: "Developer", img: img1 },
        { name: "Puspendra", role: "Designer", img: img2 },
        { name: "Puspendra", role: "Developer", img: img1 },
        { name: "Puspendra", role: "Designer", img: img2 },
        { name: "Puspendra", role: "Developer", img: img1 },
        { name: "Puspendra", role: "Designer", img: img2 },
        { name: "Puspendra", role: "Developer", img: img1 },
        { name: "Puspendra0", role: "Designer", img: img2 },
        { name: "Puspendra1", role: "Developer", img: img1 },
        { name: "Puspendra2", role: "Designer", img: img2 },
        { name: "Puspendra3", role: "Developer", img: img1 },
        { name: "Puspendra4", role: "Designer", img: img2 },
        { name: "Puspendra5", role: "Developer", img: img1 },
        { name: "Puspendra6", role: "Designer", img: img2 },
        { name: "Puspendra7", role: "Developer", img: img1 },
        { name: "Puspendra8", role: "Designer", img: img2 },
        { name: "Puspendra9", role: "Developer", img: img1 },
        { name: "Puspendra0", role: "Designer", img: img2 }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % employees.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [employees.length]);

    return (
        /* FIXED: Added border-t-0 and pt-0 to ensure no black line at top */
        <div className="w-full bg-white border-t-0 pt-0">

            {/* TITLE */}
            <div className="text-center">
                <h4 className="text-3xl font-bold pt-10 text-[#f8a548] uppercase">OUR TEAM</h4>
                <h2 className="text-4xl mt-3 bg-black bg-clip-text text-transparent font-semibold">
                    Meet The Brains Behind Our Creative Solutions
                </h2>
            </div>

            {/* CARD SLIDER */}
            <div className="relative overflow-hidden w-full mt-10">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${index * 290}px)` // Adjusted for margin
                    }}
                >
                    {employees.map((emp, i) => (
                        <div
                            key={i}
                            className="min-w-[250px] mx-5 bg-white rounded-xl shadow-lg border border-gray-100 transform transition duration-500 hover:scale-105 mb-10"
                        >
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={emp.img}
                                    alt={emp.name}
                                    className="w-full h-72 object-cover"
                                />
                            </div>

                            <div className="p-5 text-center bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] rounded-b-xl">
                                <h3 className="font-bold text-lg text-white">{emp.name}</h3>
                                <p className="text-blue-200 text-sm">{emp.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ORANGE SCROLL BAR */}
            <div className="w-full bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] overflow-hidden py-6">
                <div className="flex gap-20 whitespace-nowrap animate-marquee text-white  text-xl px-10">
                    <span>BRANDING</span>
                    <span>AGENCY</span>
                    <span>TYPOGRAPHY</span>
                    <span>DESIGN</span>
                    <span>INTERACTION</span>
                    {/* Duplicate for seamless loop */}
                    <span>BRANDING</span>
                    <span>AGENCY</span>
                    <span>TYPOGRAPHY</span>
                    <span>DESIGN</span>
                    <span>INTERACTION</span>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 15s linear infinite;
                }
            `}</style>
        </div>
    );
}