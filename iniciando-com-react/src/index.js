import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Props: propriedades (valores) não modificáveis
ReactDOM.render(
  <App nome="Fulano de tal" idade={28} />,
  document.getElementById('root')
);