import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ViewMoreGithub = () => {
  return (
    <div className="mt-12 flex justify-center">
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="btnGradient inline-flex items-center gap-3 text-white px-6 py-3 text-lg font-semibold"
      >
        <FaGithub size={24} />
        View more on GitHub
      </a>
    </div>
  );
};

export default ViewMoreGithub;
