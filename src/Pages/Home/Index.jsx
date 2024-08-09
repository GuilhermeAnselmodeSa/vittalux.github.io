import React from 'react'
import './index.css';
import logo from '../../img/logo.png'
import produto from '../../img/produto.png'

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

          <div className="quemSomos">
            <p>Derma Lift Essence redefine os padrões de excelência em cuidados com a pele, incorporando os avanços mais recentes da ciência dermatológica em uma fórmula luxuosa e eficaz. Este hidratante de ultima geração é enriquecido com uma matriz exclusiva de ingredientes ativos e tecnológicos, além de antioxidantes de ponta. Ao nutrir a pele com uma hidratação intensiva e estimular a produção de colágeno e elastina, Derma Lift Essence oferece resultados visíveis: uma pele mais firme, radiante e rejuvenescida. Sinta o poder da inovação com Derma Lift Essence, mais do que apenas um produto; é a excelência em cuidados com a pele, que prioriza a saúde e o bem-estar, resultando em uma beleza radiante que transcende as expectativas.</p>
          </div>

          <div className="blocoProduto">
            <img  alt="produto" src={produto} className="produto" />
          </div>
          <div className="triggersVendas">
              <button className='btnVenda'>QUERO COMPRAR</button>
       </div>    
      </div>
      {/* triggers vendas */}
      

       {/* footer */}
       {/* alterar cor do footer para dourado  como icone de email, contato, e o SAC*/}
       <div className="footer-component-home">
        <p> Todos os Direitos Reservados</p>
       </div>
  </div>

  
  )
}

export default Home