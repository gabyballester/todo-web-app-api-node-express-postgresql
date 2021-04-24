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

module.exports = {
  createQuery,
  allTodosQuery,
}
