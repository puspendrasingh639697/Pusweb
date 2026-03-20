import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import userProfileImg from '../assets/puspendra.png';

const testimonials = [
  { 
    id: 1,
    name: "Titu R.", 
    role: "Student",
    image: userProfileImg,
    rating: 5,
    review: "They offer creative and effective digital solutions that truly stand out in today’s competitive market. Their team understands client requirements and delivers results that exceed expectations. The quality of work, attention to detail, and timely execution make them a great choice. Overall, their services provide excellent value and are totally worth it"
  },
  { 
    id: 2,
    name: "Sofia R.", 
    role: "Language Learner",
    image: userProfileImg,
    rating: 5,
    review: "SG Technology is a reliable and innovative tech company that provides modern solutions. Their focus is on quality, performance, and customer satisfaction. The team has a professional approach and ensures timely delivery. Their work in web development and digital services is impressive. Overall, SG Technology is a trustworthy and growth-oriented company"
  },
  { 
    id: 3,
    name: "Karan", 
    role: "Professional",
    image: userProfileImg,
    rating: 5,
    review: "SG Technology delivered an excellent website for our NGO with integrated donation features and essential functionalities. Their team built a secure, user-friendly, and fully responsive platform optimized for SEO. The donation system works smoothly, helping us increase contributions and engagement. Their professionalism, timely delivery, and ongoing support make them a reliable technology partner."
  },
  { 
    id: 4,
    name: "Priya M.", 
    role: "Business Executive",
    image: userProfileImg,
    rating: 5,
    review: "SG Technology delivered exceptional service in developing a healthcare application similar to 1mg. Their team demonstrated strong expertise in app development, UI/UX design, and scalable solutions. The application is fast, user-friendly, and optimized for performance. Their professional approach, timely delivery, and ongoing support make them a reliable partner for high-quality, SEO-friendly digital solutions"
  },
  { 
    id: 6,
    name: "Aarav", 
    role: "Student",
    image: userProfileImg,
    rating: 5,
    review: "I have a great experience with SG Technology for my Ankur Electrical Shop. Their team is professional, responsive, and delivered effective digital marketing strategies. I saw increased customer inquiries and footfall quickly. Their personalized approach and regular updates made a big difference. Highly recommended for growing local businesses online"
  },
  { 
    id: 7,
    name: "Sofia R.", 
    role: "Language Learner",
    image: userProfileImg,
    rating: 5,
    review: "We partnered with SG Technology for our travel application, and the experience has been excellent. Their team delivered a user-friendly, well-designed, and high-performing app tailored to our needs. Communication was smooth, timelines were met, and support has been reliable. Highly professional service—strongly recommended for travel tech solutions"
  },
  { 
    id: 8,
    name: "Karan", 
    role: "Professional",
    image: userProfileImg,
    rating: 5,
    review: "As Bhumiik, we had a great experience with SG Technology in growing our digital presence. Their team delivered creative strategies, consistent branding, and strong online visibility. We saw real engagement and growth. Highly professional and result-driven service—definitely recommended for brands aiming to scale digitally"
  },
  { 
    id: 9,
    name: "Priya M.", 
    role: "Business Executive",
    image: userProfileImg,
    rating: 5,
    review: "SG Technology delivered outstanding marketing services for my banquet hall. Their team is creative, professional, and highly responsive. They helped increase our visibility and bookings significantly through effective strategies. I’m  satisfied with the results and would highly recommend them to anyone looking to grow their business"
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
      <h1 className="text-2xl bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
bg-clip-text text-transparent md:text-3xl font-bold text-center mb-8 md:mb-12">
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
                      

                        {/* Review Section */}
                        <div className="bg-[#f8a548]">
                          <p className="text-black rounded-br-[10px] bg-white p-3 md:p-4 text-xs md:text-sm leading-relaxed">
                            {item.review}
                          </p>
                        </div>

                        {/* Profile Section */}
                        <div className="relative overflow-hidden rounded-tl-[40px]  bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] p-4 md:p-6">
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
                  ? 'bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] w-6'
                  : 'bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}