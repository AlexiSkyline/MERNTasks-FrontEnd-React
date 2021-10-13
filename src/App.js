import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './Components/Auth/Login';
import { NuevaCuenta } from './Components/Auth/NuevaCuenta';
import { Proyectos } from './Components/Projects/Proyectos';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/nueva-cuenta" component={ NuevaCuenta } />
          <Route exact path="/proyectos" component={ Proyectos } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
