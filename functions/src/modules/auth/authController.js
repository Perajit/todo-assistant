const authService = require('../../services/authService');

const getAuthUser = (resultName, req, res) => {
  const params = req.body;

  _execute(authService.getAuthUser(params), resultName, res);
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
  getAuthUser
};
