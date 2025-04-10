import React from 'react'
import { Calculadora } from './components/Calculadora'
import { CambioColores } from './components/CambioColores'
import { Formulario } from './components/Formulario'
import { ListaNombres } from './components/ListaTareas'
import { MostrarFechaActual } from './components/MostrarFechaActual'
import { NumerosParImpar } from './components/NumerosParImpar'
import { Saludo } from './components/Saludo'

export const App = () => {
  return (
    <div>
      <Calculadora />
      <CambioColores />
      <Formulario />
      <ListaNombres />
      <MostrarFechaActual />
      <NumerosParImpar />
      <Saludo />
    </div>
  )
}
