import React, { useState } from 'react';

export const CambioColores = () => {
  const [colorTexto, setColorTexto] = useState('black');

  const colores = ['red', 'blue', 'green', 'purple', 'orange', 'teal', 'pink'];

  const handleColors = () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColorTexto(colorAleatorio);
  };

  return (
    <>
      <h1 style={{ color: colorTexto, padding: '4rem',
        transition: 'color 0.3s ease'}}>
        ¡Hola chiquito! </h1>

      <button onClick={handleColors}>Cambiar color </button>
    </>
  );
};
