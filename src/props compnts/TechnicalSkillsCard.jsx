import React from 'react';
import PixelCard from '../react bits compnts/PixelCard';

const TechnicalSkillsCard = ({ icon: Icon, title, description, skills }) => {
  return (
    <div data-aos="fade-up">
    <PixelCard variant="blue" >
      <div className='absolute px-10 flex flex-col gap-5 transition-all duration-300 hover:scale-x-105 hover:scale-y-105'>
        <div className='flex gap-5'>
          {/* Icon */}
          <div className=" text-4xl flex justify-center items-center text-blue-700">
            <Icon />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-center">{title}</h3>
        </div>
        {/* Description */}
        <p className="text-sm text-neutral-300">{description}</p>

        {/* Skill List */}
        <ul className="flex flex-wrap gap-4 mt-2 list-disc list-inside ">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-white marker:text-blue-700 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </PixelCard>
    </div>

  );
};

export default TechnicalSkillsCard;
