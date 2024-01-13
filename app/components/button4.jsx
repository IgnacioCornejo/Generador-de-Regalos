import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Button4 = ({ btn4Text, icon, selected, onClick }) => {
  return (
    <button
      className="rounded-lg flex items-center mb-6"
      style={{
        width: '156px',
        height: '48px',
        backgroundColor: 'white',
        color: selected ? '#6750A4' : '#C8C4C4',
        border: `2px solid ${selected ? '#6750A4' : '#C8C4C4'}`,
      }}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-6 ml-2" />}
      {btn4Text}
    </button>
  );
};

export default Button4;
