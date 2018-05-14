const moment = require('moment');
const todoService = require('../../services/todoService');

const handleMessage = (req, res) => {
  const { events } = req.body;

  events
    .filter(filterEvent)
    .forEach(handleEvent);

  res.send(200);
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
    source: { userId },
    message: {
      id: messageId,
      text: messageText
    }
  } = event;

  if (messageText === 'edit') {
    handleEditing();
  }
  else {
    const todoInfo = extractTodoInfo(messageText);

    if (todoInfo) {
      handleAdding(Object.assign({}, todoInfo, { userId }));
    }
  }
};

const extractTodoInfo = (messageText) => {
  const [task, dateStr, timeStr] = messageText.split(' : ');
  const datetime = extractDateTime(dateStr, timeStr);

  return datetime ? {
    task,
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

// TODO
const handleEditing = () => {
  console.log('***** handle editing');
};

const handleAdding = (todo) => {
  todoService.addTodoData(todo);
};

module.exports = {
  handleMessage
};
