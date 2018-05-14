const functions = require('firebase-functions');
require('isomorphic-fetch');

const {
  LINE_BOT_REPLY_ENDPOINT
} = require('../constants/endpoints');

const LINE_BOT_ACC_TOKEN = functions.config().todo_assistant.line_bot_acc_token;

const replyMessages = (replyToken, messages) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${LINE_BOT_ACC_TOKEN}`
    },
    body: JSON.stringify({
      replyToken,
      messages
    })
  };

  return fetch(LINE_BOT_REPLY_ENDPOINT, requestOptions)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

module.exports = {
  replyMessages
};
