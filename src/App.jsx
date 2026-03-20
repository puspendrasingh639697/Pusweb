

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Discover from "./pages/Discover";
import HomepageFileAll from "./pages/HomepageFileAll";
import Login from "./utils/Login";
import AboutSection from "./pages/WhyChooseLingoSetu";
import GlobalReach from "./components/GlobalReach";
import ConnectionSection from "./pages/CommunityLive";
import Layout from "./pages/Layout";
import Services from "./components/Global";
import BlogPages from "./pages/BlogPages";
// import Blog from "./hooks/Blog";



function App() {
  return (
    <Router>
      <Routes>

        {/* Splash page */}
        <Route path="/" element={<Splash />} />

        {/* Layout with Header + Footer */}
        <Route element={<Layout />}>

          <Route path="/home" element={<HomepageFileAll />} />
          <Route path="/discover" element={<HomepageFileAll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/globalReach" element={<GlobalReach />} />
          <Route path="/connectionSection" element={<ConnectionSection />} />

         <Route path="/servies" element={<Services />} />

         {/* <Route path="/blog" element={<BlogPages />} />
          */}

          <Route path="/blog" element={<BlogPages />} />
        <Route path="/blog/:id" element={<BlogPages />} />

          

        </Route>

      </Routes>
    </Router>
  );
}

export default App;