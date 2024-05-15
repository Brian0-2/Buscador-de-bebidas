import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import './index.css';

// aqui pertenecen las apis publicas
// https://www.thecocktaildb.com/api.php

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
