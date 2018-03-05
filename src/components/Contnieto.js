import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import '../App.css';


class Contnieto extends Component {
 
  constructor(props) {
    super(props);
    this.state = {contanieto: 0 };
      
      }

      componentWillReceiveProps(nextProps) { 
        this.setState({ contanieto: nextProps.conta });
      
      }

      sumacontadorState = () =>{
        this.setState({contanieto: this.state.contanieto + 1});
        /*if (this.state.club==='boca')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/5.png'});
        if (this.state.club==='river')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/16.png'});
        if (this.state.club==='racing')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/15.png'});
        */
        //event.preventDefault();
      }
      

    
  render() {
    return (
      <div className="App">
        

        <p className="App-intro">
         
         <p> Contador Nieto2 Props: {this.props.conta}</p>
         <p> Contador Nieto State: {this.state.contanieto} </p>
         <p> <Button onClick={this.sumacontadorState} >Suma state Nieto</Button> </p>
          
         </p> 
      </div>
    );
  }
}

export default Contnieto;
