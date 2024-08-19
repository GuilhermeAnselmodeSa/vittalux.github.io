import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Index.jsx';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import Compras from './Pages/Compras/Compras';
import Sac from './Pages/Sac/Sac';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/compras' element={<Compras/>} />
      <Route path='/sac' element={<Sac/>} />

      </Routes>
    </Router>
  );
};

export default App