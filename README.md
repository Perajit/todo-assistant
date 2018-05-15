# todo-assistant
A system assisting on managing todo list. Users can simply add a new todo item via LINE BOT, or use it to link to an edit page where they can view or manage their todo list.

## Overview
This project provides 2 ways of managing todo list.
- **LINE Bot**: handles adding and linking to Edit page
	>To add a new todo, chat with message in proper formats: **[task name] : [date] : [time]**
	The **[task name]** name can be any text.
	The **[date]** is in format **D/M/YY** or a text ***today*** / ***tomorrow***.
	The **[time]** is optional.
	
	>To link to Edit page, chat with message ***edit***
- **Edit Page**: shows all todo items and allow marking as completed or important

## Demo
- **LINE Bot**:
	>![QR code](https://image.ibb.co/c5orad/todo_assistant_bot_qr.png)
- **Edit page**: [link](https://fir-playground-fe11c.firebaseapp.com/login)

## Important Note
This project is based on [Firebase](https://firebase.google.com/) and contains 2 sub repositories inside:
- **client**: React application served as front-end UI
- **functions**: Firebase cloud functions for back-end APIs

## Prerequisites
- Create a new [Firebase](https://firebase.google.com/) project from your [Firebase Console](https://console.firebase.google.com/)
- Install [firebase-tools](https://github.com/firebase/firebase-tools)

## Install application
- Clone this repository
- Create .firebaserc file in the root directory with content
```
{
  "projects": {
    "default": "firebase-proj-name"
  }
}
```
(Replace the "firebase-proj-name" with your firebase project name)
- Run commmand:
```
npm run install-all
```

## Run application locally
At the root directory, run commmand:
```
npm start
```

## Run test
At the root directory, run commmand:
```
npm run test
```

## Deploy application
At the root directory, run this command to deploy the application to your firebase project:
```
npm run deploy
```
