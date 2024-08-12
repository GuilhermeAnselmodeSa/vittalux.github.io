import React from 'react';
import './compras.css';
import produtoImg from '../../img/produto.png'; // Substitua pelo caminho correto da imagem do produto
import logo from '../../img/logo.png'

function Compras() {
  return (
    <>
      <div className="header-component-compras">
        <img id="logoHome" src={logo} alt="Logo" className="logo-compras" />
        <button className="btnCadastro-compras">Cadastre-se</button>
        <button className="btnLogar-compras">Login</button>
      </div>

    <div className="container-compras">
      {/* cabeçalho */}
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
      <div className="footer-component-compras">
        <p>Todos os Direitos Reservados</p>
      </div>
    </div>
    </>
  );
}

export default Compras;
