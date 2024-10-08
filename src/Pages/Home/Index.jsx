import React from 'react';
import './index.css';
import produto from '../../img/imgValor.jpeg';
import btnCom from '../../img/btn-removebg-preview.png';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Sidemenu from '../../components/sidemenu/sidemenu';
import Footer from '../../components/footer/footer';
import BtnComprar from '../../components/buttonCompre/btnComprar';
import Banner from '../../components/banner/banner';
import Carrossel from '../../components/carrossel/carrossel';
function Home() {
  return (
    <div className="container">
      <Banner/> 
      <Sidemenu />
      <Header />
      <div className="content-home">
        {/* <h3 id="text1">Transforme sua pele com novo hidratante da VittaLux</h3> */}
        <div className="blocoProduto">
          <img alt="produto" src={produto} className="produto" />
        </div>
        
        <BtnComprar /> {/* Agora o botão será renderizado corretamente */}

        {/* <h3 id="text1">Rejuvenescimento visível e firmeza imediata em cada aplicação!</h3> */}

        <Link to="/compras">
        <img alt="produto" src={btnCom} className="btnProd" />

          {/* <button className="btnVenda">QUERO COMPRAR</button> */}
        </Link>
        <Carrossel /> 
        <div className="receba-novidades">
          <div className="active-text">

          <h1>Receba Novidades e Ofertas Exclusivas!</h1>
          </div>
          <div className="email-input-container">
            <label htmlFor="email" className="email-label"></label>
            <div className="input-wrapper">
              <input type="email" id="email" placeholder="Seu nome aqui" className="email-input" />
              <input type="email" id="email" placeholder="Seu E-mail" className="email-input" />
              <button className="email-submit-button">Receba as Novidades!</button>
              <br/>

            </div>
          </div>
        </div>

        <div className="titulo-sobre">
          <h3>Sobre Nós</h3>
        </div>
        <div className="sobre-nos" id="sobre-nos">
          <p>
            Na VittaLux, somos apaixonados por revelar a beleza que reside em cada pessoa através de cuidados dermocosméticos de excelência.
          </p>
          <p>
            Nossa missão é proporcionar soluções inovadoras e eficazes, unindo ciência e natureza para transformar o cuidado com a pele em uma experiência única e revitalizante.
          </p>
          <p>
            Cada produto da VittaLux é desenvolvido com composições de alta qualidade, combinando tecnologia de ponta e conhecimento dermatológico para atender às necessidades específicas de cada tipo de pele.
          </p>
          <p>
            Acreditamos que a verdadeira beleza vem do cuidado. Por isso, estamos dedicados a criar produtos que não apenas realçam a sua aparência, mas também cuidam da sua pele de forma profunda e gentil.
          </p>
          <h4>VittaLux, onde a Beleza encontra cuidado.</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
