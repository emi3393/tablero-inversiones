import { useState, useEffect } from 'react';
// import './App.css';

function Productos2() {
  const [inversiones, setInversiones] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");
    fetch("http://localhost:3000/inversiones")
    .then(response => response.json())
    .then(data => {
        setInversiones(data.product)
    })
    .catch(error => console.error(error));
  }, [])
  
  return (
    <div>
        <h1>Inventario de Inversiones</h1>
        <ul>
            {inversiones.map((inversion, i) => {
                return (
                    <li key={i}>
                        <h2>Nombre de inversión: {inversion.nombre_inversion} </h2>
                        <h2>ID de inversión: {inversion.id_inversion} </h2>
                        <h2>Tipo de riesgo: {inversion.riesgos.nombre_riesgo} </h2>
                    </li>
                )
            })
            }
        </ul>
        
    </div>
  );
}

export default Productos2;