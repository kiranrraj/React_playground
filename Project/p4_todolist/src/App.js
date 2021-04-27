
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/Todolist'

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form 
        todos = {todos} 
        setTodos = {setTodos} 
        text={text} 
        setText = {setText}/>
      <TodoList 
      todos = {todos}
      setTodos = {setTodos}/>
    </div>
  );
}

export default App;
