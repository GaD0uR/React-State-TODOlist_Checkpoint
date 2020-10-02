import React, { useState } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import "../App.css";
function App1() {
  const [todos, setTodos] = useState([
    { id: 0, text: "mohamed" },
    { id: 1, text: "gadour" },
    { id: 2, text: "youssef" },
  ]);

  //   111111: callback function in  the parent
  const handleAdd = (textAdded) => {
    setTodos([...todos, { id: Math.random(), text: textAdded }]);
  };

  const handledelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handledit = (id, textEdited) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: textEdited } : todo
      )
    );
  };
  return (
    <div className="App">
      <div className="content-form col-md-6 offset-md-3">
        {/* 2222: paass the callback as a props to the right place */}
        <InputTodo handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          handledelete={handledelete}
          handledit={handledit}
        />
      </div>
    </div>
  );
}

export default App1;
