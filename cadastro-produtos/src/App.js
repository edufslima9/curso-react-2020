import React from 'react';

import NavBar from './components/navbar';
import Home from './view/home';

function App() {
  return (
    <>
      <div className="container">
        <NavBar/>
        <Home/>
      </div>
    </>
  );
}

export default App;
