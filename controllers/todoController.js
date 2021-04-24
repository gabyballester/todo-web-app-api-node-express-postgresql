const queries = require('../queries');

async function createTodo(req, res) {
  try {
    const { description } = req.body;
    const newTodo = await queries.createQuery(description);
    //devolvemos el objeto
    return res.json(newTodo.rows[0]);
  } catch (err) {
    return err;
  }
};

module.exports = {
  createTodo
}