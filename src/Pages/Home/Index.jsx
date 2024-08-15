import React from 'react'
import './index.css';
import logo from '../../img/logo.png'
import produto from '../../img/produto.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";


function Home() {
  return (
    <div className="container">
      {/* cabeçalho */}
      <div className="header-component-home"> 
        {/* header->mudar para o verde esmeralda */}
        <img id="logoHome" src={logo} alt="Logo" className="logo" />
        <button className="btnCadastro">Cadastre-se</button>
        <button className="btnLogar">Login</button>
      </div>

      {/* conteudo */}
      <div className="content-home">
        <div className="blocoProduto">
          <img alt="produto" src={produto} className="produto" />

        </div>

        {/* Texto descritivo como legenda */}
        <div className="quemSomos">
        <p>Derma Lift Essence redefine os padrões de excelência em cuidados com a pele, incorporando os avanços mais recentes da ciência dermatológica em uma fórmula luxuosa e eficaz. Este hidratante de ultima geração é enriquecido com uma matriz exclusiva de ingredientes ativos e tecnológicos, além de antioxidantes de ponta. Ao nutrir a pele com uma hidratação intensiva e estimular a produção de colágeno e elastina, Derma Lift Essence oferece resultados visíveis: uma pele mais firme, radiante e rejuvenescida. Sinta o poder da inovação com Derma Lift Essence, mais do que apenas um produto; é a excelência em cuidados com a pele, que prioriza a saúde e o bem-estar, resultando em uma beleza radiante que transcende as expectativas.</p>
        </div>

    
          <Link  to='/compras'>
            <button className="btnVenda">QUERO COMPRAR</button>
          </Link>

      </div>

      {/* footer */}
      <div className="footer-component-home">
        <div className="footer-icons">
          <a href="https://www.instagram.com/vittalux.com.br?igsh=MTJweWR6eTA3N3Q5Zw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <div className="sac-info">
          <IoCallSharp />
          <p>+55 15 99171-3753</p>
          </div>
        </div>
        <p>Todos os Direitos Reservados</p>
      </div>
    </div>
  )
}

export default Home;
