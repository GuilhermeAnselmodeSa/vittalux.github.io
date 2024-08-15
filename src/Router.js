import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro'
import Compras from './Pages/Compras/Compras'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/compras" component={compras} />

      </Switch>
    </Router>
  );
};

export default App;
  