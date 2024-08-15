import React from 'react';
import './cadastro.css';
import logo from '../../img/logo.png';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'


function Compras() {
  return (
    <div className="container-cadastro">
      {/* cabeçalho */}
  <Header />
      
      {/* conteúdo */}
      <div className="content-cadastro">
        <div className="form-container-cadastro">
          <h2>Cadastro</h2>
          <form>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" />

            <label htmlFor="rua">Rua:</label>
            <input type="text" id="rua" name="rua" />

            <label htmlFor="numero">Número:</label>
            <input type="text" id="numero" name="numero" />

            <label htmlFor="complemento">Complemento:</label>
            <input type="text" id="complemento" name="complemento" />

            <label htmlFor="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro" />

            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" />

            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </div>
  );
}

export default Compras;
