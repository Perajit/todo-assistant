const express = require('express');
const todoController = require('./todoController');

const router = express.Router();

router.get('', (req, res) => {
  todoController.getTodos('todos', req, res);
});

router.post('', (req, res) => {
  todoController.addTodo('added', req, res);
});

router.put('/:id', (req, res) => {
  todoController.updateTodo('updated', req, res);
});

module.exports = router;
