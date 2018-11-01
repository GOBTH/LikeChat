import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyAN7x6MKygL0IwALb9JNN_IPjGyk1RvUhI",
  authDomain: "chatapp-eff71.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div class="App">
        {this.state.isSignedIn ? (
          <span>
            <br/>
            <button class="buttonn" onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h2>Successful Signed In!</h2>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img  alt="profile picture" src={firebase.auth().currentUser.photoURL} width="300" height="300" />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App
