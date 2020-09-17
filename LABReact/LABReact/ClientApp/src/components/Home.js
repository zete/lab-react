import React, { Component } from 'react';


class Hello extends Component {
    render() {
        return <h2>{this.props.title}</h2>
    }
}
Hello.defaultProps = {
    title: 'Título por defecto'
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

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className="App">
                <header className="App-header">
                   
                    <p>
                        Aplicación de React de ejemplo.
        </p>



                </header>

                <Hello title="Dentro en el componente"></Hello>
                <Hello />

                <Text
                    text='Texto del componente'
                    number={15}
                    isActivated={true}
                    arrayOfNumbers={[2, 3, 4]}
                    objetoConInformacion={{ key: 'valor', key2: 'otrovalor' }}
                    titleInHTML={<h1>Súper título</h1>}

                />

            </div>
        );
    }
}
