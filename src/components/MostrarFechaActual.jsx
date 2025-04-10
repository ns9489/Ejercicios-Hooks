import React from 'react'
import { useState } from 'react';

export const MostrarFechaActual = () => {
  const [fecha, setFecha] = useState('');


  const mostrarFecha = () => {
    const fechaActual = new Date().toLocaleString();
    setFecha(fechaActual);

  }
  return (
    <div>
    <button onClick={mostrarFecha}>Mostrar fecha</button>
    {fecha && <h1>{fecha}</h1>}
  </div>
  )
}
