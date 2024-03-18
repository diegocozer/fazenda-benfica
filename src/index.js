/* eslint-disable no-undef */
// import 'bootstrap/dist/css/bootstrap.min.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true }}>

      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
);
