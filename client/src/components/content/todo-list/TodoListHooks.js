import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useTodos = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const todo = {
      id: uuid(),
      title: text,
      isCompleted: false,
    };
    const updatedTodos = [...todos, todo];

    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const setTodoCompleted = (id) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.filter((todo) => todo.id === id);
    todo[0].isCompleted = !todo[0].isCompleted;
    setTodos(updatedTodos);
  };

  const setTodoTitle = (id, value) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.filter((todo) => todo.id === id);
    todo[0].title = value;
    setTodos(updatedTodos);
  };

  return [todos, addTodo, removeTodo, setTodoCompleted, setTodoTitle];
};
