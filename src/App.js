import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Cargo from './pages/Cargo';
import ListaCargos from './pages/ListaCargos';
import Funcionario from './pages/Funcionario';
import ListaFuncionarios from './pages/ListaFuncionarios';
import HomePage from './pages/HomePage';

//o Provider faz com que as rotas acessem tudo o que ta no store
function App() {
  return (
    <Provider store={store}> 
      <div>   
        <Route path="/" exact component={HomePage} />
        <Route path="/funcionario" exact component={Funcionario} />
        <Route path="/listar-funcionarios" exact component={ListaFuncionarios} />
        <Route path="/cargo" exact component={Cargo} />
        <Route path="/listar-cargos" exact component={ListaCargos} />
      </div>
    </Provider>
  );
}

export default withRouter(App);
