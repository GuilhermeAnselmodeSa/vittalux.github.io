import React, { useState, useEffect } from 'react';
import './sidemenu.css';
import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiHandSoap } from "react-icons/pi";
import { MdOutlinePeople } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaList, FaArrowLeft } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate(); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('token'); // Certifique-se de que a chave seja 'token'

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica o payload do JWT
        const email = payload.email; // Acessa o e-mail do payload

        if (email) {
          setUserEmail(email); // Salva o e-mail no estado
        }
      } catch (error) {
        console.error("Erro ao decodificar o token JWT", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remover o token corretamente
    setUserEmail(null); // Limpa o estado do e-mail
    navigate('/'); // Redireciona para a página inicial ou de login
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FaArrowLeft /> : <FaList />}
      </div>
      <ul>
        {/* Rota dinâmica para "Minha Conta" com base no token */}
        <Link id="linkConta" to={userEmail ? '/dados' : '/login'}>
          <li id="linkConta">
            <FaRegUserCircle />
            {userEmail ? userEmail : 'Minha Conta'}
          </li>
        </Link>

        <Link id="linkConta" to="/">
          <li id="linkConta"><MdOutlineShoppingCart />Minhas Compras</li>
        </Link>

        <Link id="linkConta" to="/">
          <li id="linkConta"><PiHandSoap />Produtos</li>
        </Link>

        <a href="#sobre-nos" id="linkConta">
          <li id="linkConta"><MdOutlinePeople />Quem somos</li>
        </a>

        <Link id="linkConta" to="/sac">
          <li id="linkConta"><VscCallOutgoing />SAC</li>
        </Link>

        <li id="linkConta" onClick={handleLogout}>
          <CiLogout />
        </li>
      </ul>

      <div className="btnMenu">
        {/* <button className="btnCadastroMenu">Cadastre-se</button>
        <button className="btnLogarMenu"><MdLogin /></button> */}
      </div>
    </div>
  );
};

export default Sidebar;
