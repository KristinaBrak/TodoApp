const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const Todos = require("../../Todos");

//create new user
router.post("/:userId", (req, res) => {
  const userId = req.params.userId;
  console.log(req.params.userId);
  if (Todos[userId] === undefined) {
    const newUserId = uuid();
    const todos = req.body;
    if (todos === undefined) {
      Todos[newUserId] = [];
    } else {
      Todos[newUserId] = todos;
    }
    res.sendStatus(200);
  } else {
    res.sendStatus(422);
  }
});

router.delete("/:userId", (req, res) => {
  const userId = req.params.userId;
  const todos = Todos[userId];
  if (todos !== undefined) {
    console.log(Todos.join);
    delete Todos[userId];
    console.log(Todos[userId]);
    res.sendStatus(200);
  } else {
    res.sendStatus(422);
  }
});
module.exports = router;
