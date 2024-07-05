import React, { forwardRef } from 'react';

const MenuDisplay = forwardRef(({ menu }, ref) => {
  return (
    <div ref={ref} className="menu-display">
      {menu}
    </div>
  );
});

export default MenuDisplay;
