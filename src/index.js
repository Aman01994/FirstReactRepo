import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


// Funtion Component 
function A(props){
  let name = "Jatin"
  return<>
  <h1>{name}, {props.surname}</h1>;
  <h2><B surname='kohli'/></h2>
  </>
}

// Class Component
// class child extends parent {}  
class B extends Component{
  // Properties 
  name = "MANDEEP"

  // Constructor 


  // Method 
  render(){
    return (
      <span>  {this.name}, {this.props.surname}</span>
    )
  
  }
}
let surnameA = 'DEEP Ssingh'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<A surname={surnameA}/>);


