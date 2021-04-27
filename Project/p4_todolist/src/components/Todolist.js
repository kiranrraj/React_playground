import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos}) =>{
    return(
        <div className="container">
            <ul className="list">
                {todos.map((elem)=>(
                    <Todo todos={todos} setTodos ={setTodos} text={elem.text} key={elem.id} todo ={elem}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;