const express = require('express');
const authController = require('./authController');

const router = express.Router();

router.get('', (req, res) => {
  authController.redirectToLogin(req, res);
});

router.post('/verify', (req, res) => {
  authController.getAuthUser('user', req, res);
});

module.exports = router;
