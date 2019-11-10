import React from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends React.Component{
  state = {
    show: true
  }

  togleShow = () => {
    this.setState({show : !this.state.show})
  }

  render() {
    if(this.state.show){
    return(
      <div id="hello" class="hello">
         <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <br/>
        <button onClick={this.togleShow}>Toggle Show</button>

      </div>
    )
    }else{
      return (
        <div>
          <h1>Thare are no elements!</h1>
          <br/>
          <button onClick={this.togleShow}>Toggle Show</button>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div className="App">
     
      <HelloWorld subtitle = "David" mytext ="Sheriff" />
      <HelloWorld subtitle = "Nuria" mytext ="Jefa" />
      <HelloWorld subtitle = "Unai" mytext ="Vástago" />
   
    </div>
  );
}

export default App;
