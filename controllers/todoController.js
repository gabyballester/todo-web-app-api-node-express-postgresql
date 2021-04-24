const queries = require('../queries');

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

async function allTodos(req, res) {
  try {
    const allTodos = await queries.allTodosQuery();
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
};

async function oneTodo(req, res) {
  try {
    const { id } = req.params;
    const allTodos = await queries.oneTodoQuery(id);
    res.json(allTodos.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  createTodo,
  allTodos,
  oneTodo
}