import React, { useState } from 'react';

const Button2 = ({ btn2Text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="rounded-lg flex items-center justify-start mb-2"
        style={{
          width: '320px',
          height: '56px',
          backgroundColor: isSelected ? '#6750A4' : isHovered ? '#6750A4' : '#C8C4C4',
        }}
      >
        <img className="w-6 h-6 mr-4 ml-4" src="/personIcon.svg" alt="Person Icon" />
        {btn2Text}
      </button>
    </>
  );
};

export default Button2;
