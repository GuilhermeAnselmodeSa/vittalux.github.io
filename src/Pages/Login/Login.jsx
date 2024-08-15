import React from 'react';
import './login.css';
import logo from '../../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

function Login() {
  return (
    <div className="container-login">
      {/* cabeçalho */}
    <Header/>
      
      {/* conteúdo */}
      <div className="content-login">
        <div className="form-container-login">
          <h2>Login</h2>
          <form id="formLogin">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />

            <button id="btnLogar-login" type="submit">Entrar</button>
          </form>
        </div>
      </div>

      {/* footer */}
     <Footer/>
    </div>
  );
}

export default Login;
