// src/index.jsx
export { default as NavLeft } from './NavLeft';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App.jsx';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);