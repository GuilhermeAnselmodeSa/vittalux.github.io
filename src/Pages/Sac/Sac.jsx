import React from 'react';
import './Sac.css';
import { FaInstagram } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLock, FaTruck, FaUndo, FaHeadset } from 'react-icons/fa';
import Footer from '../../components/footer/footer';
import BtnComprar from '../../components/buttonCompre/btnComprar';
import Header from '../../components/header/header';
import Sidemenu from '../../components/sidemenu/sidemenu';

function Home() {
  return (
    <div className="container">
      <Sidemenu />
      <Header />

      <div className="content-home">
        <BtnComprar /> 
        <h3 id="text-sac">Qualquer dúvida com nossos produtos, basta entrar em contato via SAC:</h3>

        <div className="sac-contact">
          <a href="https://www.instagram.com/vittalux.com.br?igsh=MTJweWR6eTA3N3Q5Zw==" target="_blank" rel="noopener noreferrer">
            <p id='instaSac'> <FaInstagram className="footer-icon" /> Instagram</p>
          </a>
          <a href="mailto:comercial@vittalux.com.br" target="_blank" rel="noopener noreferrer">
            <p id='mailSac'> <MdMailOutline className="footer-icon" /> comercial@vittalux.com.br</p>
          </a>
          <a href="tel:+5515991713753" target="_blank" rel="noopener noreferrer">
            <p><FaPhone className="footer-icon" /> +55 15 99171-3753</p>
          </a>
        </div>

        <div className="sac-info">
          <div className="sac-info-item">
            <FaLock className="sac-icon" />
            <div>
              <h4>COMPRA SEGURA</h4>
              <p>Pagamentos processados diretamente pela Rede, Mercado Pago e PagSeguro</p>
            </div>
          </div>
          <div className="sac-info-item">
            <FaTruck className="sac-icon" />
            <div>
              <h4>ENTREGA EXPRESSA</h4>
              <p>Mais de 90% dos envios por transportadora ou Sedex</p>
            </div>
          </div>
          <div className="sac-info-item">
            <FaUndo className="sac-icon" />
            <div>
              <h4>DEVOLUÇÃO GARANTIDA</h4>
              <p>Simples e rápida, em até 30 dias da data da entrega</p>
            </div>
          </div>
          <div className="sac-info-item">
            <FaHeadset className="sac-icon" />
            <div>
              <h4>ATENDIMENTO PERSONALIZADO</h4>
              <p>Por chat, WhatsApp, e-mail ou redes sociais</p>
            </div>
          </div>
        </div>

        <h5 id="text1">Nosso objetivo é atender nossos clientes de forma rápida e humanizada, garantindo a personalização de seu atendimento</h5>
      </div>

      <div className="footerSac">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
