const express = require("express");
const { getImage } = require("../../external-api/Images");
const router = express.Router();
const db = require("../../models/index");

//read todo
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const todos = await db.Todo.findAll({ where: { userId: Number(userId) } });
  if (todos.length) {
    return res.send(todos);
  } else {
    return res.sendStatus(422);
  }
});

//create todo
router.post("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await db.User.findOne({ where: { id: Number(userId) } }).catch(
    () => null
  );
  if (user === null) {
    return res.sendStatus(422);
  }

  const image = await getImage().catch(() => "");
  const todoTitle = req.body.title;
  if (todoTitle === undefined) {
    return res.sendStatus(422);
  }

  db.Todo.create({
    title: todoTitle,
    isCompleted: false,
    image,
    userId,
  });
  return res.sendStatus(200);
});

//delete todo by id
router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await db.User.findOne({ where: { id: Number(userId) } }).catch(
    () => null
  );
  if (user === null) {
    return res.sendStatus(422);
  }

  const todoId = req.body.id;
  const todo = await db.Todo.findOne({ where: { id: todoId } }).catch(
    () => null
  );
  if (todo === null) {
    return res.sendStatus(422);
  }

  await todo.destroy();
  return res.sendStatus(200);
});

//update
router.patch("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await db.User.findOne({ where: { id: Number(userId) } }).catch(
    () => null
  );
  if (user === null) {
    return res.sendStatus(422);
  }

  const { id, title, isCompleted } = req.body;
  if ([id, title, isCompleted].includes(undefined)) {
    // console.log(id, " ", title, " ", isCompleted);
    return res.sendStatus(422);
  }

  const todo = await db.Todo.findOne({ where: { id } });
  todo.title = title;
  todo.isCompleted = isCompleted;
  await todo.save();

  return res.sendStatus(200);
});

module.exports = router;
