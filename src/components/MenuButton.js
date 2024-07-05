
import React from 'react';

function MenuButton({ type, onClick }) {
  return (
    <button onClick={() => onClick(type)}>
      {type} Menu
    </button>
  );
}

export default MenuButton;
