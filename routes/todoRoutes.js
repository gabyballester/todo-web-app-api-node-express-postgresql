const express = require("express");
const TodoController = require('../controllers/todoController');

const api = express.Router();

// Crear un todo
api.post("/todos", TodoController.createTodo);
// Mostrar todos los todos
api.get("/todos", TodoController.allTodos);
// Mostrar todos los todos
api.get("/todos/:id", TodoController.oneTodo);

module.exports = api;