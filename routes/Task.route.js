const express = require("express");
const { userLogin } = require("../controllers/User.controller");
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/Task.controller");

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks/new", addTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
