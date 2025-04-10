import { useState } from "react";
/*4.Mini calculadora
Objetivo:
Suma, resta, multiplica y divide dos números que el usuario ingrese.
.*/

export const Calculadora = () => {
  
  const [num, SetNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleSum = () => {
    setResult(num + num2);
  };
  const handleResta = () => {
    setResult(num - num2);
  };
  const handleMultiplicacion = () => {
    setResult(num * num2);
  };
  const handleDividir = () => {
    setResult(num / num2);
  };
  return (
    <>
      <input
        type="number"
        placeholder=" ingrese numero"
        onChange={(e) => SetNum(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder=" ingrese numero 2"
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <hr></hr>
      <button onClick={handleSum}>Suma</button>
      <button onClick={handleResta}>Resta</button>
      <button onClick={handleMultiplicacion}>Multiplicacion</button>
      <button onClick={handleDividir}>Division</button>

      <h1>{result}</h1>
    </>
  );
};
