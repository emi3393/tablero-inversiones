import { useState, useEffect } from 'react';
//import './App.css';

function Usuarios() {
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:red");
    fetch("https://inversiones.onrender.com/inversiones/usuarios")
    .then(response => response.json())
    .then(data => {
      setResultado(data)
    })
    .catch(error => console.error(error));
  }, [])

  return (
    <h1>La cantidad de usuarios son: {resultado.total}</h1>
  );
}

export default Usuarios;