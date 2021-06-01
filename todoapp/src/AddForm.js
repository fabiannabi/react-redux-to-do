import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ""
    }

    handleChange = (e) => {
        const id = Math.random()
        this.setState({content: e.target.value, id: id});
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({content: ""})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add New Todo</label>
                <input type="text" onChange={this.handleChange} value = {this.state.content}></input>
                <p className ="center">"CLICK AN ITEM TEXT TO DELETE IT "</p>
            </form>
        )
    }
}

export default AddTodo;
