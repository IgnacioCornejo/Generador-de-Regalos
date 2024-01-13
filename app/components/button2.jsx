import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Button2 = ({ btn2Text, selected, onClick }) => {
  return (
    <button
      className="rounded-lg flex items-center justify-start mb-2"
      style={{
        width: '320px',
        height: '56px',
        backgroundColor: 'white',
        color: selected ? '#6750A4' : '#C8C4C4',
        border: `2px solid ${selected ? '#6750A4' : '#C8C4C4'}`,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-4 ml-4" />
      {btn2Text}
    </button>
  );
};

export default Button2;
