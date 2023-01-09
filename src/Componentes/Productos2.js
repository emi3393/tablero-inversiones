import { useState, useEffect } from 'react';
import "../igna.css";
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
    <div className='fondoOscuro'>
        <h1>Inventario de Inversiones</h1>
              {inversiones.map((inversion, i) => {
                return (
                    <ul key={i}>
                      <div className='panelInferior'>
                        <h2>Nombre de inversión: {inversion.nombre_inversion} </h2>
                        <h2>ID de inversión: {inversion.id_inversion} </h2>
                        <h2>Tipo de riesgo: {inversion.riesgos.nombre_riesgo} </h2>
                      </div>                   
                    </ul>
                )
            })
            }   
    </div>
  );
}

export default Productos2;