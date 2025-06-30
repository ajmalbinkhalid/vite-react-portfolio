// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-6 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Text */}
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} ABK Portfolio. All rights reserved.</p>

        {/* Right - Icons */}
        <div className="flex gap-6 text-lg">
          <a
            href="mailto:ajmalbinkhalid2112@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Ajmal,%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/ajmalbinkhalid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
