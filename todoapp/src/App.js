
import './App.css';
import Todos from './Todos'
import React, {Component} from 'react'

class App extends Component {
  state = {
    todos: [
      {
        id:1, content:"read manga"
      },
      {
        id:2, content:"wash dishes"
      }
    ]
  }

  deleteTodo = (id)=> {
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    });

    this.setState({
      todos: todos,
    });

  }

  render() {
  return (
      <div className="App container">
        <h1 className="center blue-text">To Do List</h1>
        <Todos todos={this.state.todos}
          deleteTodo = {this.deleteTodo}
        />
      </div>
    );
  }
};

export default App;
