import React, { useState, useEffect } from 'react';

const Button3 = ({ btn3Text, selected, onClick }) => {
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
      className="rounded-lg flex items-center justify-center mb-2"
      style={{
        width: '320px',
        height: '56px',
        backgroundColor: selected ? '#6750A4' : (hovered ? '#8F7CE9' : '#C8C4C4'),
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {btn3Text}
    </button>
  );
};

export default Button3;
