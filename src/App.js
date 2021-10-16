import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './Components/Auth/Login';
import { NuevaCuenta } from './Components/Auth/NuevaCuenta';
import { Proyectos } from './Components/Projects/Proyectos';

import { ProyectoState } from './Context/Projects/ProyectoState';
import { TareaState } from './Context/tasks/tareaState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route exact path="/nueva-cuenta" component={ NuevaCuenta } />
              <Route exact path="/proyectos" component={ Proyectos } />
            </Switch>
        </BrowserRouter>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
