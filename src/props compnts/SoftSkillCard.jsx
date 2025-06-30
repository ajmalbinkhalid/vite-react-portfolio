import React from 'react';

const SoftSkillCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`bg-neutral-900 rounded-xl text-center flex flex-col 
    w-60 h-60 items-center justify-center p-4 ${className}`}>
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default SoftSkillCard;
