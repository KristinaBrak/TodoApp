const express = require("express");
const Todos = require("../../Todos");
const Users = require("../../Users");
const router = express.Router();

//read todo
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const foundUser = Users[userId];
  if (foundUser !== undefined) {
    const todos = Object.values(Todos.data.byId).reduce(
      (accumulator, { userId: todoUserId, ...currentValue }) =>
        todoUserId === userId ? [...accumulator, currentValue] : accumulator,
      []
    );
    res.send(todos);
  } else {
    res.sendStatus(422);
  }
});

//create todo
router.post("/:userId", (req, res) => {
  const userId = req.params.userId;
  if (Users[userId] === undefined) {
    res.sendStatus(422);
  }

  const todoTitle = req.body.title;
  if (todoTitle === undefined) {
    res.sendStatus(422);
  } else {
    Todos.data.lastId = Todos.data.lastId + 1;
    Todos.data.byId[Todos.data.lastId] = {
      id: Todos.data.lastId,
      title: todoTitle,
      isCompleted: false,
      userId: userId,
    };
  }
  res.sendStatus(200);
});

//delete todo by id
router.delete("/:userId", (req, res) => {
  const userId = req.params.userId;
  if (Users[userId] === undefined) {
    res.sendStatus(422);
  }

  const todoId = req.body.todoId;
  const todo = Todos.data.byId[todoId];
  if (todo === undefined) {
    res.sendStatus(422);
  } else {
    delete Todos.data.byId[todoId];
    res.sendStatus(200);
  }
});

//update todo
router.patch("/:userId", (req, res) => {
  const userId = req.params.userId;
  if (Users[userId] === undefined) {
    res.sendStatus(422);
  }

  const { id, title, isCompleted } = req.body;
  if ([id, title, isCompleted].includes(undefined)) {
    res.sendStatus(422);
  } else {
    Todos.data.byId[id].title = title;
    Todos.data.byId[id].isCompleted = isCompleted;
    res.sendStatus(200);
  }
});

module.exports = router;
