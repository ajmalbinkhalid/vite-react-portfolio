// src/components/AboutMeContent.jsx
import React from 'react';
import GradientText from '../react bits compnts/GradientText';

const AboutMeContent = () => {
  return (
    <div data-aos="fade-left" className="max-w-xl text-white space-y-4">
      <h2 className="text-4xl font-bold textColor text-center">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-4xl"
        >
          About Me
        </GradientText>

      </h2>
      <p className="leading-relaxed">
        I'm Ajmal, a full-stack developer specializing in building exceptional digital experiences. With a strong foundation in the MERN stack
        (MongoDB, Express.js, React, and Node.js), I create dynamic and user-friendly web applications that solve real-world problems.      </p>
      <p className="">
        My journey in web development began with a curiosity about how things work on the internet.
        That curiosity evolved into a passion for crafting clean, efficient, and scalable code.
        I believe in writing code that is not only functional but also maintainable and readable.
      </p>
      <p>When I'm not coding, you can find me exploring emerging technologies, brainstorming new project ideas,
        or refining my skills through tech articles, tutorials, and hands-on experiments.
      </p>

    </div>
  );
};

export default AboutMeContent;
