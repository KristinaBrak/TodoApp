import PropTypes from "prop-types";
import React from "react";
import RandomImage from "./random-image/RandomImage";
import Text from "./text/Text";
import "./todo.css";

const Todo = ({ id, isCompleted, title, onRemove, onSetTodoCompleted, onSetTodoTitle }) => (
  <div className="todo-element">
    <div className="checkbox">
      <input type="checkbox" onClick={() => onSetTodoCompleted(id)} id={id} />
      <label htmlFor={id}></label>
    </div>
    <div className="todo-text">
      <Text id={id} isCompleted={isCompleted} title={title} onSetTodoTitle={onSetTodoTitle} />
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
  isCompleted: PropTypes.bool,
  title: PropTypes.string,
  setTodoCompleted: PropTypes.func,
  onRemove: PropTypes.func,
  onSetTodoTitle: PropTypes.func,
};

export default Todo;
