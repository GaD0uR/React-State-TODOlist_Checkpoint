import React, { useState } from "react";

const InputTodo = ({ handleAdd }) => {
  const [inputText, setInputText] = useState("");
  //   33333
  const add = () => {
    inputText && handleAdd(inputText);
    setInputText("");
  };
  return (
    <div className="form-input">
      <input
        className="form-control"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={add}>
        Add
      </button>
    </div>
  );
};
export default InputTodo;
