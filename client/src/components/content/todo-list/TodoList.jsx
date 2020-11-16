import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { v4 as uuid } from "uuid";
import Todo from "./todo/Todo";
import "./todoList.css";
import { useTodos } from "./TodoListHooks";

const TodoList = () => {
  const [todos, addTodo, removeTodo, setTodoDone, setTodoName] = useTodos([
    { id: uuid(), name: "Eat Boots", isDone: false },
    { id: uuid(), name: "Sleep", isDone: false },
    { id: uuid(), name: "Rap", isDone: false },
    { id: uuid(), name: "Repeat", isDone: false },
  ]);
  const [text, setText] = useState("");

  const animatedTodos = useTransition(todos, (todo) => todo.id, {
    from: { opacity: 0, transform: "translateX(-200px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(200px)" },
  });

  return (
    <div className="todoList">
      <h2>Todo List</h2>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button
        className="add"
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Add
      </button>
      {animatedTodos
        .reverse()
        .map(({ item: { id, name, isDone }, props, key }) => {
          return (
            <animated.div key={key} style={{ ...props }}>
              <Todo
                id={id}
                isDone={isDone}
                name={name}
                onRemove={removeTodo}
                onSetTodoDone={setTodoDone}
                onSetTodoName={setTodoName}
              />
            </animated.div>
          );
        })}
    </div>
  );
};

export default TodoList;
