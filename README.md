# todo-assistant
A system assisting on managing todo list. Users can simply add a new todo item via LINE BOT, or use it to link to an edit page where they can view or manage their todo list.

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

# Deploy application
At the root directory, run this command to deploy the application to your firebase project:
```
npm run deploy
```