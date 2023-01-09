import { useState, useEffect } from 'react';
// import './App.css';

function UltimaInversion() {
  const [inversion, setInversion] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");
    fetch("http://localhost:3000/inversiones/ultima-inversion")
    .then(response => response.json())
    .then(data => {
        setInversion(data)
    })
    .catch(error => console.error(error));
  }, [])
  
  return (
    <div>
        <h1>La última inversión fue realizada por {inversion.ultimo.usuarios.nombre} {inversion.ultimo.usuarios.apellido}.</h1>
        <h1>{inversion.ultimo.usuarios.nombre} invirtió en {inversion.ultimo.inversiones.nombre_inversion},</h1>
        <h1>la operación tuvo un monto inicial de ${inversion.ultimo.monto_inicial}, un rendimiento de 
        ${inversion.ultimo.rendimiento} y le dejo a {inversion.ultimo.usuarios.nombre} un total de ${inversion.ultimo.monto_final}</h1>
    </div>
  );
}

export default UltimaInversion;