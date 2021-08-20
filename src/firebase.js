// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gender from "./components/gender.js";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBMitzZRVHSCT7et6-wCASei8N4dbKywhU",
  authDomain: "hostel-booking-app-968e5.firebaseapp.com",
  projectId: "hostel-booking-app-968e5",
  storageBucket: "hostel-booking-app-968e5.appspot.com",
  messagingSenderId: "47768331712",
  appId: "1:47768331712:web:6e0b6e7f0dddc2184dd425",
  measurementId: "G-86LEEN5RP8",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: "sadf",
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    },
  },
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default firebase;
export { SignInScreen };

// {'callbacks':
// { 'signInSuccess': function(currentUser, credential, redirectUrl) {
//   var user = currentUser;
//   var authenticated_URL = redirectUrl;
//   if (user != null)
//   {
//     return true;
//     authenticated_URL = 'https://google.com';
//   authenticated_URL = '<my-website's-protected-page>; } else { return false; } }
// }}
