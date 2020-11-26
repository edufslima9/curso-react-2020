import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    nome : 'Eduardo Felipe'
  }

  render() {
    return (
      <h1>Hello, {this.state.nome}</h1>
    )
  }
}

export default App;