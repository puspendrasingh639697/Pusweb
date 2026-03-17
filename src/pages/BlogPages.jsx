import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogs } from "../hooks/Blog";
import { 
  FiEye, FiShare2, FiBookmark, FiTwitter, FiLinkedin, 
  FiArrowRight, FiClock, FiCalendar, FiRefreshCw,
  FiMail, FiAward, FiTrendingUp, FiPlay,
  FiDownload, FiTool, FiMessageCircle, FiTag, FiX
} from 'react-icons/fi';

export default function BlogPages() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const categories = ["All", ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const featuredBlog = filteredBlogs[0];
  const otherBlogs = filteredBlogs.slice(1);

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBlogModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatShortDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Gradient text style
  const gradientTextStyle = {
    backgroundImage: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "200% 200%"
  };

  // Gradient background style
  const gradientBgStyle = {
    backgroundImage: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 px-2"
            whileHover={{ scale: 1.02 }}
           
          >
            SGTechnology Blog
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-black max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4"
          >
            Insights, tutorials and updates about AI, Web Development, Digital Marketing, Technology & Branding.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 px-2"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "text-white shadow-lg" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              style={selectedCategory === category ? gradientBgStyle : {}}
            >
              <span className="flex items-center gap-1 sm:gap-2">
                <FiTag className="text-xs sm:text-sm" />
                <span className="truncate max-w-[80px] sm:max-w-none">
                  {category} {category !== "All" && `(${blogs.filter(b => b.category === category).length})`}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 px-2"
        >
          {[
            { icon: FiAward, label: "Total Blogs", value: `${blogs.length}+` },
            { icon: FiTrendingUp, label: "Categories", value: categories.length-1 },
            { icon: FiEye, label: "Total Views", value: `${(blogs.reduce((acc, blog) => acc + (blog.stats?.views || 0), 0) / 1000).toFixed(1)}K+` }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2" style={gradientTextStyle}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1 sm:gap-2 justify-center">
                <stat.icon className="text-sm sm:text-base" />
                <span>{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Blog */}
        {featuredBlog && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.01 }}
            onHoverStart={() => setHoveredCard(featuredBlog.id)}
            onHoverEnd={() => setHoveredCard(null)}
            onClick={() => openBlogModal(featuredBlog)}
            className="grid lg:grid-cols-2 gap-0 mb-12 sm:mb-16 md:mb-20 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-100"
          >
            {/* Image with Overlay - 60% of the card on desktop */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-[400px] overflow-hidden lg:order-1">
              <img 
                src={featuredBlog.image} 
                alt={featuredBlog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-black/30"
                animate={{
                  opacity: hoveredCard === featuredBlog.id ? 0.4 : 0.2
                }}
              />
              
              {/* Author Avatar Overlay */}
              <motion.div 
                className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg"
                animate={hoveredCard === featuredBlog.id ? { x: 5 } : { x: 0 }}
              >
                <img 
                  src={featuredBlog.author.avatar} 
                  alt={featuredBlog.author.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-800 truncate max-w-[100px] sm:max-w-none">
                  {featuredBlog.author.name}
                </span>
              </motion.div>

              {/* Featured Badge */}
              <motion.div 
                className="absolute top-3 sm:top-4 left-3 sm:left-4"
                animate={hoveredCard === featuredBlog.id ? { rotate: 3 } : { rotate: 0 }}
              >
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/90 backdrop-blur-sm text-xs sm:text-sm font-semibold rounded-full shadow-lg" style={gradientTextStyle}>
                  ⭐ Featured Article
                </span>
              </motion.div>
            </div>

            {/* Content - 40% of the card on desktop */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white lg:order-2">
              <motion.div
                animate={{
                  x: hoveredCard === featuredBlog.id ? 3 : 0
                }}
              >
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="px-3 sm:px-4 py-1 text-white text-xs sm:text-sm rounded-full" style={gradientBgStyle}>
                    {featuredBlog.category}
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
                    <FiClock className="text-xs" /> {featuredBlog.readTime}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FiCalendar className="text-xs" /> {formatShortDate(featuredBlog.publishedAt)}
                  </span>
                </div>

                <motion.h2 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 line-clamp-2"
                  animate={{
                    color: hoveredCard === featuredBlog.id ? "#9f7928" : "#1f2937"
                  }}
                >
                  {featuredBlog.title}
                </motion.h2>

                <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredBlog.excerpt}
                </p>

                {/* Author Bio Mini */}
                <div className="flex items-center gap-3 mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                  <img 
                    src={featuredBlog.author.avatar} 
                    alt={featuredBlog.author.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-gray-800 truncate">{featuredBlog.author.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{featuredBlog.author.bio}</p>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white  overflow-hidden shadow-lg w-full sm:w-auto text-sm sm:text-base"
                  style={gradientBgStyle}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Read Full Article 
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-black/20"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Blog Cards Grid - Image 60% of card height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2">
          {otherBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard(blog.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => openBlogModal(blog)}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col h-full"
            >
              {/* Image - 60% of card */}
              <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-3 left-3"
                  animate={hoveredCard === blog.id ? { x: 2 } : { x: 0 }}
                >
                  <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm text-xs rounded-full shadow-lg text-gray-800 font-medium">
                    {blog.category}
                  </span>
                </motion.div>

                {/* Read Time Badge */}
                <motion.div 
                  className="absolute top-3 right-3"
                  animate={hoveredCard === blog.id ? { x: -2 } : { x: 0 }}
                >
                  <span className="px-2 sm:px-3 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
                    <FiClock className="text-[10px]" /> {blog.readTime}
                  </span>
                </motion.div>
              </div>

              {/* Content - 40% of card */}
              <div className="p-4 sm:p-5 md:p-6 bg-white flex-1 flex flex-col">
                {/* Author Mini */}
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <img 
                    src={blog.author.avatar} 
                    alt={blog.author.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
                  />
                  <span className="text-xs text-gray-600 truncate max-w-[80px] sm:max-w-[100px]">{blog.author.name}</span>
                  <span className="text-xs text-gray-400 hidden xs:inline">•</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <FiCalendar className="text-xs" /> {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                <motion.h3 
                  className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800 group-hover:text-[#9f7928] transition-colors duration-300 line-clamp-2"
                >
                  {blog.title}
                </motion.h3>

                <p className="text-gray-600 mb-3 text-xs sm:text-sm line-clamp-2 flex-1">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                  {blog.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[10px] sm:text-xs bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-gray-600">
                      #{tag}
                    </span>
                  ))}
                  {blog.tags.length > 2 && (
                    <span className="text-[10px] sm:text-xs bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-gray-600">
                      +{blog.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FiEye /> {blog.stats.views.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><FiShare2 /> {blog.stats.shares}</span>
                  <span className="flex items-center gap-1"><FiBookmark /> {blog.stats.saves}</span>
                </div>

                {/* Read More Button */}
                <motion.button 
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1 sm:gap-2 text-[#9f7928] font-semibold text-xs sm:text-sm group/btn relative w-fit"
                >
                  <span>Read More</span>
                  <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  
                  {/* Underline Animation */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5"
                    style={gradientBgStyle}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>

              {/* Hover Corner Effect */}
              <motion.div 
                className="absolute top-0 right-0 w-0 h-0 border-t-[30px] sm:border-t-[40px] border-r-[30px] sm:border-r-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  borderTopColor: '#9f7928',
                  borderRightColor: '#FDB931',
                  borderLeft: "30px solid transparent",
                  borderBottom: "30px solid transparent",
                  borderLeftWidth: "30px",
                  borderBottomWidth: "30px"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 md:py-20 px-4"
          >
            <p className="text-gray-500 text-sm sm:text-base md:text-lg">No blogs found in this category.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory("All")}
              className="mt-4 px-4 sm:px-6 py-2 text-white rounded-lg text-sm sm:text-base"
              style={gradientBgStyle}
            >
              View All Blogs
            </motion.button>
          </motion.div>
        )}

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white relative overflow-hidden"
          style={gradientBgStyle}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-2 flex-wrap">
              <FiMail className="text-2xl sm:text-3xl md:text-4xl" /> 
              <span>Subscribe to Our Newsletter</span>
            </h2>
            <p className="mb-4 sm:mb-5 md:mb-6 opacity-90 text-sm sm:text-base px-2">
              Get the latest blogs and updates directly in your inbox
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 sm:gap-3 px-4 sm:px-0">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#9f7928] text-sm sm:text-base"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#f8a548] text-white rounded-lg sm:rounded-xl hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
              >
                Subscribe <FiArrowRight />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {showModal && selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBlogModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="min-h-screen flex items-center justify-center p-3 sm:p-4"
            >
              <div className="w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl my-8">
                {/* Modal Header Image */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-80">
                  <img 
                    src={selectedBlog.image} 
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeBlogModal}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors z-10"
                  >
                    <FiX className="text-sm sm:text-base" />
                  </motion.button>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-white rounded-full shadow-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm" style={gradientBgStyle}>
                      <FiTag /> {selectedBlog.category}
                    </span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-h-[60vh] overflow-y-auto">
                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
                    {selectedBlog.title}
                  </h1>

                  {/* Author Info */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b">
                    <img 
                      src={selectedBlog.author.avatar} 
                      alt={selectedBlog.author.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 truncate">{selectedBlog.author.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{selectedBlog.author.bio}</p>
                      <div className="flex gap-2 sm:gap-3 mt-2 flex-wrap">
                        <a href="#" className="text-[#9f7928] text-xs sm:text-sm flex items-center gap-1 hover:underline">
                          <FiTwitter className="text-xs" /> {selectedBlog.author.social.twitter}
                        </a>
                        <a href="#" className="text-[#9f7928] text-xs sm:text-sm flex items-center gap-1 hover:underline">
                          <FiLinkedin className="text-xs" /> {selectedBlog.author.social.linkedin}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1"><FiCalendar /> {formatDate(selectedBlog.publishedAt)}</span>
                    <span className="flex items-center gap-1"><FiRefreshCw /> {formatDate(selectedBlog.updatedAt)}</span>
                    <span className="flex items-center gap-1"><FiClock /> {selectedBlog.readTime}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {selectedBlog.tags.map((tag, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs flex items-center gap-1">
                        <FiTag className="text-[8px] sm:text-xs" /> {tag}
                      </span>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div 
                    className="prose prose-sm sm:prose-base max-w-none mb-6 sm:mb-8 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                  />

                  {/* Key Takeaways */}
                  <div className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-xl mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2" style={gradientTextStyle}>
                      <FiAward /> Key Takeaways
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                      {selectedBlog.keyTakeaways.map((takeaway, i) => (
                        <li key={i}>{takeaway}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Comparison Table */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4" style={gradientTextStyle}>{selectedBlog.table.title}</h3>
                    <div className="overflow-x-auto rounded-lg sm:rounded-xl border">
                      <table className="w-full border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="text-white" style={gradientBgStyle}>
                            {selectedBlog.table.headers.map((header, i) => (
                              <th key={i} className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left whitespace-nowrap">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {selectedBlog.table.rows.map((row, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              {row.map((cell, j) => (
                                <td key={j} className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 whitespace-nowrap">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* FAQs */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2" style={gradientTextStyle}>
                      <FiMessageCircle /> Frequently Asked Questions
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {selectedBlog.faqs.map((faq, i) => (
                        <div key={i} className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base text-gray-800">{faq.question}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  {selectedBlog.resources && (
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4" style={gradientTextStyle}>📚 Resources</h3>
                      <div className="grid gap-2 sm:gap-3">
                        {selectedBlog.resources.map((resource, i) => (
                          <a 
                            key={i}
                            href={resource.link}
                            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-lg sm:text-xl">
                              {resource.type === "Video" && <FiPlay className="text-red-500" />}
                              {resource.type === "PDF" && <FiDownload className="text-blue-500" />}
                              {resource.type === "Tool" && <FiTool className="text-green-500" />}
                            </span>
                            <div>
                              <p className="font-medium text-xs sm:text-sm text-gray-800">{resource.title}</p>
                              <p className="text-[10px] sm:text-xs text-gray-500">{resource.type}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related Posts */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2" style={gradientTextStyle}>
                      <FiTrendingUp /> Related Articles
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {selectedBlog.relatedPosts.map(postId => {
                        const related = blogs.find(b => b.id === postId);
                        return related ? (
                          <div 
                            key={postId}
                            onClick={() => openBlogModal(related)}
                            className="flex gap-2 sm:gap-3 p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group"
                          >
                            <img 
                              src={related.image} 
                              alt={related.title}
                              className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="font-medium text-xs sm:text-sm text-gray-800 group-hover:text-[#9f7928] line-clamp-2">{related.title}</h4>
                              <p className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1 mt-1">
                                <FiClock className="text-[10px]" /> {related.readTime}
                              </p>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t">
                    <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <span className="flex items-center gap-1"><FiEye /> {selectedBlog.stats.views.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><FiShare2 /> {selectedBlog.stats.shares}</span>
                      <span className="flex items-center gap-1"><FiBookmark /> {selectedBlog.stats.saves}</span>
                    </div>
                    <a 
                      href={selectedBlog.cta.link}
                      className="px-4 sm:px-6 py-2 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto justify-center"
                      style={gradientBgStyle}
                    >
                      {selectedBlog.cta.text} <FiArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}