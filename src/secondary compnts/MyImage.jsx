import React from 'react';
import './MyImage.css';
import myPhoto from '../assets/images/codeQuizImg.png'; // Replace with your image path

const MyImage = () => {
  return (
    <div className="orb-wrapper">
      <div className="orb-glow">
        <img src={myPhoto} alt="Ajmal Bin Khalid" className="orb-image" />
      </div>
    </div>
  );
};

export default MyImage;
