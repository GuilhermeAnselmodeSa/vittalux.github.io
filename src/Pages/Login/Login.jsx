import React, { useState } from 'react'; 
import './login.css';
import logo from '../../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {jwtDecode} from 'jwt-decode'; // Para decodificar o token JWT

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login/login', {
        email,
        senha,
      });

      // Supondo que o token esteja em response.data.token
      const token = response.data.token;
      console.log('Login bem-sucedido!', token);

      // Armazenar o token no localStorage
      localStorage.setItem('token', token);

      // Decodificar o token para obter o id do usuário
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id; // Obtendo o ID do usuário

      console.log('ID do usuário:', userId);

      // Redirecionar para a página desejada após o login
      navigate('/'); // Altere para a rota desejada

    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('Erro ao tentar fazer login.');
      }
      console.error(err);
    }
  };

  return (
    <div className="container-login">
      {/* Cabeçalho */}
      <Header/>

      {/* Conteúdo */}
      <div className="content-login">
        <div className="form-container-login">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form id="formLogin" onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />

            <label htmlFor="password">Senha:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required 
            />

            <button id="btnLogar-login" type="submit">Entrar</button>
            <Link to='/cadastro'>
            
            <button id="btnLogar-login">Cadastrar-se</button>
            </Link>

          </form>
        </div>
      </div>

      {/* Rodapé */}
      <Footer/>
    </div>
  );
}

export default Login;
