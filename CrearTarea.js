// CrearTarea.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import tareas from './tareas';

const CrearTarea = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('incompleta');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: tareas.length + 1,
      titulo,
      descripcion,
      fechaCreacion: new Date().toISOString(),
      estado
    };
    tareas.push(nuevaTarea);
    history.push('/');
  };

  return (
    <div>
      <h1>Crear nueva tarea</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <label>
          Descripción:
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <label>
          Estado:
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="incompleta">Incompleta</option>
            <option value="completa">Completa</option>
            <option value="en proceso">en proceso</option>
            <option value="sin empezar">sin empezar</option>
          </select>
        </label>
        <button type="submit">Crear tarea</button>
      </form>
    </div>
  );
};

export default CrearTarea;