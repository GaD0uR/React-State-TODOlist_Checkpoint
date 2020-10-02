import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handledelete, handledit }) => {
  console.log(todos);
  return (
    <div className="List-todo">
      {todos.map((todo) => (
        <Todo
          className="todo-item"
          key={todo.id}
          todo={todo}
          handledelete={handledelete}
          handledit={handledit}
        />
      ))}
    </div>
  );
};
export default TodoList;
