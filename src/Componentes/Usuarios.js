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
    <div className='fondoOscuro'>
    <h1>Tenemos {resultado.total} usuarios registrados.</h1>
    </div>
  );
}

export default Usuarios;