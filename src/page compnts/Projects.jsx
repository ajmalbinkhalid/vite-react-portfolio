import React from 'react';
import ProjectCard from '../props compnts/ProjectCard';
import codeQuizVideo from '../assets/videos/codeQuizVideo.mp4';
// import codeQuizImg from '../assets/images/codeQuizImg.png';
import gentlemenImg from '../assets/images/gentlemenimg.png';
import goNowImg from '../assets/images/gonowimg.png';

const Projects = () => {
  return (
    <div className="px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-20 w-full min-h-screen mt-10 bg-black">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">Projects</h2>

      <div className="flex flex-col sm:flex-col md:flex-row md:flex-wrap justify-center items-center gap-10">
        <ProjectCard
          imageSrc={gentlemenImg}
          isVideo={false}
          title="Shopping Website"
          description="A simple task management app built with React, allowing users to add, delete, and track tasks efficiently."
          technologies={['HTML', 'CSS', 'JavaScript']}
          githubLink="https://github.com/ajmalbinkhalid/Gentlemen"
        />

        <ProjectCard
          imageSrc={codeQuizVideo}
          isVideo={true}
          title="Online Quiz Application"
          description="A weather application using API integration to show real-time data. Built with React and OpenWeatherMap."
          technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap']}
          githubLink="https://github.com/ajmalbinkhalid/Code-Quiz-Website"
        />

        <ProjectCard
          imageSrc={goNowImg}
          isVideo={false}
          title="Travelling Company App"
          description="A simple task management app built with React, allowing users to add, delete, and track tasks efficiently."
          technologies={['HTML', 'CSS', 'JavaScript']}
          githubLink="https://github.com/ajmalbinkhalid/gonow-travel-website"
        />
      </div>
    </div>
  );
};

export default Projects;
