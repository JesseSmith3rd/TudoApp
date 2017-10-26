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
      <div className="container">
        <h4>Todo Count:<span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}<small><span className="label label-info">{todo.todoPriority}</span></small></h4>
              <p><span className="glyphicon glyphicon-user"></span>{todo.todoResponsible}</p>
            </li>
          )}
        </ul>
      </div>

    );
  }
}

export default App;
