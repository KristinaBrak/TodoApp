import React, { useState } from "react";
import PropTypes from "prop-types";
import "./text.css";

const Text = ({ id, title, isCompleted, onSetTodoTitle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);
  if (!isEdit) {
    return (
      <p
        id="editable-text"
        className={isCompleted ? "completed" : undefined}
        onClick={() => setIsEdit(true)}
      >
        {title}
      </p>
    );
  } else {
    return (
      <input
        type="text"
        id="editable-text"
        className={isCompleted ? "completed" : undefined}
        onBlur={() => {
          setIsEdit(false);
          onSetTodoTitle(id, tempTitle);
        }}
        onChange={(event) => {
          setTempTitle(event.target.value);
        }}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            setIsEdit(false);
            onSetTodoTitle(id, tempTitle);
          } else if (key === "Escape") {
            setIsEdit(false);
            setTempTitle(title);
          }
        }}
        value={tempTitle}
      />
    );
  }
};

Text.propTypes = {
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  title: PropTypes.string,
  onSetTodoTitle: PropTypes.func,
};

export default Text;
