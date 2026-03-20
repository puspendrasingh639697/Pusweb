import React, { useState, useEffect } from "react";
import { blogs } from "../hooks/Blog";
import { 
  FiEye, FiShare2, FiBookmark, FiTwitter, FiLinkedin, 
  FiArrowRight, FiClock, FiCalendar, FiRefreshCw,
  FiMail, FiAward, FiTrendingUp, FiPlay,
  FiMessageCircle, FiTag, FiX, FiHeart, FiSearch, 
  FiUser, FiMessageSquare, FiSend, FiCopy, FiCheck,
  FiStar, FiFileText
} from 'react-icons/fi';

export default function BlogPages() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [copied, setCopied] = useState(false);

  const getCategoryColor = (category) => {
    const colors = {
      "Digital Marketing": "bg-white text-black",
      "SEO": "bg-white text-black",
      "Social Media": "bg-white text-black",
      "PPC Advertising": "bg-white text-black",
      "Email Marketing": "bg-white text-black",
      "Content Marketing": "bg-white text-black"
    };
    return colors[category] || "bg-gray-100 text-black";
  };

  const gradientTextStyle = {
    backgroundImage: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "200% 200%"
  };

  const gradientBgStyle = {
    backgroundImage: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
  };

  useEffect(() => {
    const savedLikes = localStorage.getItem("blogLikes");
    const savedSaves = localStorage.getItem("blogSaves");
    const savedComments = localStorage.getItem("blogComments");
    if (savedLikes) setLikedPosts(JSON.parse(savedLikes));
    if (savedSaves) setSavedPosts(JSON.parse(savedSaves));
    if (savedComments) setComments(JSON.parse(savedComments));
  }, []);

  const categories = ["All", ...new Set(blogs.map(blog => blog.category))];
  
  const filteredBlogs = blogs.filter(blog => {
    const matchCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredBlog = filteredBlogs[0];
  const otherBlogs = filteredBlogs.slice(1);

  const handleLike = (blogId, e) => {
    e.stopPropagation();
    const newLikes = { ...likedPosts, [blogId]: !likedPosts[blogId] };
    setLikedPosts(newLikes);
    localStorage.setItem("blogLikes", JSON.stringify(newLikes));
  };

  const handleSave = (blogId, e) => {
    e.stopPropagation();
    const newSaves = { ...savedPosts, [blogId]: !savedPosts[blogId] };
    setSavedPosts(newSaves);
    localStorage.setItem("blogSaves", JSON.stringify(newSaves));
  };

  const handleComment = (blogId) => {
    if (!newComment.trim()) return;
    const blogComments = comments[blogId] || [];
    const newComments = {
      ...comments,
      [blogId]: [...blogComments, { id: Date.now(), text: newComment, date: new Date().toISOString(), user: "You" }]
    };
    setComments(newComments);
    localStorage.setItem("blogComments", JSON.stringify(newComments));
    setNewComment("");
  };

  const handleShare = async (blog, platform, e) => {
    e.stopPropagation();
    const url = window.location.href;
    if (platform === 'copy') {
      await navigator.clipboard.writeText(`${blog.title}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(blog.title)}`, '_blank');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

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

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-white/88"></div>
      
      <div className="relative z-10">
        {/* Header - Responsive */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12"> 
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] bg-clip-text text-transparent font-extrabold tracking-tighter"
              style={{
                lineHeight: '1.2',
                paddingBottom: '8px'
              }}
            >
              SGTechnology Blog
            </h1>
            <p className="text-black text-xs sm:text-sm md:text-base font-medium mt-2 sm:mt-3 tracking-wide px-4">
              Learn about AI, Web Dev, Marketing & Technology
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
          
          {/* Category Filters - Responsive */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "text-white shadow-md" 
                    : "bg-white/90 text-black border border-gray-300 hover:bg-white"
                }`}
                style={selectedCategory === cat ? gradientBgStyle : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stats Cards - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {[
              { icon: <FiFileText size={20} />, label: "Articles", value: blogs.length, color: "text-yellow-600" },
              { icon: <FiBookmark size={20} />, label: "Saved", value: Object.values(savedPosts).filter(v => v).length, color: "text-green-600" },
              { icon: <FiEye size={20} />, label: "Views", value: (blogs.reduce((a,b) => a + (b.stats?.views || 0), 0) / 1000).toFixed(1) + "K", color: "text-purple-600" }
            ].map((stat, i) => (
              <div key={i} className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] backdrop-blur-sm p-3 sm:p-4 rounded-xl text-center shadow-md border border-gray-200">
                <div className={`text-black flex justify-center mb-1 sm:mb-2`}>{stat.icon}</div>
                <div className="text-lg sm:text-xl font-bold text-black">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-black">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Blog - Responsive */}
          {featuredBlog && (
            <div
              onClick={() => openBlogModal(featuredBlog)}
              className="bg-white rounded-xl shadow-xl mb-8 sm:mb-10 cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden hover:bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 md:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex-shrink-0 overflow-hidden mx-auto sm:mx-0">
                  <img 
                    src={featuredBlog.image} 
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/80x80?text=Image"; }}
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(featuredBlog.category)}`}>
                      {featuredBlog.category}
                    </span>
                    <span className="text-xs text-black flex items-center gap-1">
                      <FiClock size={12} /> {featuredBlog.readTime}
                    </span>
                    <span className="text-xs text-black flex items-center gap-1">
                      <FiCalendar size={12} /> {new Date(featuredBlog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-black text-xs sm:text-sm mb-3 line-clamp-2">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <FiUser size={12} className="text-black" />
                      </div>
                      <span className="text-xs sm:text-sm text-black">{featuredBlog.author.name}</span>
                    </div>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-white rounded-lg text-xs sm:text-sm flex items-center gap-1 hover:opacity-90" style={gradientBgStyle}>
                      Read More <FiArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Cards Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {otherBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => openBlogModal(blog)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 overflow-hidden hover:bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]"
              >
                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/56x56?text=Image"; }}
                      />
                    </div>
                    <div className="flex-1 flex items-start justify-between">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${getCategoryColor(blog.category)}`}>
                        {blog.category}
                      </span>
                      <div className="flex gap-1">
                        <button onClick={(e) => handleLike(blog.id, e)} className="p-1 hover:bg-gray-100 rounded-full transition">
                          <FiHeart size={14} className={likedPosts[blog.id] ? "text-red-500 fill-red-500" : "text-black"} />
                        </button>
                        <button onClick={(e) => handleSave(blog.id, e)} className="p-1 hover:bg-gray-100 rounded-full transition">
                          <FiBookmark size={14} className={savedPosts[blog.id] ? "text-yellow-600 fill-yellow-600" : "text-black"} />
                        </button>
                        <button onClick={(e) => handleShare(blog, 'copy', e)} className="p-1 hover:bg-gray-100 rounded-full transition">
                          <FiShare2 size={14} className="text-black" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-black mb-2 line-clamp-2 text-sm sm:text-base">
                    {blog.title}
                  </h3>

                  <p className="text-black text-xs sm:text-sm mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] sm:text-xs text-black mb-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <FiUser size={8} className="text-black" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-black">{blog.author.name}</span>
                    <span>•</span>
                    <FiClock size={10} />
                    <span className="text-[10px] sm:text-xs text-black">{blog.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {blog.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[8px] sm:text-[10px] bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded text-black">
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 2 && (
                      <span className="text-[8px] sm:text-[10px] bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded text-black">
                        +{blog.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[8px] sm:text-[10px] text-black pt-2 border-t border-gray-200">
                    <span className="flex items-center gap-1"><FiEye size={10} /> {blog.stats.views.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><FiHeart size={10} /> {likedPosts[blog.id] ? (blog.stats.likes || 0) + 1 : (blog.stats.likes || 0)}</span>
                    <span className="flex items-center gap-1"><FiMessageSquare size={10} /> {(comments[blog.id]?.length || 0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State - Responsive */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-md mx-auto shadow-lg">
                <FiSearch size={40} className="text-gray-400 mx-auto mb-3" />
                <p className="text-black text-sm sm:text-base mb-3">No articles found matching your search.</p>
                <button onClick={() => { setSelectedCategory("All"); setSearchTerm(""); }} className="mt-3 px-4 sm:px-5 py-1.5 sm:py-2 text-white rounded-lg text-sm" style={gradientBgStyle}>
                  Clear Filters
                </button>
              </div>
            </div>
          )}

          {/* Newsletter Section - Removed as requested */}
        </div>

        {/* Full Page Modal - Responsive */}
        {showModal && selectedBlog && (
          <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center p-3 sm:p-4">
              <div className="max-w-5xl w-full bg-white rounded-xl shadow-2xl my-6 sm:my-8 relative">
                {/* Close Button */}
                <button 
                  onClick={closeBlogModal} 
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <FiX size={20} />
                </button>
                
                {/* Blog Content - Responsive */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
                  {/* Author Bio & Actions - Responsive */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img 
                        src={selectedBlog.author.avatar || `https://ui-avatars.com/api/?background=6366f1&color=fff&name=${selectedBlog.author.name}`} 
                        alt={selectedBlog.author.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-black text-sm sm:text-base">{selectedBlog.author.name}</p>
                        <p className="text-xs sm:text-sm text-black">{selectedBlog.author.bio}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <button onClick={(e) => handleLike(selectedBlog.id, e)} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition">
                        <FiHeart size={18} className={likedPosts[selectedBlog.id] ? "text-red-500 fill-red-500" : "text-black"} />
                      </button>
                      <button onClick={(e) => handleSave(selectedBlog.id, e)} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition">
                        <FiBookmark size={18} className={savedPosts[selectedBlog.id] ? "text-yellow-600 fill-yellow-600" : "text-black"} />
                      </button>
                      <button onClick={(e) => handleShare(selectedBlog, 'copy', e)} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition">
                        {copied ? <FiCheck size={18} className="text-green-500" /> : <FiShare2 size={18} className="text-black" />}
                      </button>
                    </div>
                  </div>

                  {/* Tags - Responsive */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {selectedBlog.tags.map((tag, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs text-black">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Main Content - Responsive */}
                  <div 
                    className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-6 sm:mb-8 text-black"
                    dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                  />

                  {/* Key Takeaways - Responsive */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-5 md:p-6 rounded-xl mb-6 sm:mb-8 shadow-md">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-black flex items-center gap-2">
                      <FiAward size={18} className="text-yellow-600" /> Key Takeaways
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-black">
                      {selectedBlog.keyTakeaways.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  {/* Comparison Table - Responsive */}
                  {selectedBlog.table && (
                    <div className="mb-6 sm:mb-8">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black">{selectedBlog.table.title}</h3>
                      <div className="overflow-x-auto border rounded-lg shadow-sm">
                        <table className="w-full text-xs sm:text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              {selectedBlog.table.headers.map((header, i) => (
                                <th key={i} className="px-2 sm:px-4 py-2 sm:py-3 text-left text-black">{header}</th>
                              ))}
                             </tr>
                          </thead>
                          <tbody>
                            {selectedBlog.table.rows.map((row, i) => (
                              <tr key={i} className="border-t">
                                {row.map((cell, j) => (
                                  <td key={j} className="px-2 sm:px-4 py-2 sm:py-3 text-black">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* FAQs - Responsive */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black flex items-center gap-2">
                      <FiMessageCircle size={18} className="text-purple-600" /> Frequently Asked Questions
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {selectedBlog.faqs.map((faq, i) => (
                        <div key={i} className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition shadow-sm">
                          <p className="font-semibold text-black text-sm sm:text-base mb-1 sm:mb-2">{faq.question}</p>
                          <p className="text-black text-xs sm:text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Comments - Responsive */}
                  <div className="border-t pt-4 sm:pt-6 mb-6 sm:mb-8">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black flex items-center gap-2">
                      <FiMessageSquare size={18} /> Comments ({comments[selectedBlog.id]?.length || 0})
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <input 
                        type="text" 
                        placeholder="Write a comment..." 
                        value={newComment} 
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black text-sm shadow-sm"
                      />
                      <button 
                        onClick={() => handleComment(selectedBlog.id)} 
                        className="px-4 sm:px-5 py-1.5 sm:py-2 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-md text-sm"
                        style={gradientBgStyle}
                      >
                        <FiSend size={14} /> Post
                      </button>
                    </div>
                    <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
                      {(comments[selectedBlog.id] || []).map(comment => (
                        <div key={comment.id} className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <FiUser size={12} className="text-black" />
                            <span className="text-xs sm:text-sm font-medium text-black">{comment.user}</span>
                            <span className="text-[10px] sm:text-xs text-black">{new Date(comment.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-black text-xs sm:text-sm">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Posts - Responsive */}
                  {selectedBlog.relatedPosts && selectedBlog.relatedPosts.length > 0 && (
                    <div className="border-t pt-4 sm:pt-6">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black">Related Articles</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {selectedBlog.relatedPosts.map(pid => {
                          const related = blogs.find(b => b.id === pid);
                          return related ? (
                            <div 
                              key={pid} 
                              onClick={() => openBlogModal(related)} 
                              className="flex gap-2 sm:gap-3 p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition group shadow-sm"
                            >
                              <img 
                                src={related.image} 
                                alt={related.title}
                                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-black text-xs sm:text-sm group-hover:text-yellow-600 line-clamp-2">{related.title}</p>
                                <p className="text-[10px] sm:text-xs text-black mt-1 flex items-center gap-1">
                                  <FiClock size={10} /> {related.readTime}
                                </p>
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* CTA - Responsive */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t">
                    <a 
                      href={selectedBlog.cta.link} 
                      className="block text-center px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 text-white rounded-lg font-semibold hover:opacity-90 transition text-sm sm:text-base md:text-lg shadow-md"
                      style={gradientBgStyle}
                    >
                      {selectedBlog.cta.text} <FiArrowRight className="inline ml-1 sm:ml-2" size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}