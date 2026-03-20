

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Search, Globe, Share2, Megaphone } from "lucide-react";

import centerImg from "../assets/sec.png";
import seoIcon from "../assets/seo.png";
import Footer from "./Footer";

export default function ConnectionSection() {
  return (
   <>

    <section className="bg-white py-24 px-6 overflow-hidden">

      {/* TOP HEADING */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black leading-tight text-black">
          Welcome to the  New Way of   <br/>
          <span className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
          bg-clip-text text-transparent">
              Connection
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">

        {/* LEFT FEATURES */}
        <div className="space-y-10">

          {[
            {
              title: "Web Development",
              desc: "Building stunning, responsive, and user-friendly websites that perfectly reflect your brand identity.",
              icon: <Globe size={22} />
            },
            {
              title: "App Development",
              desc: "Crafting high-performance mobile applications with seamless user experiences.",
              icon: <Smartphone size={22} />
            },
            {
              title: "S.E.O",
              desc: "Boosting your online visibility with proven SEO strategies.",
              icon: <Search size={22} />
            }
          ].map((feature, idx) => (

            <div key={idx} className="flex gap-4 items-start group relative">

              <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-[#034a1f] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="text-black mt-1 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-black">
                  {feature.title}
                </h3>

                <p className="text-black text-sm leading-relaxed max-w-sm">
                  {feature.desc}
                </p>
              </div>

            </div>

          ))}

        </div>

        {/* CENTER IMAGE */}
        <div className="flex flex-col items-center justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-2xl border-white"
          >

            <img
              src={centerImg}
              alt="Digital Marketing"
              className="w-full h-full object-cover"
            />

          </motion.div>

        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-10">

          {[
            {
              title: "Social Media Marketing",
              desc: "Growing your brand on Instagram, Facebook, and LinkedIn with engaging campaigns.",
              icon: <Share2 size={22} />
            },
            {
              title: "Digital Marketing",
              desc: "Promoting your business with targeted ads and smart campaigns.",
              icon: <Megaphone size={22} />
            },
            {
              title: "Business Growth Strategy",
              desc: "Helping brands scale with data-driven marketing solutions.",
              icon: <Globe size={22} />
            }
          ].map((feature, idx) => (

            <div key={idx} className="flex gap-4 items-start group relative">

              <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-[#034a1f] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="text-black mt-1 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <div>

                <h3 className="text-lg font-bold text-black">
                  {feature.title}
                </h3>

                <p className="text-black text-sm leading-relaxed max-w-sm">
                  {feature.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="text-center mt-20 max-w-3xl mx-auto">

        <p className="text-black text-lg leading-relaxed">

          Join the digital revolution with SG Media, where brands grow, audiences connect, and
          <span className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
          bg-clip-text text-transparent font-bold">
            {" "}businesses{" "}
          </span>

          thrive through powerful digital marketing.

        </p>

      </div>

    </section>

   
   
   
   </>
  );
}