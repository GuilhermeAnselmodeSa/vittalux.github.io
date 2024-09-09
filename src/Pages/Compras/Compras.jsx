import React, { useState } from 'react';
import './compras.css';
import produtoImg from '../../img/fotoCompra.jpeg'; // Substitua pelo caminho correto da imagem do produto
import comboImg from '../../img/FotoCombo.jpeg'; // Imagem do combo
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Sidemenu from '../../components/sidemenu/sidemenu'

function Compras() {
  //quantidade de item
  const [quantity, setQuantity] = useState(1);

  // Estado para controlar se o combo está ativo
  const [isCombo, setIsCombo] = useState(false);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Ativa/desativa o combo
  const toggleCombo = () => {
    setIsCombo(!isCombo);
  };

  // Perguntas
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Está regularizada na Anvisa?",
      answer: "Sim, conforme o processo número 25351.376860/2024-48"
    },
    {
      question: "Foi testada em animais?",
      answer: "Não. A VittaLux não realiza testes em animais."
    },
    {
      question: "Qual o prazo de validade?",
      answer: "Dois anos, contados da data de fabricação."
    },
    {
      question: "Pode ser usada junto com outras fórmulas?",
      answer: "Sim. Praticamente não há restrições para uso conjunto com outros ativos."
    },
    {
      question: "Pode ser aplicada na área dos olhos?",
      answer: "Sim. Possui benefício secundário de redução de bolsas e linhas finas. Não aproximar muito das pálpebras para evitar contato direto com os olhos."
    },
    {
      question: "Causa acnes ou cravos?",
      answer: "Não. Sua fórmula não oleosa auxilia na hidratação, nutrição e possui ativos antioxidantes indicados para pele acneica."
    },
    {
      question: "Ingredientes ativos",
      answer: "O Dermalift foi projetado para atender todas as necessidades que sua pele possui. Sua fórmula combina o poder rejuvenescedor do ácido hialurônico, com vitaminas antioxidantes como a vitamina E, uréia , D pantenol e Niacinamida."
    }
  ];

  return (
    <>
      {/* cabeçalho */}
      <Header />
      <Sidemenu />
      <div className="container-compras">
        {/* Conteúdo */}
        <div className="content-compras">
          <div className="produto-container-compras">
   
            <img src={isCombo ? comboImg : produtoImg} alt="Produto" className="produto-imagem-compras" />
            
            <div className="produto-info-compras">
              <div className="valores">
                {/* Muda o título do produto se o combo estiver ativo */}
                <h1>{isCombo ? 'Combo Produto' : 'Hidratante Firmador Derma Lift'}</h1>
                {/* Triplica o valor se o combo estiver ativo */}
                <p className="preco-compras">
                  R$ {isCombo ? (69.90 * 3).toFixed(2) : 69.90} no Pix
                </p>
                <p className="preco-parcelado-compras">
                  ou R$ {isCombo ? (69.90 * 3).toFixed(2) : 69.90} em 10x de R$ {(69.90 * (isCombo ? 3 : 1) / 10).toFixed(2)} sem juros
                </p>
                <p className="frete-compras">Frete grátis</p>
                <button className="btnCombo-compras" onClick={toggleCombo}>
                  {isCombo ? 'Unidade' :  'Combo Promocional'}
                </button>
                <div className="quantity-block">
                  <button className="decrement-btn" onClick={decrementQuantity}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button className="increment-btn" onClick={incrementQuantity}>+</button>
                </div>

                <button className="btnComprar-compras">Comprar</button>

                {/* Botão para ativar/desativar o combo */}
              
              </div>

              <div className="quemSomos">
                <p>
                  Derma Lift Essence é um hidratante avançado que utiliza ciência dermatológica para oferecer hidratação intensiva, preenchimento de linhas finas e promover uma pele mais firme e radiante.
                </p>
                <br />
                <p>• Acalma e nutre</p>
                <p>• Regenera e preenche linhas e cicatrizes</p>
                <p>• Promove efeito lifting (sensação instantânea)</p>
                <p>• Fórmula leve e não oleosa</p>
                <p>• Previne e trata linhas de expressão</p>
              </div>
            </div>

            <div className="faq-section">
              <h2>Dúvidas Frequentes</h2>
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question" onClick={() => handleAccordionClick(index)}>
                    {item.question}
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Compras;
