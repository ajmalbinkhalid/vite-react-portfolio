import React from 'react';
import TechnicalSkillsCard from '../props compnts/TechnicalSkillsCard';
import { FiLayout } from 'react-icons/fi'; 
import { FaCode, FaServer, FaDatabase, FaPaintBrush, FaCloudUploadAlt } from 'react-icons/fa';

const TechnicalSkills = () => {
  return (
    <div className="px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-20 w-full min-h-screen mx-auto bg-neutral-950 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">Technical Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <TechnicalSkillsCard
          icon={FiLayout}
          title="Front-End Development"
          description="Building responsive, interactive, and accessible user interfaces."
          skills={['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Bootstrap', 'Redux']}
        />
        <TechnicalSkillsCard
          icon={FaServer}
          title="Back-End Development"
          description="Managing server-side logic, APIs, and application architecture."
          skills={['Node.js', 'Express.js', 'Django', 'REST API']}
        />
        <TechnicalSkillsCard
          icon={FaDatabase}
          title="Database Management"
          description="Designing, querying, and optimizing databases."
          skills={['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']}
        />
        <TechnicalSkillsCard
          icon={FaCode}
          title="Programming Languages"
          description="Writing logic using modern programming languages."
          skills={['JavaScript', 'Python', 'Java', 'C#']}
        />
        <TechnicalSkillsCard
          icon={FaPaintBrush}
          title="UI/UX Design"
          description="Designing user-friendly and aesthetic digital interfaces."
          skills={['Figma', 'Canva', 'Wireframing']}
        />
        <TechnicalSkillsCard
          icon={FaCloudUploadAlt}
          title="Deployment"
          description="Deploying and managing applications on servers or cloud."
          skills={['Vercel', 'Netlify', 'Render', 'GitHub Pages']}
        />
      </div>
    </div>
  );
};

export default TechnicalSkills;
