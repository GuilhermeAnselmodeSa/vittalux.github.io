import React, { useState } from 'react';
import './sidemenu.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '⮜' : '⮞'}
      </div>
      <ul>
        <li>O produto</li>
        <li>Quem somos?</li>
        <li>...</li>
        <li>...</li>
      </ul>
    </div>
  );
};

export default Sidebar;
