// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './page compnts/Navbar';
import LayOut from './page compnts/LayOut';
import './App.css';
import Chapters from './secondary compnts/Chapters';
import Projects from './page compnts/Projects';
import Skills from './secondary compnts/Skills';
import Contact from './page compnts/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AboutMe from './page compnts/AboutMe';
import TechnicalSkills from './page compnts/TechnicalSkills';
import Home from './page compnts/Home';
import Footer from './page compnts/Footer';

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 }); // animation duration in ms
}, []);
  return (
    <BrowserRouter>

      {/* Navbar always on top */}
      <Navbar />

      {/* Main content below the fixed navbar */}
      <div className="pt-5"> {/* Adjust pt-20 to match your Navbar height */}
        <Routes>
          <Route path="/" element={<LayOut />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />         
          <Route path="/skills" element={<TechnicalSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer always on top */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
