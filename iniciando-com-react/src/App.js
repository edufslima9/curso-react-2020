import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    nome : 'Eduardo Felipe'
  }

  // Usando Arrow Function
  modificarNome = (event) => {
    this.setState({ nome : event.target.value });
  }

  criaComboBox = () => {
    const opcoes = [ "Fulano", "Cicrano" ];
    const comboBoxOpcoes = opcoes.map ( opcao => <option>{ opcao }</option> );

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount() {
    console.log("Executou o componentDidMount");
  }

  // Usando funções normais
  /*constructor() {
    super();
    this.modificarNome = this.modificarNome.bind(this);
  }

  modificarNome(event) {
    this.setState({ nome : event.target.value });
  }*/

  render() {
    const MeuComboBox = () => this.criaComboBox();

    return (
      <React.Fragment>
        <input className="texto-centralizado" type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.props.nome}, sua idade é {this.props.idade}</h1>
        <MeuComboBox/>
      </React.Fragment>
    )
  }

   // Tag vazia
  /*render() {
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello, {this.state.nome}</h1>
        {this.criaComboBox()}
      </>
    )
  }*/

  // Array de componentes
  /*render() {
    return (
      [
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />,
        <h1>Hello, {this.state.nome}</h1>
      ]
    )
  }*/
}

export default App;