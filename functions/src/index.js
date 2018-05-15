const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const express = require('express');
const bodyParser = require('body-parser');
const authModule = require('./modules/auth');
const todoModule = require('./modules/todos');
const webhookModule = require('./modules/webhook');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Apply Modules
authModule.apply(app);
todoModule.apply(app);
webhookModule.apply(app);

exports.api = functions.https.onRequest(app);
