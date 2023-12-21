import express from "express";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} from "../controller/todo.controllers.js";

const router = express.Router();

// add a todo
// POST localhost:5000/todos/
router.post("/", addTodo);

// GET localhost:5000/todos/
// get todos
router.get("/", getTodos);

// PUT localhost:5000/todos/12312312312414
// update a todo
router.put("/:id", updateTodo);

// remove a todo
router.delete("/:id", deleteTodo);

export default router;
