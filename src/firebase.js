import React, { Component } from "react";
import Combined from "./components/Combined";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyBMitzZRVHSCT7et6-wCASei8N4dbKywhU",
  authDomain: "hostel-booking-app-968e5.firebaseapp.com",
});

class SignInScreen extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user, firebase.auth());
    });
  };

  render() {
    return (
      <>
        {this.state.isSignedIn && (
          <button
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Logout
          </button>
        )}
        <div className="App">
          {this.state.isSignedIn ? (
            <div>
              <Combined />
            </div>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </>
    );
  }
}

export default firebase;
export { SignInScreen };
