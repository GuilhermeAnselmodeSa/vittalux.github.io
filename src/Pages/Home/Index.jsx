import React from 'react'
import './index.css';
import produto from '../../img/produto.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";
import Header from '../../components/header/header'
import Sidemenu from '../../components/sidemenu/sidemenu'
import Footer from '../../components/footer/footer'


function Home() {
  return (
    <div className="container">
      <Sidemenu>
      </Sidemenu> 

      {/* cabeçalho */}
    <Header/>

      {/* conteudo */}
      <div className="content-home">

      <h3 id="text1">Transforme sua pele com novo hidratante da VittaLux</h3>
        <div className="blocoProduto">
          <img alt="produto" src={produto} className="produto" />
        </div>

       

        <h3 id="text1"> Rejuvenescimento visível e firmeza imediata em cada aplicação!</h3>

          <Link  to='/compras'>
            <button className="btnVenda">QUERO COMPRAR</button>
          </Link>

   
      </div>
      <Footer>
        
        </Footer>
      </div>
      

   

   
  )
}

export default Home;
