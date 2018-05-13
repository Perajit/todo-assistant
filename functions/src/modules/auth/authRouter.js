const express = require('express');
const authController = require('./authController');

const router = express.Router();

router.post('', (req, res) => {
  authController.getAuthUser('user', req, res);
});

module.exports = router;
