import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Productos from './Productos';
import Productos2 from './Productos2';
import Categorias from './Categorias';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Productos />
    <Categorias />
    <Productos2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
