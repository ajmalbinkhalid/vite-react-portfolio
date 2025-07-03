import './App.css';
import Projects from './page compnts/Projects';
import Contact from './page compnts/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TechnicalSkills from './page compnts/TechnicalSkills';
import Footer from './page compnts/Footer';
import Home from './page compnts/Home';
import Navbar from './page compnts/Navbar';
import About from './page compnts/About';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration in ms
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><TechnicalSkills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
