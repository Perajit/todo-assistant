const functions = require('firebase-functions');
const querystring = require('querystring');
const jwt = require('jsonwebtoken');
require('isomorphic-fetch');

const {
  LINE_AUTH_ENDPOINT,
  LINE_AUTH_TOKEN_ENDPOINT
} = require('../constants/endpoints');

const {
  APP_URL,
  LINE_CLIENT_ID
} = require('../constants/configs');

const LINE_CHN_SCR = functions.config().todo_assistant.line_chn_scr;

const getLoginUrl = () => {
  const state = Math.random().toString(36).substr(2); // Generate random alphanumeric

  return `${LINE_AUTH_ENDPOINT}?response_type=code&scope=openid%20profile&client_id=${LINE_CLIENT_ID}&redirect_uri=${APP_URL}&state=${state}`;
};

const getAccessToken = (params) => {
  console.log({
    payload: Object.assign({}, params, {
      grant_type: 'authorization_code',
      client_id: LINE_CLIENT_ID,
      client_secret: LINE_CHN_SCR,
      redirect_uri: APP_URL
    })
  })
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify(Object.assign({}, params, {
      grant_type: 'authorization_code',
      client_id: LINE_CLIENT_ID,
      client_secret: LINE_CHN_SCR,
      redirect_uri: APP_URL
    }))
  };

  return fetch(LINE_AUTH_TOKEN_ENDPOINT, requestOptions)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
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
  getLoginUrl,
  getAuthUser
};
