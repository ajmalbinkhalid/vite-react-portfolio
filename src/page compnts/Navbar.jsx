import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GradientText from '../react bits compnts/GradientText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // optional: auto close mobile menu on link click

  return (
    <nav className="px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-15 fixed top-0 w-full bg-black/30 backdrop-blur-lg text-white z-50">
      <div className="py-4 flex justify-between items-center">
        <div>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="font-medium text-2xl"
          >
            ABK<span>.in</span>
          </GradientText>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 font-medium">
          <li><Link to="/home" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black px-4 sm:px-4 md:px-6 lg:px-10 pb-4 space-y-4 text-lg font-medium">
          <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>          
          <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
