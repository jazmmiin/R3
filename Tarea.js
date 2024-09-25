// Tarea.js
import React from 'react';

const Tarea = ({ tarea }) => {
  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>{tarea.descripcion}</p>
    </div>
  );
};

export default Tarea;