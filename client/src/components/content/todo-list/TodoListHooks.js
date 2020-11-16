import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useTodos = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const todo = {
      id: uuid(),
      name: text,
      isDone: false,
    };
    const updatedTodos = [...todos, todo];

    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const setTodoDone = (id) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.filter((todo) => todo.id === id);
    todo[0].isDone = !todo[0].isDone;
    setTodos(updatedTodos);
  };

  const setTodoName = (id, value) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.filter((todo) => todo.id === id);
    todo[0].name = value;
    setTodos(updatedTodos);
  };

  return [todos, addTodo, removeTodo, setTodoDone, setTodoName];
};
