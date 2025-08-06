import React from "react";
import HomeContent from "../secondary compnts/HomeContent";
import Orb from "../react bits compnts/Orb";
import homeImage from "../assets/images/whitephoto.jpg";
import Particles from "../react bits compnts/Particles";

const Home = () => {
  return (
    <div className="px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-15 relative w-full min-h-screen bg-black overflow-hidden">

      {/* Particle Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10  min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-evenly lg:gap-0">

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2">
          <HomeContent />
        </div>

        {/* Image + Orb Section */}
        <div data-aos="fade-up-left" className="mt-10 relative w-full lg:w-1/2 h-96 sm:h-[28rem] md:h-[34rem] lg:h-[38rem] 2xl:h-[38rem] flex items-center justify-center">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          <img
            src={homeImage}
            alt="Profile"
            className="absolute w-60 sm:w-64 md:w-95 lg:w-95 xl:w-110 2xl:w-110 rounded-full object-cover border-white shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
