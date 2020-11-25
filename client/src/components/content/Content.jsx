import React from "react";
import TodoList from "./todo-list/TodoList";
import HomePage from "./home-page/HomePage";
import { Switch, Route } from "react-router-dom";
import Tododo from "./tododo/Tododo";

const Content = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/todos" component={Tododo} />
    </Switch>
  );
};

export default Content;
