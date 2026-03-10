// import React from 'react';
// import { motion } from 'framer-motion';
// import { MessageCircle, Phone, CheckCircle2, Star } from 'lucide-react';
// import userProfileImg from '../assets/puspendra.png';

// const testimonials = [
//   { 
//     name: "Aarav", 
//     text: "LingoSetu made language learning so easy. The HD calls are super clear and the interface is incredibly smooth! I have never experienced such seamless interaction with tutors before. It truly feels like a global classroom right in my pocket.", 
//     stars: 5, 
//     img: userProfileImg, 
//     contact: "+91 98765 43210", 
//     status: "Active Student" 
//   },
//   { 
//     name: "Sofia R.", 
//     text: "Met amazing experts from around the world. Totally hooked to the progress tracker and real-time feedback system. It helped me overcome my speaking anxiety within just a few weeks of consistent practice and expert guidance.", 
//     stars: 5, 
//     img: userProfileImg,  
//     contact: "+91 88223 99102", 
//     status: "Pro Member"
//   },
//   { 
//     name: "Karan", 
//     text: "This app feels alive! Every lesson is exciting and the UI is just beautiful. Best learning experience so far. The community is very supportive and the native speakers provide insights that you just can't find in any textbook.", 
//     stars: 5, 
//     img: userProfileImg,  
//     contact: "+91 70012 55430", 
//     status: "Verified User"
//   },
//   { 
//     name: "Priya M.", 
//     text: "The best platform for mastering new languages quickly and efficiently. Highly recommended for professionals who travel. The flexibility of scheduling calls at any time fits perfectly with my busy work-life balance and goals.", 
//     stars: 5, 
//     img: userProfileImg,  
//     contact: "+91 99334 11200", 
//     status: "Early Bird"
//   }
// ];

// const TestimonialCard = ({ item }) => (
//   <div className="flex-shrink-0 w-[300px] md:w-[350px] bg-white border border-blue-800 p-8 rounded-[10px] mx-4 shadow-2xl transition-all duration-500 group hover:border-blue-600 cursor-pointer">
//     <div className="flex justify-between items-start mb-6">
//       <div className="flex items-center gap-5">
//         <div className="relative">
//           <img src={item.img} alt={item.name} className="w-16 h-16 border-2  group-hover:border-blue-600 transition-all" />
//           {/* Tick Icon background changed to blue-800 */}
//           <div className="absolute -bottom-2 -right-2 bg-blue-800 text-white rounded-full p-1 shadow-lg">
//             <CheckCircle2 size={14} strokeWidth={3} />
//           </div>
//         </div>
//         <div>
//           <h4 className="text-blue-800 font-black text-xl tracking-tight uppercase italic group-hover:text-blue-600 transition-colors">{item.name}</h4>
//           <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{item.status}</span>
//         </div>
//       </div>
//       {/* Message Icon changed to blue-800 */}
//       <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-800 transition-all duration-500">
//         <MessageCircle size={20} className="text-blue-800 group-hover:text-white" />
//       </div>
//     </div>
    
//     <div className="min-h-[90px]">
//         <p className="text-black text-[17px] italic leading-relaxed font-medium group-hover:text-zinc-700 transition-colors">
//           "{item.text}"
//         </p>
//     </div>

//     <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-between items-center group-hover:border-blue-800/20">
//         <div className="flex flex-col gap-1">
//             <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Contact Verified</span>
//             <div className="flex items-center gap-2">
//                 <Phone size={12} className="text-blue-800" />
//                 <span className="text-black text-sm font-bold tracking-wider">{item.contact}</span>
//             </div>
//         </div>
//         <div className="flex flex-col items-end">
//             {/* Stars changed to blue-800 */}
//             <div className="flex text-[#FFD700] gap-0.5 mb-1">
//                 {[...Array(item.stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
//             </div>
//             {/* Badge changed to blue-800 theme */}
//             <span className="text-blue-800 text-[10px] font-black tracking-tighter  px-3 py-1">
//                 Identity Confirmed
//             </span>
//         </div>
//     </div>
//   </div>
// );

// const UserTestimonials = () => {
//   const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

//   return (
//     <section className="bg-white pt-0 pb-20 overflow-hidden">
      
//       {/* --- HEADING SECTION: Pure Blue Theme --- */}
//       <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           className="flex flex-col items-center"
//         >
//           <h2 className="text-black text-3xl md:text-5xl font-black italic tracking-tighter leading-tight">
//             Our <span className="text-blue-800">Reviews</span>
//           </h2>

//           {/* Sateek Blue Line */}
//           <div className="w-16 h-1 bg-blue-800 mt-3" />
//         </motion.div>
//       </div>

//       {/* --- SLIDERS: Seamless Scrolling --- */}
//       <div className="flex flex-col gap-6">
//         <div className="flex relative overflow-hidden">
//           <motion.div 
//             className="flex"
//             animate={{ x: ["0%", "-33.33%"] }} 
//             transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//           >
//             {tripleTestimonials.map((item, idx) => (
//               <TestimonialCard key={`row1-${idx}`} item={item} />
//             ))}
//           </motion.div>
//         </div>

//         <div className="flex relative overflow-hidden">
//           <motion.div 
//             className="flex"
//             animate={{ x: ["-33.33%", "0%"] }}
//             transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//           >
//             {tripleTestimonials.map((item, idx) => (
//               <TestimonialCard key={`row2-${idx}`} item={item} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UserTestimonials;



import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import userProfileImg from '../assets/puspendra.png';

const testimonials = [
  { 
    id: 1,
    name: "Aarav", 
    role: "Student",
    image: userProfileImg,
    rating: 5,
    review: "LingoSetu made language learning so easy. The HD calls are super clear and the interface is incredibly smooth! I have never experienced such seamless interaction with tutors before. It truly feels like a global classroom right in my pocket."
  },
  { 
    id: 2,
    name: "Sofia R.", 
    role: "Language Learner",
    image: userProfileImg,
    rating: 5,
    review: "Met amazing experts from around the world. Totally hooked to the progress tracker and real-time feedback system. It helped me overcome my speaking anxiety within just a few weeks of consistent practice and expert guidance."
  },
  { 
    id: 3,
    name: "Karan", 
    role: "Professional",
    image: userProfileImg,
    rating: 5,
    review: "This app feels alive! Every lesson is exciting and the UI is just beautiful. Best learning experience so far. The community is very supportive and the native speakers provide insights that you just can't find in any textbook."
  },
  { 
    id: 4,
    name: "Priya M.", 
    role: "Business Executive",
    image: userProfileImg,
    rating: 5,
    review: "The best platform for mastering new languages quickly and efficiently. Highly recommended for professionals who travel. The flexibility of scheduling calls at any time fits perfectly with my busy work-life balance and goals."
  },
  { 
    id: 6,
    name: "Aarav", 
    role: "Student",
    image: userProfileImg,
    rating: 5,
    review: "LingoSetu made language learning so easy. The HD calls are super clear and the interface is incredibly smooth! I have never experienced such seamless interaction with tutors before. It truly feels like a global classroom right in my pocket."
  },
  { 
    id: 7,
    name: "Sofia R.", 
    role: "Language Learner",
    image: userProfileImg,
    rating: 5,
    review: "Met amazing experts from around the world. Totally hooked to the progress tracker and real-time feedback system. It helped me overcome my speaking anxiety within just a few weeks of consistent practice and expert guidance."
  },
  { 
    id: 8,
    name: "Karan", 
    role: "Professional",
    image: userProfileImg,
    rating: 5,
    review: "This app feels alive! Every lesson is exciting and the UI is just beautiful. Best learning experience so far. The community is very supportive and the native speakers provide insights that you just can't find in any textbook."
  },
  { 
    id: 9,
    name: "Priya M.", 
    role: "Business Executive",
    image: userProfileImg,
    rating: 5,
    review: "The best platform for mastering new languages quickly and efficiently. Highly recommended for professionals who travel. The flexibility of scheduling calls at any time fits perfectly with my busy work-life balance and goals."
  }
];

export default function UserTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // Calculate how many testimonials to show based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) return 3; // lg screens
      if (width >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 1;
  };

  // Update visible count on window resize
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleCount();
      setVisibleCount(newVisibleCount);
      // Reset current index if it's out of bounds
      setCurrentIndex(0);
    };

    // Set initial visible count
    setVisibleCount(getVisibleCount());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-8xl bg-white mx-auto  px-4">
      <h1 className="text-2xl text-blue-900 md:text-3xl font-bold text-center mb-8 md:mb-12">
        Customer Reviews
      </h1>
      
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full shadow-lg bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all duration-200"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full shadow-lg bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all duration-200"
          aria-label="Next testimonials"
        >
          <ChevronRight size={24} />
        </button>

        {/* Testimonials Container */}
        <div className="overflow-hidden mx-8">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="w-full flex-shrink-0 grid gap-4 md:gap-6"
                style={{
                  gridTemplateColumns: `repeat(${visibleCount}, 1fr)`
                }}
              >
                {testimonials
                  .slice(slideIndex * visibleCount, (slideIndex + 1) * visibleCount)
                  .map((item) => (
                    <div key={item.id} className="w-full max-w-sm mx-auto">
                      <div className="overflow-hidden rounded-2xl bg-white shadow-lg m-2">
                        {/* Rating Section */}
                        <div className="mb-2 flex items-center gap-1 px-6 pt-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-4 w-4 md:h-5 md:w-5 fill-current ${
                                  i < item.rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-base md:text-lg font-semibold text-blue-900">
                            {item.rating}
                          </span>
                        </div>

                        {/* Review Section */}
                        <div className="bg-blue-900">
                          <p className="text-black rounded-br-[40px] bg-white p-3 md:p-4 text-xs md:text-sm leading-relaxed">
                            {item.review}
                          </p>
                        </div>

                        {/* Profile Section */}
                        <div className="relative overflow-hidden rounded-tl-[40px] bg-blue-900 p-4 md:p-6">
                          <div className="relative z-10 flex items-center">
                            <div className="mr-3 md:mr-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-white overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="rounded-full aspect-square w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="text-base md:text-lg font-bold text-white">
                                {item.name}
                              </h3>
                              <p className="text-xs md:text-sm text-white">
                                {item.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? 'bg-blue-900 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}