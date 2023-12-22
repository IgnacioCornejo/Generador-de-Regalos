import React, { useState, useEffect } from 'react';

const Button2 = ({ btn2Text, selected, onClick }) => {
  const [hovered, setHovered] = useState(false); // State to track hover

  useEffect(() => {
    // Reset hover state when a new button becomes selected
    if (!selected) {
      setHovered(false);
    }
  }, [selected]);

  const handleMouseEnter = () => {
    if (!selected) {
      setHovered(true); // Set to true on hover only if not selected
    }
  };

  const handleMouseLeave = () => {
    if (!selected) {
      setHovered(false); // Set back to false on leave if not selected
    }
  };

  return (
    <button
      className="rounded-lg flex items-center justify-start mb-2"
      style={{
        width: '320px',
        height: '56px',
        backgroundColor: selected ? '#6750A4' : (hovered ? '#8F7CE9' : '#C8C4C4'),
        color: selected ? 'white' : 'black',
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-6 h-6 mr-4 ml-4" src="/personIcon.svg" alt="Person Icon" />
      {btn2Text}
    </button>
  );
};

export default Button2;
