import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Let's create an TudoArray
var todos = [
  {
    todoTitle: "My first todo",
    todoResponsible: "Jesse",
    todoDescription: "My first todo description",
    todoPriority: "low"
  },
  {
    todoTitle: "My second todo",
    todoResponsible: "Roshonda",
    todoDescription: "My second todo description",
    todoPriority: "medium"
  },
  {
    todoTitle: "My third todo",
    todoResponsible: "Laila",
    todoDescription: "My third todo description",
    todoPriority: "high"
  }
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }
  render() {
    return (
      
    );
  }
}

export default App;
