import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyB7fOtbw9uU4Pvm2pUpxHyGBfzCDZg2iTk",
    authDomain: "keep-it-1b18a.firebaseapp.com",
    databaseURL: "https://keep-it-1b18a-default-rtdb.firebaseio.com",
    projectId: "keep-it-1b18a",
    storageBucket: "keep-it-1b18a.appspot.com",
    messagingSenderId: "409929463024",
    appId: "1:409929463024:web:1512d41101392078d27e35"
  };
  // Initialize Firebaseex
  firebase.initializeApp(firebaseConfig);

export default firebase.database();
