import React, { useState } from 'react';

const Button4 = ({ btn4Text, iconImg, selected, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!selected) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!selected) {
      setHovered(false);
    }
  };

  return (
    <button
      className="rounded-lg flex items-center  mb-6"
      style={{
        width: '156px',
        height: '48px',
        backgroundColor: selected ? '#6750A4' : (hovered ? '#8F7CE9' : '#C8C4C4'),
        color: selected ? 'white' : 'black',
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-6 h-6 mr-4 ml-2" src={iconImg} alt="Person Icon" />
      {btn4Text}
    </button>
  );
};

export default Button4;
