import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './Components/Auth/Login';
import { NuevaCuenta } from './Components/Auth/NuevaCuenta';
import { Proyectos } from './Components/Projects/Proyectos';

import { AuthState } from './Context/authentication/authState';
import { AlertaState } from './Context/alerta/alertaState';
import { ProyectoState } from './Context/Projects/ProyectoState';
import { TareaState } from './Context/tasks/tareaState';

import { tokenAuth } from './Components/config/tokenAuth';

// * Revisar si tenemos un token
const token = localStorage.getItem( 'token' );
if( token ) {
  tokenAuth( token );
}

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={ Login } />
                  <Route exact path="/nueva-cuenta" component={ NuevaCuenta } />
                  <Route exact path="/proyectos" component={ Proyectos } />
                </Switch>
            </BrowserRouter>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
