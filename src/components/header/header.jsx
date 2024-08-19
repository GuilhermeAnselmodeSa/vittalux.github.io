import React from 'react'
import './header.css'
import { MdLogin } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import logo from '../../img/logo.png'

function Header() {
  return (
    <div className="header-component-home"> 
    {/* header->mudar para o verde esmeralda */}
    <img id="logoHome" src={logo} alt="Logo" className="logo" />
    <button className="btnCadastro">Cadastre-se</button>
    <button className="btnLogar"><MdLogin /></button>
  </div>
  )
}

export default Header
