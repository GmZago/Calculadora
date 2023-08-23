import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [primeironumero, setpriNumero] = useState(0);
  const [segundonumero, setsegNumero] = useState(0);
  const [operacao, setOperacao] = useState('Subtrair');
  const [resultado, setResultado] = useState(0); 

  const fazerCalculo = () =>{
    if(operacao == "Somar")
      return parseFloat(primeironumero) - parseFloat(segundonumero);
    else if (operacao == "Multplicar")
      return parseFloat(primeironumero) + parseFloat(segundonumero);
    else if (operacao == "Subtrair")
      return parseFloat(primeironumero) / parseFloat(segundonumero);
    else
      return parseFloat(primeironumero) * parseFloat(segundonumero);
  }

  useEffect(() => {
    setResultado(fazerCalculo())
  }, [primeironumero,segundonumero,operacao])

  return (
    <div class="container">
      <div class="box">
          <h1>Calculadora</h1>
          <label>Digite o Primeiro Numero</label>
            <input type="number" value={primeironumero} onChange={(e) => setpriNumero(e.target.value)}>
          </input>
          <label>Digite o Segundo Numero</label>
            <input type="number" value={segundonumero} onChange={(e) => setsegNumero(e.target.value)}>
          </input>
          <select onChange={(e) => setOperacao(e.target.value)}>
            <option>Somar</option>
            <option>Subtrair</option>
            <option>Multiplicar</option>
            <option>Devidir</option>
          </select>          
          <label>Resurtado {resultado}</label>
      </div>
    </div>
  );
}
export default App;