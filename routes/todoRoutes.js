const express = require("express");
const TodoController = require('../controllers/todoController');

const api = express.Router();

// Crear un todo
api.post("/todos", TodoController.createTodo);
// Mostrar todos los todos
api.get("/todos", TodoController.getAllTodos);
// Mostrar 1 todo
api.get("/todos/:id", TodoController.getOneTodo);
// Actualizar 1 todo
api.put("/todos/:id", TodoController.updateTodo);
// Borrar 1 todo
api.delete("/todos/:id", TodoController.deleteTodo);


module.exports = api;