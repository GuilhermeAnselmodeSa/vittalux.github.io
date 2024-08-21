import React from 'react'
import './header.css'
import { MdLogin } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import logo from '../../img/logo.png'
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header-component-home"> 
    {/* header->mudar para o verde esmeralda */}
    <img src={logo} alt="Logo" className="logo" />
    <div className="btns">
      
    </div>
    <button className="btnCadastro"><FaRegUserCircle /></button>
    <button className="btnLogar"><MdLogin /></button>
  </div>
  )
}

export default Header
