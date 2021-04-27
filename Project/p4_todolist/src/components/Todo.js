import React from 'react';

const Todo = ({text, id, setTodos, todos, todo}) =>{
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    return(
        <div className="todo">
            <li className="item">{text}</li>
            <button className="btn btnC"><i className="far fa-check-circle"></i></button>
            <button onClick={deleteHandler} className="btn btndel"><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}

export default Todo;