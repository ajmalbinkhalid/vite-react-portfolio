import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Icons = () => {
    return (
        <div className='text-white'>
            {/* Right - Icons */}
            <div className="flex gap-6 text-lg">
                <a
                    href="mailto:your.email@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition duration-300"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
                <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition duration-300"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition duration-300"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Icons