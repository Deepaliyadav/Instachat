import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCxZeyxZbp8JMq-Av1rqG7XfhbwXSZEljE",
    authDomain: "awesomeproject-acb122.firebaseapp.com",
    databaseURL: "https://awesomeproject-acb122.firebaseio.com",
    projectId: "awesomeproject-acb122",
    storageBucket: "",
    messagingSenderId: "702611237184",
    appId: "1:702611237184:web:e81046e0a7d6c875"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire