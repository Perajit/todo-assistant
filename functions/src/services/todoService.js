// FIXME
const getTodosData = (conditions) => {
  return new Promise((resolve, reject) => {
    resolve([
      { id: '1', title: 'task 1', datetime: new Date('2019-05-06'), userId: '1234' },
      { id: '2', title: 'task 2', datetime: new Date('2019-05-05'), userId: '1234' },
      { id: '3', title: 'task 3', datetime: new Date('2019-05-04'), userId: '1234' },
      { id: '4', title: 'task 4', datetime: new Date('2019-05-03'), userId: '1234' },
    ]);
  });
};

// FIXME
const addTodoData = (data) => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

// FIXME
const updateTodoData = (id, data) => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

module.exports = {
  getTodosData,
  addTodoData,
  updateTodoData
};
