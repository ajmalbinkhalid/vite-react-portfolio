import React from 'react';
import AboutMeContent from '../secondary compnts/AboutMeContent';
import ProfileCard from '../react bits compnts/ProfileCard';
import imageMe from '../assets/images/iq2.jpg';
import { FaCode } from 'react-icons/fa';
import Particles from '../react bits compnts/Particles';

const About = () => {
  return (
    <div className="relative px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-20 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 py-16 bg-neutral-950">

      {/* Profile Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <ProfileCard
          name=""
          title=""
          handle="ajmalbinkhalid"
          status="Online"
          contactText="Contact Me"
          avatarUrl={imageMe}
          showUserInfo={true}
          enableTilt={true}
          iconUrl={FaCode}
          onContactClick={() => {
            window.open("https://www.linkedin.com/in/ajmalbinkhalid", "_blank");
          }}
        />
      </div>

      {/* About Me Text Section */}
      <div className="w-full lg:w-1/2 max-w-xl">
        <AboutMeContent />
      </div>

    </div>
  );
};

export default About;
