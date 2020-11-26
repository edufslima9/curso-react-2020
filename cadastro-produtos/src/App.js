import React from 'react';

import NavBar from './components/navbar';
import Rotas from './rotas';

import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
        <HashRouter>
          <NavBar/>
          <Rotas/>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
