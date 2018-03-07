import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, List, Image } from 'semantic-ui-react';
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

  llamoApi = () =>{
    if (this.props.randompeople.isFetching===false) {
    this.props.fetchPeople()} else {alert("no se puede todavia") };
   
  }

  masinfo = (calle, ciudad) =>{
    alert("Calle:" + calle + " Ciudad: " + ciudad) ;
   
  }
  
  
  render() { console.log("People:" + JSON.stringify(this.props.randompeople.people));
  console.log("isfeteching:"+this.props.randompeople.isFetching);
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
        
          To get started, edit <code>src/App.js</code> and save to reload.
          
         
        <p>  <Button onClick={ () => this.llamoApi() } >Llama API</Button> </p>

{/* <Button onClick={ () => {this.props.randompeople.isFetching===false ? 
    this.props.fetchPeople() : alert("no se puede todavia") } } >Llama API</Button> </p>*/}

        </p>
        <List>
           {this.props.randompeople.people.map( (m) => 
 
 <List.Item>
   <Image avatar src={m.picture.thumbnail} onClick={ () => this.masinfo(m.location.street,m.location.city) } />
   <List.Content>
     <List.Header as='a'>{m.name.first}</List.Header>
     <List.Description>email <a><b>{m.email}</b></a> </List.Description>
   </List.Content>
 </List.Item>
 

    )}
    </List>

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

