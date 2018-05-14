const admin = require('firebase-admin');

const db = admin.firestore();
const collectionRef = db.collection('todos');

const getTodosData = (conditions) => {
  return _queryByConditions(conditions)
    .then(_getDataListFromSnapshot);
};

const addTodoData = (data) => {
  const { userId } = data;
  const tail = Number(new Date()).toString(36);
  const generatedId = `${userId}_${tail}`;

  return _saveDocById(generatedId, Object.assign({}, data, { id: generatedId }));
};

const updateTodoData = (id, data) => {
  return _saveDocById(id, data);
};

const _queryByConditions = (conditions) => {
  return _getQueryByConditions(conditions).get();
};

const _getQueryByConditions = (conditions) => {
  let query = collectionRef;

  for (let key in conditions) {
    console.log({ key, value: conditions[key]})
    query = query.where(key, '==', conditions[key]);
  }

  return query;
};

const _saveDocById = (id, data) => {
  return _getDocById(id).set(data, { merge: true });
};

const _getDocById = (id) => {
  return collectionRef.doc(id)
};

const _getDataListFromSnapshot = (snapshot) => {
  let list = [];

  snapshot.forEach((doc) => {
    list.push(doc.data());
  });

  return list;
};

module.exports = {
  getTodosData,
  addTodoData,
  updateTodoData
};
