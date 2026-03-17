import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Discover from './pages/Discover';
import HomepageFileAll from './pages/HomepageFileAll'; // Ise import kiya
import Login from './utils/Login';
import AboutSection from './pages/WhyChooseLingoSetu';
import GlobalReach from './components/GlobalReach';
import ConnectionSection from './pages/CommunityLive';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/mainscreen" element={<HomepageFileAll />} /> {/* MainScreen ki jagah ye dikhega */}
        <Route path="/discover" element={<HomepageFileAll />} /> 
        <Route path="/Login" element={<Login />} /> 
         <Route path="/aboutSection" element={<AboutSection />} /> 
         <Route path="/globalReach" element={<GlobalReach />} /> 
         <Route path="/connectionSection" element={<ConnectionSection />} /> 
      </Routes>
    </Router>
  );
}

export default App;

