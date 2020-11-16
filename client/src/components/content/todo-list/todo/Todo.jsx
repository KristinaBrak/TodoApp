import PropTypes from "prop-types";
import React from "react";
import RandomImage from "./random-image/RandomImage";
import Text from "./text/Text";
import "./todo.css";

const Todo = ({ id, isDone, name, onRemove, onSetTodoDone, onSetTodoName }) => (
  <div className="todo-element">
    <div className="checkbox">
      <input type="checkbox" onClick={() => onSetTodoDone(id)} id={id} />
      <label htmlFor={id}></label>
    </div>
    <div className="todo-text">
      <Text id={id} isDone={isDone} name={name} onSetTodoName={onSetTodoName} />
    </div>
    <div className="randomImage">
      <RandomImage />
    </div>
    <button className="remove" onClick={() => onRemove(id)}>
      x
    </button>
  </div>
);


Todo.propTypes = {
  id: PropTypes.string,
  isDone: PropTypes.bool,
  name: PropTypes.string,
  markSubmit: PropTypes.func,
  onRemove: PropTypes.func,
  onSetTodoName: PropTypes.func,
};

export default Todo;
