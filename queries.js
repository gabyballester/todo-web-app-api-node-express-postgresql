const pool = require('./config/db');

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

module.exports = {
  createQuery,
  allTodosQuery,
  oneTodoQuery
}
