import React from 'react'
import './Sac.css';
import produto from '../../img/produto.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Footer from '../../components/footer/footer'

import Header from '../../components/header/header'
import Sidemenu from '../../components/sidemenu/sidemenu'

function Home() {
  return (
    <div className="container">
      <Sidemenu>
      </Sidemenu> 

      {/* cabeçalho */}
    <Header/>

      {/* conteudo */}
      <div className="content-home">

      <h3 id="text-sac">Qualquer dúvida com nossos produtos, basta entrar em contato via SAC:</h3>
      <a href="https://www.instagram.com/vittalux.com.br?igsh=MTJweWR6eTA3N3Q5Zw==" target="_blank" rel="noopener noreferrer">
      <p id='instaSac'> <FaInstagram className="footer-icon" />Instagram</p>
          </a>
          <a target="_blank" rel="noopener noreferrer">
          <p id='mailSac'> <MdMailOutline className="footer-icon" />comercial@vittalux.com.br</p>
          </a>
          <a  target="_blank" rel="noopener noreferrer">
           <p> <FaPhone className="footer-icon" />Telefone:+55 15 99171-3753</p>
          </a>
       
       

        <h5 id="text1">Nosso objetivo é atender nossos clientes de forma rápida e humanizada, garantindo a personalização de seu atendimento</h5>


      </div>

<Footer></Footer>
      </div>
  
  )
}

export default Home;
