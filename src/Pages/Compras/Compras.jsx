import React from 'react';
import './compras.css';
import produtoImg from '../../img/produto.png'; // Substitua pelo caminho correto da imagem do produto
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
function Compras() {
  return (
    <>
 
      {/* cabeçalho */}
    <Header/>

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
