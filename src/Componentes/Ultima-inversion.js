import { useState, useEffect } from 'react';
// import './App.css';

function UltimaInversion() {
  const [inversion, setInversion] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");
    fetch("https://inversiones.onrender.com/inversiones/ultima-inversion")
    .then(response => response.json())
    .then(data => {
        setInversion(data.ultimo)
    })
    .catch(error => console.error(error));
  }, [])
  
  return (
    <div className='fondoOscuro'>
        {inversion.length === 0 && <p>Cargando</p>}
        <h1>La última inversión fue realizada por el usuario número {inversion.id_usuario}.</h1>
        <h1>El usuario {inversion.id_usuario} invirtió en la inversión número {inversion.id_inversion},</h1>
        <h1>la operación tuvo un monto inicial de ${inversion.monto_inicial}, un rendimiento de 
        ${inversion.rendimiento} y le dejo a al usuario {inversion.id_usuario} un total de ${inversion.monto_final}</h1>
    </div>
  );
}

export default UltimaInversion;