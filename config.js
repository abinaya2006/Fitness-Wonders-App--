import firebase from 'firebase';
require("@firebase/firestore")

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5EPXuXrSjIqhPq1lylhG9bnbZg6HnEmM",
    authDomain: "fitnesswonders-9a20a.firebaseapp.com",
    projectId: "fitnesswonders-9a20a",
    storageBucket: "fitnesswonders-9a20a.appspot.com",
    messagingSenderId: "549906855684",
    appId: "1:549906855684:web:6b57a6eecd69b6ad8a4251"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
 } 

export default firebase.firestore();