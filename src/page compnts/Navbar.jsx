import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GradientText from '../react bits compnts/GradientText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="px-5 sm:px-4 md:px-6 lg:px-10 2xl:px-15 fixed top-0 w-full bg-black/30 backdrop-blur-lg text-white z-50">
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
        <ul className="hidden sm:flex gap-6 lg:gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="sm:hidden w-full max-w-screen px-4 pb-4 space-y-4 text-lg font-medium bg-black">
          <li><a href="#home" onClick={closeMenu} className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">About</a></li>
          <li><a href="#projects" onClick={closeMenu} className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Projects</a></li>
          <li><a href="#skills" onClick={closeMenu} className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Skills</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-blue-400 transition-all duration-800 hover:scale-x-105 hover:scale-y-105">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
