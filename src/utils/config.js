import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDP_rY62A6NlZ7TUDfsxU0cYPrfPVxuM_I",
    authDomain: "travel-1199d.firebaseapp.com",
    databaseURL: "https://travel-1199d.firebaseio.com",
    projectId: "travel-1199d",
    storageBucket: "travel-1199d.appspot.com",
    messagingSenderId: "187283010844"
  };

  firebase.initializeApp(config);

  export const Provider = new firebase.auth.TwitterAuthProvider();
  
  export const auth = firebase.auth()


