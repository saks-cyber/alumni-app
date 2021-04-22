import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
   apiKey: "AIzaSyDaKkQsFuk7PbwV-0QyG2r-qmBf6yrm6A0",
  authDomain: "auth-dev-7485e.firebaseapp.com",
  projectId: "auth-dev-7485e",
  storageBucket: "auth-dev-7485e.appspot.com",
  messagingSenderId: "303053037685",
  appId: "1:303053037685:web:ddb74ef5c016c3058fd83c"
  };
  const app =firebase.initializeApp(firebaseConfig);
  export const auth = app.auth()
  export default app;