import React, { useState } from "react";
import PropTypes from "prop-types";
import "./text.css";

const Text = ({ id, name, isDone, onSetTodoName }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [tempName, setTempName] = useState(name);
  if (!isEdit) {
    return (
      <p
        id="editable-text"
        className={isDone ? "completed" : undefined}
        onClick={() => setIsEdit(true)}
      >
        {name}
      </p>
    );
  } else {
    return (
      <input
        type="text"
        id="editable-text"
        className={isDone ? "completed" : undefined}
        onBlur={() => {
          setIsEdit(false);
          onSetTodoName(id, tempName);
        }}
        onChange={(event) => {
          setTempName(event.target.value);
        }}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            setIsEdit(false);
            onSetTodoName(id, tempName);
          } else if (key === "Escape") {
            setIsEdit(false);
            setTempName(name);
          }
        }}
        value={tempName}
      />
    );
  }
};

Text.propTypes = {
  id: PropTypes.string,
  isDone: PropTypes.bool,
  name: PropTypes.string,
  onSetTodoName: PropTypes.func,
};

export default Text;

//     {
//         (!isEdit) ? (
//           <p
//             id="editable-text"
//             className={isDone ? "completed" : undefined}
//             onClick={() => setIsEdit(true)}
//           >
//             {name}
//           </p>
//         ) : (
//           <input
//             type="text"
//             id="editable-text"
//             className={isDone ? "completed" : undefined}
//             onBlur={() => {
//               setIsEdit(false);
//               onSetTodoName(id, tempName);
//             }}
//             onChange={(event) => {
//               setTempName(event.target.value);
//             }}
//             onKeyDown={({ key }) => {
//               if (key === "Enter") {
//                 setIsEdit(false);
//                 onSetTodoName(id, tempName);
//               } else if (key === "Escape") {
//                 setIsEdit(false);
//                 setTempName(name);
//               }
//             }}
//             value={tempName}
//           />
//         );
//}
