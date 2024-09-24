import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'; // Asegúrate de que la ruta sea correcta
import Main from './Main'; // Asegúrate de que la ruta sea correcta

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
        {/* Otras rutas */}
      </Switch>
    </Router>
  );
}

export default Routes;