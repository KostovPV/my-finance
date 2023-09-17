import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB4GAZSr9kRoWjsFSPXTdVxkRBE_r0464w",
    authDomain: "my-finance-349c5.firebaseapp.com",
    projectId: "my-finance-349c5",
    storageBucket: "my-finance-349c5.appspot.com",
    messagingSenderId: "439392601376",
    appId: "1:439392601376:web:856f2df3dfd3f007a8c345"
  };

//   init firebase 
 firebase.initializeApp(firebaseConfig);

 //init service

 const projectFirestore = firebase.firestore();
 const projectAuth = firebase.auth();

 export{ projectFirestore, projectAuth}