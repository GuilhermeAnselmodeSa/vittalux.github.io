import React, { useState } from 'react';
import './sidemenu.css';
import { MdLogin } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { Link } from 'react-router-dom';

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
      <Link id="linkMenu" to="/">
        <li>O produto</li>
        </Link>
        <li>Quem somos?</li>
        <Link id="linkMenu" to="/sac">
           <li>SAC</li>
        </Link>

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
