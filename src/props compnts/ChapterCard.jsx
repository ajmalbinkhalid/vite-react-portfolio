import React from 'react';

const ChapterCard = ({ logo, company, role, description, duration }) => {
  return (
    <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md w-full flex flex-col sm:flex-row gap-4 hover:text-black transition-all duration-300">
      
      {/* Logo Section */}
      <div className="flex-shrink-0 flex justify-center items-center sm:w-32 sm:h-32 w-full h-32 bg-white rounded-lg overflow-hidden">
        <img src={logo} alt={`${company} logo`} className="object-contain h-full w-full" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold">{company}</h3>
          <p className="text-sm sm:text-base font-medium mt-1">{role}</p>
          <p className="text-sm sm:text-base leading-relaxed mt-3">{description}</p>
        </div>
        <p className="text-sm sm:text-base font-semibold mt-4">{duration}</p>
      </div>
    </div>
  );
};

export default ChapterCard;
