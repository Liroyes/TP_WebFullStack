import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});

// #region API
/***************
 * FireBase API
 ***************/
const fireBaseAPI = {
  // *** Auth API ***
  getCurrentUser: function() {
    return firebaseApp.auth().currentUser;
  },

  createUserWithEmailAndPassword: function (email, password) {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  },

  signInWithEmailAndPassword: function (email, password) { 
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
  },

  signOut: function() {
    return firebaseApp.auth().signOut();
  }
}

// #endregion API


const FirebaseContext = React.createContext(fireBaseAPI);

export default FirebaseContext;
export {firebaseApp, fireBaseAPI};