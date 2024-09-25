//inicio.js
import React from "react";
import tareas from "./tareas";
import Tarea from './Tarea';
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <div>
            <h1>Lista de tareas</h1>
            <ul>
            {tareas.map(tarea => (
          <li key={tarea.id}>
            <Link to={`/tareas/${tarea.id}`}>
              <Tarea tarea={tarea} />
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/crear-tarea">Crear nueva tarea</Link>
    </div>
  );
};

export default Inicio;