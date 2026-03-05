import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Discover from './pages/Discover';
import HomepageFileAll from './pages/HomepageFileAll'; // Ise import kiya
import Login from './utils/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/mainscreen" element={<HomepageFileAll />} /> {/* MainScreen ki jagah ye dikhega */}
        <Route path="/discover" element={<HomepageFileAll />} /> 
        <Route path="/Login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;

