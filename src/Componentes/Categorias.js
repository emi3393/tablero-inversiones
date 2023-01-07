import { useState, useEffect } from 'react';
// import './App.css';

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");
    fetch("https://inversiones.onrender.com/inversiones/categorias")
    .then(response => response.json())
    .then(data => {
        setCategorias(data)
    })
    .catch(error => console.error(error));
  }, [])
  
  return (
    <h1>En total hay {categorias.count} categorias de productos.</h1>
  );
}

export default Categorias;