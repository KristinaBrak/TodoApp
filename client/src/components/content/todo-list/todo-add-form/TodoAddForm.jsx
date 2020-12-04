import Button from "components/miscellaneous/Button";
import React, { useState } from "react";
import TodoAddFormStyle from "./TodoAddFormStyle";
// import "./todo-add-form.css";

const TodoAddForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <TodoAddFormStyle>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            addTodo(text);
            setText("");
          } else if (key === "Escape") {
            setText("");
          }
        }}
      />

      <Button
        className="add"
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Add
      </Button>
    </TodoAddFormStyle>
  );
};

export default TodoAddForm;
