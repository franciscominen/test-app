import firebase from "firebase";
import "@firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC1YgT9FbJE11-E26bUnagT0xiSnhPSTtg",
    authDomain: "app-test-7b8d8.firebaseapp.com",
    projectId: "app-test-7b8d8",
    storageBucket: "app-test-7b8d8.appspot.com",
    messagingSenderId: "733988753178",
    appId: "1:733988753178:web:153671465a293e6f1566a3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const DB = firebase.firestore();