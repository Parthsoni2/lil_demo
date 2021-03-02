import React, { useState } from "react";
import './App.css';
import Todo from "./components/Todo";
import AddTodo from "./components/Addtodo";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [todo, setTodo] = useState([]);
  const [todoname, setTodoname] = useState('');

  const addNameHandler = (name) => {
    setTodoname(name);
  }

  const submitFunction = (event) => {
    event.preventDefault();
    if (todoname.length > 0) {
      setTodo(oldArray => [...oldArray, todoname]);
      setTodoname('');
    }
  }

  const deleteTodo = (e) => {
    const todoIndex = todo.indexOf(e);
    todo.splice(todoIndex, 1);
    setTodo([...todo]);
  }

  return (
    <div className="App">
      {/* <AddTodo submitFunction={submitFunction} addNameHandler={addNameHandler}/> */}
      <form onSubmit={submitFunction}>
        <input type="text" value={todoname} onChange={e => addNameHandler(e.target.value)} />
        <button className="btn btn-success">Submit</button>
      </form>
      <Todo todos={todo} deleteTodo={deleteTodo} />

    </div>
  );
}

export default App;
