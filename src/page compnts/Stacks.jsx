import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt,
  FaGithub, FaDatabase, FaBootstrap, FaLinux
} from 'react-icons/fa';
import {
  SiTailwindcss, SiRedux, SiMongodb, SiMysql, SiNginx, SiC
} from 'react-icons/si';
import StacksCard from '../props compnts/StacksCard';

const Stacks = () => {
  return (
    <div className="px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-20 w-full py-10 bg-black text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Tech Stacks</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <StacksCard icon={<FaCss3Alt />} name="CSS" color="#1572B6" />
        <StacksCard icon={<FaHtml5 />} name="HTML" color="#E34F26" />
        <StacksCard icon={<FaJs />} name="JavaScript" color="#F7DF1E" />
        <StacksCard icon={<FaReact />} name="ReactJS" color="#61DAFB" />
        <StacksCard icon={<FaBootstrap />} name="Bootstrap" color="#7952B3" />
        <StacksCard icon={<SiTailwindcss />} name="Tailwind CSS" color="#38BDF8" />
        <StacksCard icon={<FaPython />} name="Python" color="#3776AB" />
        <StacksCard icon={<FaGitAlt />} name="Git" color="#F05032" />
        <StacksCard icon={<FaGithub />} name="GitHub" color="white" />
        <StacksCard icon={<SiRedux />} name="Redux" color="#764ABC" />
        <StacksCard icon={<SiMongodb />} name="MongoDB" color="#47A248" />
        <StacksCard icon={<SiMysql />} name="MySQL" color="#4479A1" />
      </div>
    </div>
  );
};

export default Stacks;
