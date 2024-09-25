// App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './inicio';
import Detalle from './detalles';
import CrearTarea from './CrearTarea';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/tareas/:id" component={Detalle} />
        <Route path="/crear-tarea" component={CrearTarea} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;