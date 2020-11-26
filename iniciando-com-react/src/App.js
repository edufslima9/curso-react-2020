import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    nome : 'Eduardo Felipe'
  }

  modificarNome = (event) => {
    this.setState({ nome : event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello, {this.state.nome}</h1>
      </React.Fragment>
    )
  }
}

export default App;