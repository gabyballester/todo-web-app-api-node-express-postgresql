const pool = require('./config/db');

const createQuery = function (field){
  return pool.query(
    "INSERT INTO todo (description) VALUES($1) RETURNING *",
    [field]
  );
}

module.exports = {
  createQuery,
}
