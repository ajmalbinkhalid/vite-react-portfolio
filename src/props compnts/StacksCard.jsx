// src/components/MyStacksCard.jsx
import React from 'react';
import SpotlightCard from '../react bits compnts/SpotlightCard';

const StacksCard = ({ icon, name, color = '', className = '' }) => {
  return (
    <div data-aos="flip-up" className='hover:transition-transform duration-300 hover:rotate-2'>
    <SpotlightCard
    spotlightColor="#61DAFB"
    >
    <div className={`bg-neutral-900  text-white rounded-xl
       p-0 flex flex-col items-center justify-center shadow-md cursor-pointer ${className}`}>

      <div className="text-4xl mb-2 " style={{ color }}>{icon}</div>
      <h4 className="text-sm font-semibold">{name}</h4>
    </div>
    </SpotlightCard>
    </div>

  );
};

export default StacksCard;
