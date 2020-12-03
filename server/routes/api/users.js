const express = require("express");
const db = require("../../models/index");
const router = express.Router();

//create new user
router.post("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await db.User.findOne({ where: { id: Number(userId) } }).catch(
    () => null
  );

  if (user === null) {
    const name = req.body.name;
    await db.User.create({
      name: name,
    });
    return res.sendStatus(200);
  }
  return res.sendStatus(422);
});

router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;

  const todos = await db.Todo.findAll({ where: { userId } }).catch(() => null);
  if (todos !== null) {
    todos.map(async (todo) => {
      await todo.destroy();
    });
  }

  const user = await db.User.findOne({ where: { id: userId } }).catch(
    () => null
  );
  await user.destroy();
  return res.sendStatus(200);
});
module.exports = router;
