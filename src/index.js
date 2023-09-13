import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


// Class Componenets 

class B extends Component{
  // properties
  name = 'Amandeep'
  
  //Constructure
  


  //Methods
  render(){
    return <h1>Hello my name is {this.name} {this.props.surname}</h1>
  }
}

// Function Componenets 

function A(props){
  let firstName = "Surjit"
  
  return <>
  <h1>hi my name is {firstName} {props.children} </h1>
  </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( <><B surname='Kohli'/> <A>Kohli</A> </>);


