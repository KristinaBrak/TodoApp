import React, { useEffect, useState } from "react";
import useAPI from "ApiHook";
import { SERVER_TODOS_URL, USER_ID } from "consts";
import Loader from "components/miscellaneous/Loader";
import Todo from "../todo-list/todo/Todo";
import TodoAddForm from "./todo-add-form/TodoAddForm";
import todoApi from "../todo-list/TodoAPI";

const Tododo = () => {
  const url = SERVER_TODOS_URL + "/" + USER_ID;
  const [todos, setTodos] = useState([]);
  const [loading, error, data, reload] = useAPI(url);

  const [addTodo, removeTodo, updateTodo] = todoApi(url, reload);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="todoList">
      <TodoAddForm addTodo={addTodo} />
      <div>
        {todos.reverse().map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              isCompleted={todo.isCompleted}
              image={todo.image}
              title={todo.title}
              onRemove={removeTodo}
              onSetTodoCompleted={updateTodo}
              onSetTodoTitle={updateTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tododo;
