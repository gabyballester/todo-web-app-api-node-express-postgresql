const pool = require('./db');

const createQuery = function (field) {
  return pool.query(
    "INSERT INTO todo (description) VALUES($1) RETURNING *",
    [field]
  );
}

const allTodosQuery = function (_) {
  return pool.query("SELECT * FROM todo")
}

const oneTodoQuery = function (id) {
  return pool.query(
    "SELECT * FROM todo WHERE todo_id = $1",
    [id]
  );
}

const updateTodoQuery = function (id, description) {
  return pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2",
    [description, id]
  );
}

const deleteTodoQuery = function (id) {
  return pool.query(
    "DELETE FROM todo WHERE todo_id = $1",
    [id]
  );
}

module.exports = {
  createQuery,
  allTodosQuery,
  oneTodoQuery,
  updateTodoQuery,
  deleteTodoQuery
}
