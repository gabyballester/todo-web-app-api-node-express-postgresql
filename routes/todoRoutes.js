const express = require("express");
const TodoController = require('../controllers/todoController');

const api = express.Router();

// Crear un todo
api.post("/todos", TodoController.createTodo);
// Mostrar todos los todos
api.get("/todos", TodoController.getAllTodos);
// Mostrar todos los todos
api.get("/todos/:id", TodoController.getOneTodo);
// Mostrar todos los todos
api.put("/todos/:id", TodoController.updateTodo);

module.exports = api;