import React, { useState } from "react";
import ModalExample from "../compoents/Modal";

const Todo = ({ todo, handledelete, handledit }) => {
  const [barre, setBarre] = useState(false);

  const delett = () => {
    handledelete(todo.id);
  };

  return (
    <div className="todo-item" style={{ display: "flex" }}>
      <input
        type="checkbox"
        className="todo-item-input"
        onClick={() => setBarre(!barre)}
      />
      <span className={barre ? "todo-text todo-barre" : "todo-text"}>
        {todo.text}
      </span>
      <div className="form-button">
        <ModalExample todo={todo} handledit={handledit} />
        <button className="btn btn-danger" onClick={delett}>
          DELETE
        </button>
      </div>
    </div>
  );
};
export default Todo;
