const todoRouter = require('./todoRouter');

exports.apply = (app) => {
  app.use('/api/todos', todoRouter);
};
