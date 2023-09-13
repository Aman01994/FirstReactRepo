import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


// Class Componenets 

class B extends Component{
  // properties
  name = 'Amandeep'
  age;
  address;
  height;
  hairColor;
  //Constructure
  constructor(){
    super()
    this.age = 45
    
  }


  //Methods
  render(){
  
    return <h1>Hello my name is {this.name}, my age is {this.age}  </h1>
  }
  
}

// Function Componenets 

// function A(props){
//   // let firstName = "Surjit"
  
//   return <>
//   <h1>hi my name is {props.firstNames} {props.lastName} </h1>

//   </>
// }


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( <> <B/> </>);


