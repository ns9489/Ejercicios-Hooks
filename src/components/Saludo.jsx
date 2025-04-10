import React, { useState } from 'react'

/*Crea un campo de texto en el que el usuario pueda ingresar su nombre.
 Al hacer clic en un botón llamado "Saludar",el componente debe mostrar 
 un saludo con el nombre ingresado por el usuario en un h1. */

export const Saludo = () => {
    const [user, setUser] = useState("")
    const [inputname, setInputname] = useState("")
    
    const handleUser = (e) => {
        setInputname (e.target.value)
    }

    const  handleButton = () => {
        setUser(inputname)

    }

  return (
    <>
    <input type="text " placeholder='Ingrese su nombre' onChange={handleUser} value={inputname} />
    <button onClick={handleButton}>Saludar</button>
    <h1>Hola{user}</h1>
    </>
  )
}
