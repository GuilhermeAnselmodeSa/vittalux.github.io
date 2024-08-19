import React, { useState } from 'react';
import './sidemenu.css';
import { MdLogin } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
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
      <div className="btnMenu">
      <button className="btnCadastroMenu">Cadastre-se</button>
      <button className="btnLogarMenu"><MdLogin /></button>
      </div>

    </div>
  );
};

export default Sidebar;
