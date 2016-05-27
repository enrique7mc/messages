import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQA2T1JEm51AH64YPcA-5jdyQi9aUV9cg",
    authDomain: "react-chat-ebab2.firebaseapp.com",
    databaseURL: "https://react-chat-ebab2.firebaseio.com",
    storageBucket: "react-chat-ebab2.appspot.com",
};

firebase.initializeApp(config);

module.exports = firebase;
