import { useState, useEffect } from 'react';
// import './App.css';

function Productos() {
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");
    fetch("https://inversiones.onrender.com/inversiones")
    .then(response => response.json())
    .then(data => {
      setResultado(data)
    })
    .catch(error => console.error(error));
  }, [])
  
  return (
    <h1>La cantidad de productos es {resultado.count}</h1>
  );
}

export default Productos;