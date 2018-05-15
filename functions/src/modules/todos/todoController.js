const todoService = require('../../services/todoService');

const getTodos = (resultName, req, res) => {
  const conditions = req.query;

  _execute(todoService.getTodosData(conditions), resultName, res);
};

const addTodo = (resultName, req, res) => {
  const data = req.body;

  _execute(todoService.addTodoData(data), resultName, res);
};

const updateTodo = (resultName, req, res) => {
  const { id } = req.params;
  const data = req.body;

  _execute(todoService.updateTodoData(id, data), resultName, res);
};

const _execute = (query, resultName, res) => {
  query
    .then(data => {
      return res.json({
        status: true,
        [resultName]: data
      })
    })
    .catch(err => {
      res.json({
        status: false,
        error: err.message
      })
    });
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo
};
