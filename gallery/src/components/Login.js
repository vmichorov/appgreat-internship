import React from "react";
import { GoogleAuthProvider } from "firebase/auth";

import firebase from "../firebase";

class Login extends React.Component {
  onLogin = async () => {
    let provider = new GoogleAuthProvider();
    firebase.auth().setPersistence("session");
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        firebase.auth().updateCurrentUser(result.user.providerData);
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            window.location.assign("/");
          }
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div className="login" style={{ marginTop: "25%" }}>
        <button className="btn btn-success" onClick={this.onLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
