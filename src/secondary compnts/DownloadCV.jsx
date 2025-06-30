// src/components/DownloadCV.jsx
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const DownloadCV = () => {
  return (
    <button
      href="/Ajmal_Bin_Khalid_CV.pdf" // Replace with actual file path
      download
      className="inline-flex items-center gap-2 text-white font-semibold rounded-lg hover:bg-gray-100 transition"
    >
      <FiDownload className="text-xl" />
      Download CV
    </button>
  );
};

export default DownloadCV;
