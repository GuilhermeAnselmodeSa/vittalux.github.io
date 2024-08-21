import React from 'react'
import './btnComprar.css'; // Arquivo CSS para o estilo do botão
import { Link } from 'react-router-dom';
function btnComprar() {
  return (
    <div>
        <Link to="/compras" className="compraja-button">
           <a href="">Compre Já</a> 
        </Link>
    </div>
  )
}

export default btnComprar
