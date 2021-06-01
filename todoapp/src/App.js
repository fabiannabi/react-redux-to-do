
import './App.css';
import Todos from './Todos'
import AddTodo from './AddForm'
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
      todos
    });

  }

  addTodo = (todo) =>{
    const todos = [...this.state.todos, todo];

    this.setState({
      todos
    })
  }

  render() {
  return (
      <div className="App container">
        <h1 className="center blue-text">To Do List</h1>
        <Todos todos={this.state.todos}
          deleteTodo = {this.deleteTodo}
        />
        <AddTodo
          addTodo={this.addTodo}
        />
      </div>
    );
  }
};

export default App;
