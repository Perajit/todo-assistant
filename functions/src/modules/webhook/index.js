const webhookRouter = require('./webhookRouter');

exports.apply = (app) => {
  app.use('/api/webhook', webhookRouter);
};
