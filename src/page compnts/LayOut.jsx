// src/components/LayOut.jsx
import React from 'react';
import Home from './Home';
import Footer from './Footer'; // <-- import Footer
import TechnicalSkills from './TechnicalSkills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Stacks from './Stacks';

const LayOut = () => {
  return (
    <div className=''>
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="about">
        <Projects />
      </section>

      <section id="skills">
        <TechnicalSkills />
      </section>

      <section id="stacks">
        <Stacks />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default LayOut;
