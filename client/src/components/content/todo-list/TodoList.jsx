import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { v4 as uuid } from "uuid";
import Todo from "./todo/Todo";
import "./todoList.css";
import { useTodos } from "./TodoListHooks";

const TodoList = () => {
  const [todos, addTodo, removeTodo, setTodoCompleted, setTodoTitle] = useTodos([
    { id: uuid(), title: "Eat Boots", isCompleted: false },
    { id: uuid(), title: "Sleep", isCompleted: false },
    { id: uuid(), title: "Rap", isCompleted: false },
    { id: uuid(), title: "Repeat", isCompleted: false },
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
        .map(({ item: { id, title, isCompleted }, props, key }) => {
          return (
            <animated.div key={key} style={{ ...props }}>
              <Todo
                id={id}
                isCompleted={isCompleted}
                title={title}
                onRemove={removeTodo}
                onSetTodoCompleted={setTodoCompleted}
                onSetTodoTitle={setTodoTitle}
              />
            </animated.div>
          );
        })}
    </div>
  );
};

export default TodoList;
