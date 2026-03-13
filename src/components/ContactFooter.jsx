import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import pushImage from "../assets/push.png";   

const teamReviews = [
  {
    role: "Manager",
    text: "The company fosters a culture of continuous learning. There are opportunities to learn from experienced colleagues and stay up-to-date on industry trends.",
    name: "Om Prakash",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    stars: 5
  },
  {
    role: "HOD, iOS Dept.",
    text: "The collaborative tools and processes implemented here streamline teamwork and communication. This allows us to work efficiently and achieve results quickly.",
    name: "Gauri Shankar Prasad",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    stars: 5
  },
  {
    role: "Lead Developer",
    text: "LingoSetu provides a world-class environment for application development and data engineering. Excellence is truly a way of life here.",
    name: "Rahul Verma",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    stars: 5
  }
];

const ContactFooter = () => {
  return (
    <footer className="relative w-full bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        
        {/* Header Section */}
        <div className="relative flex justify-center items-center mb-14">
          <h2 className=" bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
bg-clip-text text-transparent bg-clip-text text-transparent  mt-10 text-2xl md:text-5xl font-black uppercase italic tracking-tighter text-center">
            Our Team Loves <span className="text-black">Us</span>
          </h2>
          
          <div className="absolute right-0 flex gap-4">
            <button className="swiper-prev-custom mt-10 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] p-4 rounded-full text-white hover:bg-blue-700 transition-all shadow-lg">
              <ArrowLeft size={22} />
            </button>
            <button className="swiper-next-custom mt-10 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] p-4 rounded-full text-white hover:bg-blue-700 transition-all shadow-lg">
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.swiper-prev-custom',
            nextEl: '.swiper-next-custom',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: { slidesPerView: 2 }
          }}
          className="pb-10"
        >
          {teamReviews.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col group h-full">
                <h4 className="bg-black bg-clip-text text-transparent font-bold text-xl mb-5 px-2">{item.role}</h4>
                
                <div className="relative p-10 rounded-3xl bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] min-h-[220px] flex items-center shadow-xl">
                  <p className="text-white italic text-lg leading-relaxed font-medium">
                    "{item.text}"
                  </p>
                  <div className="absolute -bottom-3 left-12 w-8 h-8 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] transform rotate-45"></div>
                </div>

                <div className="flex justify-between items-center mt-10 px-4">
                  <div className="flex items-center gap-5">
                    <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl grayscale group-hover:grayscale-0 transition-all" />
                    <span className="bg-black  bg-clip-text text-transparent font-black text-xl tracking-tight">{item.name}</span>
                  </div>

                  <div className="flex text-orange-500 gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Background blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-800/5 blur-[150px] rounded-full -z-10"></div>
{/* Left Image */}
<div className="absolute left-0 top-0 w-[420px] md:w-[520px] lg:w-[620px]">
  <img
    src={pushImage}
    alt="left visual"
    className="w-full object-contain"
  />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] mix-blend-color"></div>
</div>

{/* Right Image */}
<div className="absolute right-0 top-0 w-[420px] md:w-[520px] lg:w-[620px]">
  <img
    src={pushImage}
    alt="right visual"
    className="w-full object-contain scale-x-[-1]"
  />
  <div className="absolute inset-0  bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] mix-blend-color"></div>
</div>
    </footer>
  );
};

export default ContactFooter;