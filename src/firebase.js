import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDis_d7XcN7ausn1U9CYdHxNa0dCmznRYQ",
  authDomain: "clone-8defd.firebaseapp.com",
  databaseURL: "https://clone-8defd.firebaseio.com",
  projectId: "clone-8defd",
  storageBucket: "clone-8defd.appspot.com",
  messagingSenderId: "212176761363",
  appId: "1:212176761363:web:ba26003e82bf439dd5c5e6",
  measurementId: "G-J2TMQHXJ29"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };