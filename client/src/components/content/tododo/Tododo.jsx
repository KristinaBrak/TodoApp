import React, { useEffect, useState } from "react";
import useAPI from "ApiHook";
import { SERVER_TODOS_URL, USER_ID } from "consts";
import Loader from "components/miscellaneous/Loader";
import Todo from "../todo-list/todo/Todo";

const Tododo = () => {
  const [loading, error, todos] = useAPI(SERVER_TODOS_URL + "/" + USER_ID);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {todos
        ? todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                isCompleted={todo.isCompleted}
                title={todo.title}
                onRemove={() => {}}
                onSetTodoCompleted={() => {}}
                onSetTodoTitle={() => {}}
              />
            );
          })
        : null}
    </div>
  );
};

export default Tododo;
