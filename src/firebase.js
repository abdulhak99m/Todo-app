import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDqU4Vpc8NzAQYe7sGosbxpgsG-y2W4cEw",
    authDomain: "todo-app-21f9d.firebaseapp.com",
    projectId: "todo-app-21f9d",
    storageBucket: "todo-app-21f9d.appspot.com",
    messagingSenderId: "291798809530",
    appId: "1:291798809530:web:e27b855259d3f307eebb83"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export const db = fire.database().ref();

  export default fire;
