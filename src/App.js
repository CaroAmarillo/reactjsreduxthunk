import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';
import Conthijo from './components/Conthijo';
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement } from './actions/counterAction' 
class App extends Component {
 
  constructor(props) {
    super(props);

    this.state = {contador: 0};


//this.sumacontador = this.sumacontador.bind(this);
    
      }


  //sumacontador(event) {
    sumacontador = () =>{
    this.setState({contador: this.state.contador + 1});
   
  }
  
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
        
          To get started, edit <code>src/App.js</code> and save to reload.
          Contador padre : {this.props.countst}
          <Conthijo  /> 
        <p>  <Button onClick={this.props.counterIncrement} >Suma contador</Button> </p>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    countst: state.count1
  }
}


export default connect(mapStateToProps, {counterIncrement, counterDecrement})(App);

