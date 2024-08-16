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

              <div className="quemSomos">
                <p>Derma Lift Essence redefine os padrões de excelência em cuidados com a pele, incorporando os avanços mais recentes da ciência dermatológica em uma fórmula luxuosa e eficaz. Este hidratante de ultima geração é enriquecido com uma matriz exclusiva de ingredientes ativos e tecnológicos, além de antioxidantes de ponta. Ao nutrir a pele com uma hidratação intensiva e estimular a produção de colágeno e elastina, Derma Lift Essence oferece resultados visíveis: uma pele mais firme, radiante e rejuvenescida. Sinta o poder da inovação com Derma Lift Essence, mais do que apenas um produto; é a excelência em cuidados com a pele, que prioriza a saúde e o bem-estar, resultando em uma beleza radiante que transcende as expectativas.</p>
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
