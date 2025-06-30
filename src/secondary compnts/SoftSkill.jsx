// src/components/SoftSkill.jsx
import React from 'react';
import SoftSkillCard from '../props compnts/SoftSkillCard';
import { FaUsers, FaLightbulb, FaHandshake, FaComments } from 'react-icons/fa';

const SoftSkill = () => {
  return (
    <div className="px-20 min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-10">Soft Skills</h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-10">
        <SoftSkillCard
          icon={<FaUsers size={28} />}
          title="Teamwork"
          description="Able to work effectively within diverse groups and contribute to team success."
        />

        <SoftSkillCard
          icon={<FaLightbulb size={28} />}
          title="Problem Solving"
          description="Approach challenges with critical thinking and deliver efficient solutions."
        />

        <SoftSkillCard
          icon={<FaHandshake size={28} />}
          title="Adaptability"
          description="Quick to learn and adjust to dynamic environments and new technologies."
        />

        <SoftSkillCard
          icon={<FaComments size={28} />}
          title="Communication"
          description="Clear and confident communication in both verbal and written formats."
        />
      </div>
    </div>
  );
};

export default SoftSkill;
