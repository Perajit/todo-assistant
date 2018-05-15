const authRouter = require('./authRouter');

exports.apply = (app) => {
  app.use('/api/auth', authRouter);
};
