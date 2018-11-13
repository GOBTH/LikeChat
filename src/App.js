// import React, { Component } from "react"
// import "./App.css"
// import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import PropTypes from 'prop-types'
// //import OnlineList from '../OnlineList'
// import Chat from './components/Chat'

// firebase.initializeApp({
//   apiKey: "AIzaSyAN7x6MKygL0IwALb9JNN_IPjGyk1RvUhI",
//   authDomain: "chatapp-eff71.firebaseapp.com",
//   databaseURL: "https://chatapp-eff71.firebaseio.com",
//   projectId: "chatapp-eff71",
//   storageBucket: "chatapp-eff71.appspot.com",
//   messagingSenderId: "613997886274",
// })

// class App extends Component {
//   state = { isSignedIn: false }
//   uiConfig = {
//     signInFlow: "popup",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     ],
//     callbacks: {
//       signInSuccess: () => false
//     }
//   }

//   componentDidMount = () => {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: !!user })
//       console.log("user", user)
//     })
//   }

//   render() {
//     const { avatarUrl,
//       displayName,
//       authExists,
//       authLoaded,
//       handleLogout,
//       googleLogin,
//       loadChat,
//       user
//     } = this.props;
//     return (
//       <div class="App">
//         {this.state.isSignedIn ? (
//           <span>
//             <br/>
//             <button class="buttonn" onClick={() => firebase.auth().signOut()}>Sign out!</button>
//             <h2>Successful Signed In!</h2>
//             <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
//             <img  alt="profile picture" src={firebase.auth().currentUser.photoURL} width="300" height="300" />
//             <div className="container clearfix">
//               <Chat user={user} />
//             </div>
//           </span>
//         ) : (
//           <StyledFirebaseAuth
//             uiConfig={this.uiConfig}
//             firebaseAuth={firebase.auth()}
//           />
//         )}
//       </div>
//     )
//   }
// }

// export default App;
import React from 'react'
import { Provider } from 'react-redux'
import Home from './components/Home'
import configureStore from './firebase/store'
import "./App.css"
const initialState = window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState)

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);