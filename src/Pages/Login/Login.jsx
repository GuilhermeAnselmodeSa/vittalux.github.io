import React from 'react';
import './login.css';
import logo from '../../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  return (
    <div className="container-login">
      {/* cabeçalho */}
      <div className="header-component-login">
        <img id="logoHome" src={logo} alt="Logo" className="logo-login" />
        
        <button className="btnCadastro-login">Cadastre-se</button>

        <Link to="/login" >
        <button  className="btnLogar-login">Login</button>
        </Link>
      
      </div>
      
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
      <div className="footer-component-login">
        <p>Todos os Direitos Reservados</p>
      </div>
    </div>
  );
}

export default Login;
