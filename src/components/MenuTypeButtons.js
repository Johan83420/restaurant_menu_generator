import React, { forwardRef } from 'react';
import '../styles/MenuTypeButtons.css';
import lunchIcon from '../Assets/icons/lunch-icon.png';
import buffetIcon from '../Assets/icons/buffet-icon.png';
import banquetIcon from '../Assets/icons/banquet-icon.png';

const MenuTypeButtons = forwardRef(({ onSelectType, selectedButton, inputRef }, ref) => {
  const buttons = [
    { type: 'Lunch', icon: lunchIcon },
    { type: 'Buffet', icon: buffetIcon },
    { type: 'Banquet', icon: banquetIcon },
  ];

  return (
    <div ref={ref} className="menu-type-buttons">
      {buttons.map((button, index) => (
        <button
          key={button.type}
          className={`menu-type-button ${selectedButton === button.type ? 'selected' : ''}`}
          onClick={() => onSelectType(button.type)}
        >
          <img src={button.icon} alt={`${button.type} icon`} />
          <span>{button.type}</span>
        </button>
      ))}
    </div>
  );
});

export default MenuTypeButtons;
