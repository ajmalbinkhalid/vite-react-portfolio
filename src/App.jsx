// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './page compnts/Navbar';
import LayOut from './page compnts/LayOut';
import './App.css';
import Projects from './page compnts/Projects';
import Contact from './page compnts/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AboutMe from './page compnts/AboutMe';
import TechnicalSkills from './page compnts/TechnicalSkills';
import Footer from './page compnts/Footer';
import Home from './page compnts/Home';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration in ms
  }, []);
  return (
    <BrowserRouter basename="/vite-react-portfolio">

      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<TechnicalSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
