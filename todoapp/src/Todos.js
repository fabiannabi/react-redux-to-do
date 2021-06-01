import React from 'react';

const Todos = ({todos}=this.props) => {
    const todosList =  todos.map(todo =>{
        return (
            <div>
                <p>{todo.content}</p>
            </div>
        )
    })

    return (
        <div className="todos collection">
            {todosList}
        </div>
    )

}

export default Todos
