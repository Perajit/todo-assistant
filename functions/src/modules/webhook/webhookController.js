const functions = require('firebase-functions');
const moment = require('moment');
const todoService = require('../../services/todoService');
const messageService = require('../../services/messageService');

const {
  APP_URL
} = require('../../constants/configs');

const handleMessage = (req, res) => {
  const { events } = req.body;

  events
    .filter(filterEvent)
    .forEach(handleEvent);

  res.sendStatus  (200);
};

const filterEvent = (event) => {
  const {
    type,
    source,
    message
  } = event;

  return type === 'message'
    && source.type === 'user'
    && message && message.type === 'text';
};

const handleEvent = (event) => {
  const {
    replyToken,
    source: { userId },
    message: {
      id: messageId,
      text: messageText
    }
  } = event;

  if (messageText === 'edit') {
    handleEditing(replyToken);
  }
  else {
    const todoInfo = extractTodoInfo(messageText);

    if (todoInfo) {
      handleAdding(Object.assign({}, todoInfo, { userId }), replyToken);
    }
  }
};

const extractTodoInfo = (messageText) => {
  const [title, dateStr, timeStr] = messageText.split(' : ');
  const datetime = extractDateTime(dateStr, timeStr);

  return datetime ? {
    title,
    time: datetime
  } : null;
};

const extractDateTime = (dateStr, timeStr) => {
  let mDate;

  if (dateStr === 'today') {
    mDate = moment();
  }
  else if (dateStr === 'tomorrow') {
    mDate = moment().add(1, 'day');
  }
  else {
    mDate = moment(dateStr, 'D/M/YY', true);
  }

  if (!mDate.isValid()) {
    return null;
  }

  let hour;
  let minute;

  if (timeStr) {
    let mTime = moment(timeStr, 'H:m', true);
    if (mTime.isValid()) {
      hour = mTime.get('hour');
      minute = mTime.get('minute');
    }
  }
  else {
    hour = 12;
    minute = 0;
  }

  mDate.set('hour', hour);
  mDate.set('minute', minute);
  mDate.set('second', 0);

  return mDate.toDate();
};

const handleEditing = (replyToken) => {
  const message = {
    type: 'text',
    text: APP_URL
  };

  return messageService.replyMessages(replyToken, [message]);
};

const handleAdding = (todo, replyToken) => {
  return todoService.addTodoData(todo)
    .then((todo) => {
      const messasge = `Added todo "${todo.title}"`;
      return messageService.replyMessages(replyToken, [message]);
    })
    .catch((err) => {
      const messasge = `Failed to add todo "${todo.title}"`;
      messageService.replyMessages(replyToken, [message]);

      throw err;
    });
};

module.exports = {
  handleMessage
};
