import React, { useState } from 'react';
import './cadastro.css';
import logo from '../../img/logo.png';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import axios from 'axios';  // Importando Axios

function Compras() {
  // Estados para armazenar os valores dos inputs
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [senha, setSenha] = useState('');

  // Função para tratar o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    const cadastroData = {
      cpf,
      email,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      senha,
      transaction_id: '12345' // Exemplo de transaction_id (ajuste conforme necessário)
    };

    // Fazendo a requisição POST para a rota do backend usando Axios
    axios.post('http://localhost:3000/users/add', cadastroData)
      .then((response) => {
        console.log('Cadastro realizado com sucesso:', response.data);
        alert('Cadastro Realizado com Sucesso, efetue o Login')
        // Aqui você pode fazer algo, como redirecionar para outra página ou exibir uma mensagem de sucesso
      })
      .catch((error) => {
        console.error('Erro ao realizar o cadastro:', error);
        // Aqui você pode tratar o erro, como exibir uma mensagem de erro
      });
  };

  return (
    <div className="container-cadastro">
      {/* cabeçalho */}
      <Header />
      
      {/* conteúdo */}
      <div className="content-cadastro">
        <div className="form-container-cadastro">
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />

            <label htmlFor="rua">Rua:</label>
            <input
              type="text"
              id="rua"
              name="rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />

            <label htmlFor="numero">Número:</label>
            <input
              type="text"
              id="numero"
              name="numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />

            <label htmlFor="complemento">Complemento:</label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />

            <label htmlFor="bairro">Bairro:</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />

            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />

            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              id="estado"
              name="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
            
            <label htmlFor="estado">Senha:</label>
            <input
              type="text"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

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
