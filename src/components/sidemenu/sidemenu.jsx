import React, { useState } from 'react';
import './sidemenu.css';
import { MdLogin } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";

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
      <Link id="linkConta" to="/">
        <li id="linkConta"><FaRegUserCircle />Minha Conta</li>
        </Link>

        <Link id="linkConta" to="/">
        <li id="linkConta"><MdOutlineShoppingCart />Minhas Compras</li>
        </Link>
      <Link id="linkConta" to="/">
        <li id="linkConta"><IoBag />Produtos</li>
        </Link>
       <Link id='linkConta' to="#sobre-nos">
       <li id="linkConta"><MdOutlinePeople />
       Quem somos</li></Link>
        <Link id="linkConta" to="/sac">
           <li id="linkConta"><VscCallOutgoing />
           SAC</li>
        </Link>

      <div className="btnMenu">
      {/* <button className="btnCadastroMenu">Cadastre-se</button>
      <button className="btnLogarMenu"><MdLogin /></button> */}
      </div>
          </ul>

    </div>
  );
};

export default Sidebar;
