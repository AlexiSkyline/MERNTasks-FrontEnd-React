
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
