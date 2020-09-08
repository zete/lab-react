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

    // Para no andar repitiendo todo el rato "this.props.text, etc"
    const 
    {
      text,
      number,
      arrayOfNumbers,
      objetoConInformacion,
      isActivated,
      titleInHTML
    } = this.props

    const textoSegunBool = isActivated ? 'On' : 'Off'

    // Multiplico cada número del array por 2
    const mappedNumbers = arrayOfNumbers.map(n => n * 2)

    return (
      <div>
        {titleInHTML}
        <p>{text}</p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>

        {/* El join hace que cada elemento del array se le ponga una coma */}
        <p>{arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>

        {/* Objeto pasado como prop */}
        <p>{objetoConInformacion.key}</p>
        <p>{objetoConInformacion.key2}</p>


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
        objetoConInformacion={{ key: 'valor', key2: 'otrovalor' }}
        titleInHTML = {<h1>Súper título</h1>}

      />

    </div>
  );
}

export default App;
