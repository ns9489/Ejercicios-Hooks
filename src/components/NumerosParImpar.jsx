import React from 'react'
import { useState } from 'react'

export const NumerosParImpar = () => {

  const [num, setNum] = useState(0);
  const [result, setResult] = useState("");

const handleNum = () => {

if (num % 2 === 0){
      setResult("es par") 

}else {
      setResult("es impar")
}
}
  return (
    <>
    <h1>{num}</h1>
    <input type="Number" onChange={(e) => setNum(Number(e.target.value))} />
    <button onClick={handleNum}>Revisar</button>
    <p>{result}</p>
    </>
  )
}