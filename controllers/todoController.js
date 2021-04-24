const queries = require('../config/queries');

async function createTodo(req, res) {
  try {
    const { description } = req.body;
    const newTodo = await queries.createQuery(description);
    //devolvemos el objeto
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

async function getAllTodos(req, res) {
  try {
    const todos = await queries.allTodosQuery();
    res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
  }
};

async function getOneTodo(req, res) {
  try {
    const { id } = req.params;
    const todo = await queries.oneTodoQuery(id);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await queries
      .updateTodoQuery(id, description);
    if (updatedTodo.rowCount !== 0) {
      res.json({ message: "Updated!", updatedTodo: description });
    } else {
      res.json({ message: "Not Updated!", count: updatedTodo.rowCount, });
    }
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getOneTodo,
  updateTodo
}

