const express = require('express');
const webhookController = require('./webhookController');

const router = express.Router();

router.post('', (req, res) => {
  webhookController.handleMessage(req, res);
});

module.exports = router;
