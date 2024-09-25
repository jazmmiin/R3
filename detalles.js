// Detalle.js
import React from 'react';
import { useParams } from 'react-router-dom';
import tareas from './tareas';

const Detalle = () => {
    const { id } = useParams();
    const tarea = tareas.find(tarea => tarea.id === id);
    return (
        <div>
         <h1>{tarea.titulo}</h1>
      <p>{tarea.descripcion}</p>
      <p>Fecha de creación: {tarea.fechaCreacion}</p>
      <p>Estado: {tarea.estado}</p>
    </div>
  );
};

export default Detalle;