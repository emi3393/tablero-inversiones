import { useState, useEffect } from 'react';
// import './App.css';

function UltimoUsuario() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");
    fetch("https://inversiones.onrender.com/inversiones/ultimo-usuario")
    .then(response => response.json())
    .then(data => {
        setUsuario(data.ultimo)
    })
    .catch(error => console.error(error));
  }, [])
  
  return (
    <div className='fondoOscuro'>
    <h1>El ultimo usuario creado es {usuario.nombre} {usuario.apellido}</h1>
    </div>
    );
}

export default UltimoUsuario;