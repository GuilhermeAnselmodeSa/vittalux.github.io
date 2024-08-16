import React from 'react'
import './index.css';
import produto from '../../img/produto.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";
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

      <h3 id="text1">Nossa fórmula exclusiva combina os melhores ingredientes naturais com a mais alta tecnologia para resultados visíveis e duradouros</h3>
        <div className="blocoProduto">
          <img alt="produto" src={produto} className="produto" />
        </div>

       

        <h3 id="text1">Não perca a chance de transformar sua pele. Compre agora e sinta a diferença</h3>

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
