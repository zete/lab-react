import React from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends React.Component{
  state = {
    show: true
  }

  togleShow = () => {
    this.setState({show : false})
  }

  render() {
    if(this.state.show){
    return(
      <div id="hello">
         <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={() => this.togleShow}>Toggle Show</button>

      </div>
    )
    }else{
      return <h1>Thare are no elements!</h1>
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <HelloWorld subtitle = "David" mytext ="Sheriff" />
      </header>
    </div>
  );
}

export default App;
