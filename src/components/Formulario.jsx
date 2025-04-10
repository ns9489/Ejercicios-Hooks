import React, { useState } from 'react'

export const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMensaje('Las contraseñas no coinciden');
          } else {
            setMensaje(`Bienvenido/a, ${nombre}`);
          }
        };

  return (
    
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <br />
            <input
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button type="submit">Enviar</button>
          </form>
    
          {mensaje && <h1>{mensaje}</h1>}
        </div>
  )
}
