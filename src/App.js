import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import Cargo from './pages/Cargo';
import Funcionario from './pages/Funcionario';
import HomePage from './pages/HomePage';


function App() {
  return (

    <div>   
      <Route path="/" exact component={HomePage} />
      <Route path="/funcionario" exact component={Funcionario} />
      <Route path="/cargo" exact component={Cargo} />
    </div>
      
  );
}

export default withRouter(App);
