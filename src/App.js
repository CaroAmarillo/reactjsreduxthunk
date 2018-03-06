import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';
import {fetchPeople} from './actions/peopleActions'; 
import { connect } from 'react-redux';


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
  
  render() { console.log("People:" + JSON.stringify(this.props.randompeople.people));
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
        
          To get started, edit <code>src/App.js</code> and save to reload.
          
         
        <p>  <Button onClick={this.props.fetchPeople} >Llama API</Button> </p>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    randompeople: state
  }
}


export default connect(mapStateToProps, {fetchPeople})(App);

