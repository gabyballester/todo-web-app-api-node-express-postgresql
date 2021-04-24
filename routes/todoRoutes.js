const express = require("express");
const TodoController = require('../controllers/todoController');

const api = express.Router();

// Crear un todo
api.post("/todos", TodoController.createTodo);

module.exports = api;