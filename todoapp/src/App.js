
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
  render() {
  return(
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
};

export default App;
