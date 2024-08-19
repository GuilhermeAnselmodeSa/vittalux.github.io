import React from 'react';
import './compras.css';
import produtoImg from '../../img/produto.png'; // Substitua pelo caminho correto da imagem do produto
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Sidemenu from '../../components/sidemenu/sidemenu'

function Compras() {
  return (
    <>
      {/* cabeçalho */}
      <Header/>
      <Sidemenu>
      </Sidemenu>
      <div className="container-compras">
        {/* Conteúdo */}
        <div className="content-compras">
          <div className="produto-container-compras">
            <img src={produtoImg} alt="Produto" className="produto-imagem-compras" />
            <div className="produto-info-compras">
              <h1>PRODUTO HIDRATANTE</h1>
              <p className="preco-compras">R$ 120,15 no Pix</p>
              <p className="preco-parcelado-compras">ou R$ 130,00 em 10x de R$ 13,00 sem juros</p>
              <p className="frete-compras">Frete grátis</p>
              
              <button className="btnComprar-compras">Comprar</button>

              <div className="quemSomos">
                <p>Derma Lift Essence é um hidratante avançado que utiliza ciência dermatológica para oferecer hidratação intensiva, preenchimento de linhas finas e promover uma pele mais firme e radiante.
                </p>
                <br/>
               <p>• Acalma e nutre</p>
               <p>• Regenera e preenche linhas e cicatrizes </p>
               <p>• Promove efeito lifting ( sensação instantâneo) </p>
               <p>• Fórmula leve e não oleosa </p>
               <p>• Previne e trata linhas de expressão</p>  
            
               
              
               
              </div>
              
              {/* <div className="descricao-compras">
                <h2 id="txst">-Melhora sua pele</h2>
                <h2 id="txst">-Pele mais seca</h2>
                <h2 id="txst">-Pele hidratada</h2>
              </div> */}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
}

export default Compras;
