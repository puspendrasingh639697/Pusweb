import React, { useEffect, useState } from "react";

import img1 from "../assets/pushpend.webp";
import img2 from "../assets/puspendra.png";
import Footer from "../pages/Footer";

export default function GlobalReach() {
  const employees = [
  { name: "Puspendra Rajpoot", role: "Frontend Developer", img: img1 },
  { name: "Rohit Verma", role: "Backend Developer", img: img2 },
  { name: "Neha Singh", role: "UI/UX Designer", img: img1 },
  { name: "Ankit Gupta", role: "Full Stack Developer", img: img2 },
  { name: "Priya Mehta", role: "Graphic Designer", img: img1 },
  { name: "Karan Patel", role: "Mobile App Developer", img: img2 },
  { name: "Sneha Kapoor", role: "SEO Specialist", img: img1 },
  { name: "Vikas Yadav", role: "Digital Marketer", img: img2 },
  { name: "Rahul Jain", role: "Project Manager", img: img1 },
  { name: "Pooja Mishra", role: "Content Strategist", img: img2 },
  { name: "Arjun Singh", role: "DevOps Engineer", img: img1 },
  { name: "Meena Rathi", role: "QA Tester", img: img2 },
  { name: "Saurabh Dubey", role: "Software Engineer", img: img1 },
  { name: "Nikita Sharma", role: "Product Designer", img: img2 },
  { name: "Deepak Chauhan", role: "Cloud Engineer", img: img1 },
  { name: "Ritika Soni", role: "HR Manager", img: img2 },
  { name: "Manish Tiwari", role: "Business Analyst", img: img1 },
  { name: "Anjali Verma", role: "Marketing Manager", img: img2 },
  { name: "Gaurav Saxena", role: "Tech Lead", img: img1 },
  { name: "Komal Arora", role: "Social Media Manager", img: img2 }
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
        <>

        <div className="w-full bg-white border-t-0 pt-0">

            {/* TITLE */}
            <div className="text-center">
                <h4 className="text-3xl font-bold pt-10 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
bg-clip-text text-transparent uppercase">OUR TEAM</h4>
                <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 bg-black bg-clip-text text-transparent font-semibold text-center">
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
        
       
        
        </>
    );
}