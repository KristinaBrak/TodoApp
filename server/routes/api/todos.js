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
  const todoTitle = req.body.title;
  console.log(userId);
  if (todoTitle !== undefined && userId !== undefined) {
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
//TODO add user authenticating if
router.delete("/:userId", (req, res) => {
  const todoId = req.body.todoId;
  const todo = Todos.data.byId[todoId];
  if (todo !== undefined) {
    delete Todos.data.byId[todoId];
    if (todoId === Todos.data.lastId) {
      const keys = Object.keys(Todos.data.byId);
      const maxValue = keys.reduce((max, todo) => {
        const todoVal = parseInt(todo);
        if (todoVal > max) {
          max = todoVal;
        }
        return max;
      }, 0);
      Todos.data.lastId = maxValue;
    }
    res.sendStatus(200);
  } else {
    res.sendStatus(200);
  }
});

router.patch("/:userId", (req, res) => {
  const userId = req.params.userId;
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
