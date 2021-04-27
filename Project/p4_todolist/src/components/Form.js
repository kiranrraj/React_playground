import React from 'react';

const Form = ({text, setText, todos, setTodos}) => {
    const textHandler = (e) => {
        // console.log(e.target.value);
        setText(e.target.value)
    };

    const submitHandler = (e) => {
        // console.log(e.target.value);
        e.preventDefault();
        setTodos([
            ...todos, {text: text, completed: false, id: Math.floor(Math.random() *100)}
        ]);
        setText("");
    };

    return(
        <form>
        <input value={text} type="text" className="todo-input" onChange={textHandler}/>
        <button className="btn" type="submit" onClick= {submitHandler}>
        <i className="fas fa-plus-circle"></i>
        </button>
        <div className="select">
            <select name="todos" id="" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    </form>
    );
}

export default Form;