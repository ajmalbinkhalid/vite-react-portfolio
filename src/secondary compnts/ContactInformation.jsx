import React from 'react';
import { FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaGithub, FaUser } from 'react-icons/fa6';
import ButtonWithProps from '../props compnts/ButtonWithProps';

const ContactInformation = () => {
  return (
    <div data-aos="zoom-in-up" className="w-full max-w-[500px] px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-20 py-8 bg-black border border-[#27272a] text-white rounded-xl shadow-lg space-y-4">

      <h3 className="text-center font-bold text-2xl mb-5">Contact Information</h3>

      {/* Name */}
      <div className="flex items-start gap-4">
        <FaUser className="text-2xl text-gray-400 mt-1" />
        <div>
          <p className="text-sm font-semibold">Name</p>
          <p className="text-gray-300">Ajmal Bin Khalid</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4">
        <FiMapPin className="text-2xl text-gray-400 mt-1" />
        <div>
          <p className="text-sm font-semibold">Location</p>
          <p className="text-gray-300">Kozhikode, India</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <FiPhone className="text-2xl text-gray-400 mt-1" />
        <div>
          <p className="text-sm font-semibold">Phone</p>
          <p className="text-gray-300">+91 8921961921</p>
        </div>
      </div>    

      {/* Email */}

      <div className="pt-3">
        <ButtonWithProps
          className="bg-pink-900 w-full h-12 inline-flex justify-center items-center text-white font-medium rounded-md transition-all duration-300 hover:scale-x-105 hover:scale-y-105"
          text="Email"
          icon={FiMail}
          href="mailto:ajmalbinkhalid2112@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Ajmal,%0A%0A"

        />
      </div>

      {/* Download Button */}

      <div className="pt-3">
        <ButtonWithProps
          className="bg-gray-800 w-full h-12 inline-flex justify-center items-center text-white font-medium rounded-md transition-all duration-300 hover:scale-x-105 hover:scale-y-105"
          text="GitHub"
          icon={FaGithub}
          href="https://github.com/ajmalbinkhalid"
        />
      </div>

      {/* LinkedIn */}

      <div className="pt-3">
        <ButtonWithProps
          className="bg-blue-900 w-full h-12 inline-flex justify-center items-center text-white font-medium rounded-md transition-all duration-300 hover:scale-x-105 hover:scale-y-105"
          text="Linkedin"
          icon={FiLinkedin}
          href='https://www.linkedin.com/in/ajmalbinkhalid'
        />
      </div>

    </div>
  );
};

export default ContactInformation;
