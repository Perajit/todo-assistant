const functions = require('firebase-functions');
const querystring = require('querystring');
const jwt = require('jsonwebtoken');
require('isomorphic-fetch');

const {
  LINE_AUTH_TOKEN_ENDPOINT
} = require('../constants/endpoints');

const {
  LINE_CLIENT_ID
} = require('../constants/configs');

const LINE_CHN_SCR = functions.config().todo.chnscr;

const getAccessToken = (params) => {
  const payload = Object.assign({}, params, {
    grant_type: 'authorization_code',
    client_id: LINE_CLIENT_ID,
    client_secret: LINE_CHN_SCR
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify(payload)
  };

  return fetch(LINE_AUTH_TOKEN_ENDPOINT, requestOptions)
    .then((res) => {
      return res.json()
    });
};

const getUserProfile = (id_token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(id_token, LINE_CHN_SCR, (err, decoded) => {
      if (err) {
        reject(err);
      }

      resolve(decoded);
    });
  });
};

const getAuthUser = (payload) => {
  return getAccessToken(payload)
    .then((asscessToken) => {
      return getUserProfile(asscessToken.id_token);
    });
};

module.exports = {
  getAuthUser
};
