import { useState, useEffect } from 'react';
// import './App.css';

function UltimoUsuario() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");
    fetch("http://localhost:3000/inversiones/ultimo-usuario")
    .then(response => response.json())
    .then(data => {
        setUsuario(data)
    })
    .catch(error => console.error(error));
  }, [])
  
  return (
    <h1>El ultimo usuario creado es {usuario.ultimo.nombre} {usuario.ultimo.apellido}</h1>
  );
}

export default UltimoUsuario;