import React, { Component } from 'react';

import '../App.css';
import Contnieto from './Contnieto';
import { connect } from 'react-redux';


class Conthijo extends Component {
 
  constructor(props) {
    super(props);      
      }


  
  render() {
    return (
     <div className="App" > 
     
        

       <p className="App-intro"> 
         
          Contador Hijo: {this.props.countst}
          
          
        </p>
        <p><Contnieto  /> </p>
      </div>
    );
  }
}



function mapStateToProps(state){
  return{
    countst: state.count1
  }
}

export default connect(mapStateToProps, {})( Conthijo);
