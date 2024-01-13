import React from 'react';

const Button3 = ({ btn3Text, selected, onClick }) => {
  return (
    <button
      className="rounded-lg flex items-center justify-center mb-2"
      style={{
        width: '320px',
        height: '56px',
        backgroundColor: 'white',
        color: selected ? '#6750A4' : '#C8C4C4',
        border: `2px solid ${selected ? '#6750A4' : '#C8C4C4'}`,
      }}
      onClick={onClick}
    >
      {btn3Text}
    </button>
  );
};

export default Button3;
