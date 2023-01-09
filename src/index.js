import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./igna.css"
//import App from './App';
import Productos from './Componentes/Productos';
import Usuarios from './Componentes/Usuarios';
import Productos2 from './Componentes/Productos2';
import Categorias from './Componentes/Categorias';
import UltimoUsuario from './Componentes/Ultimo-usuario';
import UltimaInversion from './Componentes/Ultima-inversion';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Usuarios />
    <Productos />
    <Productos2 />
    <Categorias />
    <UltimoUsuario />
    <UltimaInversion />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
