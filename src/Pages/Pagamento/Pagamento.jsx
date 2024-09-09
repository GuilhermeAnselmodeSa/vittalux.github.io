import React, { useState } from 'react';
import './Pagamento.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Sidemenu from '../../components/sidemenu/sidemenu';
import Produto from '../../img/fotoCompra.jpeg'; // Product image import

function Compras() {
  const [paymentMethod, setPaymentMethod] = useState('cartao');

  return (
    <>
      <Header />
      <div className="container-pagamento">
        <Sidemenu />
        
        <div className="produto-container">
          <img src={Produto} alt="Produto" className="produto-image" />
        </div>

        <div className="pagamento-content">
          <h1>Escolha a Forma de Pagamento</h1>
          
          <div className="payment-options">
            <button 
              className={`payment-button ${paymentMethod === 'cartao' ? 'active' : ''}`} 
              onClick={() => setPaymentMethod('cartao')}
            >
              Cartão de Crédito
            </button>
            <button 
              className={`payment-button ${paymentMethod === 'pix' ? 'active' : ''}`} 
              onClick={() => setPaymentMethod('pix')}
            >
              PIX
            </button>
            <button 
              className={`payment-button ${paymentMethod === 'boleto' ? 'active' : ''}`} 
              onClick={() => setPaymentMethod('boleto')}
            >
              Boleto
            </button>
          </div>

          {paymentMethod === 'cartao' && (
            <div className="payment-form">
              <label htmlFor="card-number">Número do Cartão</label>
              <input type="text" id="card-number" placeholder="1234 5678 9012 3456" />

              <label htmlFor="card-name">Nome no Cartão</label>
              <input type="text" id="card-name" placeholder="Seu nome" />

              <label htmlFor="card-expiry">Validade</label>
              <input type="text" id="card-expiry" placeholder="MM/AA" />

              <label htmlFor="card-cvc">CVC</label>
              <input type="text" id="card-cvc" placeholder="123" />
            </div>
          )}

          {paymentMethod === 'pix' && (
            <div className="payment-form">
              <p>Use o QR Code abaixo para pagar com PIX:</p>
              <div className="pix-qr-code">[QR Code]</div>
            </div>
          )}

          {paymentMethod === 'boleto' && (
            <div className="payment-form">
              <p>O boleto será gerado após a confirmação do pedido.</p>
              <button className="generate-boleto-button">Gerar Boleto</button>
            </div>
          )}
        </div>

      </div>
        <Footer />
    </>
  );
}

export default Compras;
