import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {

    const textoSegunBool = this.props.isActivated ? 'On' : 'Off'

    // Multiplico cada número del array por 2
    const mappedNumbers = this.props.arrayOfNumbers.map(n=> n * 2)

    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>

        {/* El join hace que cada elemento del array se le ponga una coma */}
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>

        {/* Objeto pasado como prop */}
        <p>{this.props.objetoConInformacion.key}</p>
        <p>{this.props.objetoConInformacion.key2}</p>


      </div>
    )

  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicación de React de ejemplo.
        </p>



      </header>

      <Hello title="Dentro en el componente"></Hello>

      <Text
        text='Texto del componente'
        number={15}
        isActivated={true}
        arrayOfNumbers={[2, 3, 4]}
        objetoConInformacion = {  {key: 'valor', key2: 'otrovalor'}  }

      />

    </div>
  );
}

export default App;
