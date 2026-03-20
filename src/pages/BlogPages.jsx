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
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-12"> 
          <div className="text-center mb-10">
            <h1 
              className="text-4xl md:text-6xl  bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]
bg-clip-text text-transparent font-extrabold tracking-tighter" 
              style={{
                lineHeight: '1.2',
                paddingBottom: '10px'
              }}
            >
              SGTechnology Blog
            </h1>
            <p className="text-black text-sm md:text-base font-medium mt-3 tracking-wide">
              Learn about AI, Web Dev, Marketing & Technology
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
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

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <FiFileText size={22} />, label: "Articles", value: blogs.length, color: "text-yellow-600" },
              { icon: <FiBookmark size={22} />, label: "Saved", value: Object.values(savedPosts).filter(v => v).length, color: "text-green-600" },
              { icon: <FiEye size={22} />, label: "Views", value: (blogs.reduce((a,b) => a + (b.stats?.views || 0), 0) / 1000).toFixed(1) + "K", color: "text-purple-600" }
            ].map((stat, i) => (
              <div key={i} className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] backdrop-blur-sm p-4 rounded-xl text-center shadow-md border border-gray-200">
                <div className={`text-black flex justify-center mb-2`}>{stat.icon}</div>
                <div className="text-xl font-bold text-black">{stat.value}</div>
                <div className="text-xs text-black">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Blog - Larger Size */}
          {featuredBlog && (
            <div
              onClick={() => openBlogModal(featuredBlog)}
              className="bg-white rounded-xl shadow-xl mb-8 cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden hover:bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]"
            >
              <div className="flex gap-5 p-6">
                <div className="w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden">
                  <img 
                    src={featuredBlog.image} 
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/80x80?text=Image"; }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
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
                  <h2 className="text-xl font-bold text-black mb-2">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-black text-sm mb-3 line-clamp-2">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <FiUser size={12} className="text-black" />
                      </div>
                      <span className="text-sm text-black">{featuredBlog.author.name}</span>
                    </div>
                    <button className="px-4 py-2 text-white rounded-lg text-sm flex items-center gap-1 hover:opacity-90" style={gradientBgStyle}>
                      Read More <FiArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Cards Grid - Larger Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => openBlogModal(blog)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 overflow-hidden hover:bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4 mb-3">
                    {/* Card Image - Larger */}
                    <div className="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/56x56?text=Image"; }}
                      />
                    </div>
                    <div className="flex-1 flex items-start justify-between">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
                        {blog.category}
                      </span>
                      <div className="flex gap-1">
                        <button onClick={(e) => handleLike(blog.id, e)} className="p-1.5 hover:bg-gray-100 rounded-full transition">
                          <FiHeart size={16} className={likedPosts[blog.id] ? "text-red-500 fill-red-500" : "text-black"} />
                        </button>
                        <button onClick={(e) => handleSave(blog.id, e)} className="p-1.5 hover:bg-gray-100 rounded-full transition">
                          <FiBookmark size={16} className={savedPosts[blog.id] ? "text-yellow-600 fill-yellow-600" : "text-black"} />
                        </button>
                        <button onClick={(e) => handleShare(blog, 'copy', e)} className="p-1.5 hover:bg-gray-100 rounded-full transition">
                          <FiShare2 size={16} className="text-black" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-black mb-2 line-clamp-2 text-base">
                    {blog.title}
                  </h3>

                  <p className="text-black text-sm mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-black mb-2">
                    <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <FiUser size={10} className="text-black" />
                    </div>
                    <span className="text-xs text-black">{blog.author.name}</span>
                    <span>•</span>
                    <FiClock size={10} className="text-black" />
                    <span className="text-xs text-black">{blog.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {blog.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-black">
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 2 && (
                      <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-black">
                        +{blog.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-black pt-2 border-t border-gray-200">
                    <span className="flex items-center gap-1"><FiEye size={12} className="text-black" /> {blog.stats.views.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><FiHeart size={12} className="text-black" /> {likedPosts[blog.id] ? (blog.stats.likes || 0) + 1 : (blog.stats.likes || 0)}</span>
                    <span className="flex items-center gap-1"><FiMessageSquare size={12} className="text-black" /> {(comments[blog.id]?.length || 0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-lg">
                <FiSearch size={48} className="text-gray-400 mx-auto mb-3" />
                <p className="text-black mb-3">No articles found matching your search.</p>
                <button onClick={() => { setSelectedCategory("All"); setSearchTerm(""); }} className="mt-3 px-5 py-2 text-white rounded-lg text-sm" style={gradientBgStyle}>
                  Clear Filters
                </button>
              </div>
            </div>
          )}

         
        </div>

        {/* Full Page Modal with Close Icon */}
        {showModal && selectedBlog && (
          <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="max-w-5xl w-full bg-white rounded-xl shadow-2xl my-8 relative">
                {/* Close Button - Fixed */}
                <button 
                  onClick={closeBlogModal} 
                  className="absolute top-5 right-5 z-50 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <FiX size={24} />
                </button>
                
               

                {/* Blog Content */}
                <div className="max-w-4xl mx-auto px-6 py-10 md:py-12">
                  {/* Author Bio & Actions */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b">
                    <div className="flex items-center gap-4">
                      <img 
                        src={selectedBlog.author.avatar || `https://ui-avatars.com/api/?background=6366f1&color=fff&name=${selectedBlog.author.name}`} 
                        alt={selectedBlog.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-black">{selectedBlog.author.name}</p>
                        <p className="text-sm text-black">{selectedBlog.author.bio}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={(e) => handleLike(selectedBlog.id, e)} className="p-2 hover:bg-gray-100 rounded-full transition">
                        <FiHeart size={22} className={likedPosts[selectedBlog.id] ? "text-red-500 fill-red-500" : "text-black"} />
                      </button>
                      <button onClick={(e) => handleSave(selectedBlog.id, e)} className="p-2 hover:bg-gray-100 rounded-full transition">
                        <FiBookmark size={22} className={savedPosts[selectedBlog.id] ? "text-yellow-600 fill-yellow-600" : "text-black"} />
                      </button>
                      <button onClick={(e) => handleShare(selectedBlog, 'copy', e)} className="p-2 hover:bg-gray-100 rounded-full transition">
                        {copied ? <FiCheck size={22} className="text-green-500" /> : <FiShare2 size={22} className="text-black" />}
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedBlog.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-black">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div 
                    className="prose prose-lg max-w-none mb-8 text-black"
                    dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                  />

                  {/* Key Takeaways */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-8 shadow-md">
                    <h3 className="font-bold text-xl mb-3 text-black flex items-center gap-2">
                      <FiAward size={22} className="text-yellow-600" /> Key Takeaways
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      {selectedBlog.keyTakeaways.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  {/* Comparison Table */}
                  {selectedBlog.table && (
                    <div className="mb-8">
                      <h3 className="font-bold text-xl mb-4 text-black">{selectedBlog.table.title}</h3>
                      <div className="overflow-x-auto border rounded-lg shadow-sm">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              {selectedBlog.table.headers.map((header, i) => (
                                <th key={i} className="px-4 py-3 text-left text-black">{header}</th>
                              ))}
                              </tr>
                          </thead>
                          <tbody>
                            {selectedBlog.table.rows.map((row, i) => (
                              <tr key={i} className="border-t">
                                {row.map((cell, j) => (
                                  <td key={j} className="px-4 py-3 text-black">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* FAQs */}
                  <div className="mb-8">
                    <h3 className="font-bold text-xl mb-4 text-black flex items-center gap-2">
                      <FiMessageCircle size={22} className="text-purple-600" /> Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      {selectedBlog.faqs.map((faq, i) => (
                        <div key={i} className="border rounded-lg p-4 hover:bg-gray-50 transition shadow-sm">
                          <p className="font-semibold text-black mb-2">{faq.question}</p>
                          <p className="text-black">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="border-t pt-6 mb-8">
                    <h3 className="font-bold text-xl mb-4 text-black flex items-center gap-2">
                      <FiMessageSquare size={22} /> Comments ({comments[selectedBlog.id]?.length || 0})
                    </h3>
                    <div className="flex gap-3 mb-6">
                      <input 
                        type="text" 
                        placeholder="Write a comment..." 
                        value={newComment} 
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black shadow-sm"
                      />
                      <button 
                        onClick={() => handleComment(selectedBlog.id)} 
                        className="px-5 py-2 text-white rounded-lg font-medium flex items-center gap-2 shadow-md"
                        style={gradientBgStyle}
                      >
                        <FiSend size={16} /> Post
                      </button>
                    </div>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {(comments[selectedBlog.id] || []).map(comment => (
                        <div key={comment.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <FiUser size={14} className="text-black" />
                            <span className="text-sm font-medium text-black">{comment.user}</span>
                            <span className="text-xs text-black">{new Date(comment.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-black">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Posts */}
                  {selectedBlog.relatedPosts && selectedBlog.relatedPosts.length > 0 && (
                    <div className="border-t pt-6">
                      <h3 className="font-bold text-xl mb-4 text-black">Related Articles</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedBlog.relatedPosts.map(pid => {
                          const related = blogs.find(b => b.id === pid);
                          return related ? (
                            <div 
                              key={pid} 
                              onClick={() => openBlogModal(related)} 
                              className="flex gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition group shadow-sm"
                            >
                              <img 
                                src={related.image} 
                                alt={related.title}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-black group-hover:text-yellow-600 line-clamp-2">{related.title}</p>
                                <p className="text-xs text-black mt-1 flex items-center gap-1">
                                  <FiClock size={12} /> {related.readTime}
                                </p>
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t">
                    <a 
                      href={selectedBlog.cta.link} 
                      className="block text-center px-6 py-4 text-white rounded-lg font-semibold hover:opacity-90 transition text-lg shadow-md"
                      style={gradientBgStyle}
                    >
                      {selectedBlog.cta.text} <FiArrowRight className="inline ml-2" size={18} />
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