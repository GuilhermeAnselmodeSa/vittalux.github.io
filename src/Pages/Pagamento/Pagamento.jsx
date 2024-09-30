import React, { useState } from 'react';
import './Pagamento.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Sidemenu from '../../components/sidemenu/sidemenu';
import {pix} from "../../api/service.ts"
import { loadMercadoPago } from "@mercadopago/sdk-js";
import axios from 'axios';
import QRCode from "react-qr-code";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");


function Compras() {

//Cartao
const [cardNumber, setCardNumber] = useState('');
const [cardholderName, setCardholderName] = useState('');
const [expirationDate, setExpirationDate] = useState('');
const [securityCode, setSecurityCode] = useState('');
const [issuer, setIssuer] = useState('');
const [installments, setInstallments] = useState('');
const [identificationType, setIdentificationType] = useState('');
const [cardholderEmail, setCardholderEmail] = useState('');
const [progress, setProgress] = useState(0);
const [qrCode, setQrCode] = useState(''); // Estado para armazenar o QR Code
const [issuerId, setIssuerId] = useState(''); // Estado para armazenar o issuer_id
console.log(qrCode)
const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        cardNumber,
        cardholderName,
        expirationDate,
        securityCode,
        issuer,
        installments,
        identificationType,
        identificationNumber,
        cardholderEmail,
    });
    setProgress(100); // Simula a conclusão do carregamento
};


//Parte do PIX
const [identificationNumber, setIdentificationNumber] = useState('');
const [email, setEmail] = useState('');

const handlePix = async (e) => {
  e.preventDefault();

  const body = {
      transaction_amount: 69.90,
      description: "vittalux",
      paymentMethodId: "pix",
      email: email,
      identificationType: "CPF",
      number: identificationNumber,
  };

  try {
      const response = await axios.post("http://localhost:3000/pix", body);
      console.log("Resposta do servidor:", response.data);

      // Armazenar o QR Code e o issuer_id
      if (response.data.qr_code) {
          setQrCode(response.data.qr_code);
          setIssuerId(response.data.issuer_id);
      } else {
          console.error("QR Code não encontrado na resposta");
      }
  } catch (error) {
      console.error("Erro ao processar pagamento:", error.response?.data || error.message);
  }
};




  const [paymentMethod, setPaymentMethod] = useState('cartao');

  return (
    <>
      <Header />
    <div className="container-pagamento">
      <Sidemenu />
      
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
                <form id="form-checkout" onSubmit={handleSubmit}>
            <div id="form-checkout__cardNumber" className="container">
                <label htmlFor="card-number">Número do Cartão</label>
                <input
                    type="text"
                    id="card-number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                />
            </div>

            <div id="form-checkout__expirationDate" className="container">
                <label htmlFor="card-expiry">Validade</label>
                <input
                    type="text"
                    id="card-expiry"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    placeholder="MM/AA"
                />
            </div>

            <div id="form-checkout__securityCode" className="container">
                <label htmlFor="card-cvc">CVC</label>
                <input
                    type="text"
                    id="card-cvc"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    placeholder="123"
                />
            </div>

            <label htmlFor="form-checkout__cardholderName">Nome no Cartão</label>
            <input
                type="text"
                id="form-checkout__cardholderName"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
            />

            <label htmlFor="form-checkout__issuer">Emitente</label>
            <select
                id="form-checkout__issuer"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
            >
                <option value="">Selecione um emissor</option>
                {/* Adicione opções de emissor aqui */}
            </select>

            <label htmlFor="form-checkout__installments">Parcelas</label>
            <select
                id="form-checkout__installments"
                value={installments}
                onChange={(e) => setInstallments(e.target.value)}
            >
                <option value="">Selecione parcelas</option>
                {/* Adicione opções de parcelas aqui */}
            </select>

            <label htmlFor="form-checkout__identificationType">Tipo de Identificação</label>
            <select
                id="form-checkout__identificationType"
                value={identificationType}
                onChange={(e) => setIdentificationType(e.target.value)}
            >
                <option value="">Selecione um tipo</option>
                {/* Adicione opções de tipo de identificação aqui */}
            </select>

            <label htmlFor="form-checkout__identificationNumber">Número de Identificação</label>
            <input
                type="text"
                id="form-checkout__identificationNumber"
                value={identificationNumber}
                onChange={(e) => setIdentificationNumber(e.target.value)}
            />

            <label htmlFor="form-checkout__cardholderEmail">E-mail do Titular do Cartão</label>
            <input
                type="email"
                id="form-checkout__cardholderEmail"
                value={cardholderEmail}
                onChange={(e) => setCardholderEmail(e.target.value)}
            />

            <button type="submit" id="form-checkout__submit">Pagar</button>
            <progress value={progress} max="100" className="progress-bar">Carregando...</progress>
        </form>
          </div>
        )}

        {paymentMethod === 'pix' && (
          <div className="payment-form">
                      <form onSubmit={handlePix} className="payment-form">
                        <label htmlFor="identificationNumber">Número do CPF</label>
                        <input
                            type="text"
                            id="identificationNumber"
                            value={identificationNumber}
                            onChange={(e) => setIdentificationNumber(e.target.value)}
                            placeholder="Digite seu CPF"
                            required
                        />
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                            required
                        />
                        <button type="submit">PAGAR COM PIX</button>
                    </form>

                    {/* QR Code placeholder */}
                    {qrCode && (
                        <div className="pix-qr-code">
                         
                        
                            {qrCode && (
                          <div style={{ background: 'white', padding: '16px', marginTop: '20px' }}>
                            <QRCode
                              size={256}
                              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                              value={qrCode}
                              viewBox={`0 0 256 256`}
                            />
                          </div>
                        )}                        </div>
                    )}

                    {issuerId && (
                        <div className="issuer-id">
                            <p>Issuer ID: {issuerId}</p>
                        </div>
                    )}

          </div>
        )}

      
      </div>

      <Footer />
    </div>
    </>
  );
}

export default Compras;
