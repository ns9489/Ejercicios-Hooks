import { useState } from 'react';

export const ListaNombres = () => {
  const [nombre, setNombre] = useState('');
  const [nombres, setNombres] = useState([]);

  const agregarNombre = () => {
    if (nombre.trim() !== '') {
      setNombres([...nombres, nombre]);
      setNombre('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa un nombre"
      />
      <button onClick={agregarNombre}>Agregar</button>

      <ul>
        {nombres.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
