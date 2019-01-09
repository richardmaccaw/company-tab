import React, { Component } from 'react';
import Home from './routes/home'
import Nav from './components/Nav'
import './App.css';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'
import { Route, withRouter, Switch } from "react-router-dom"


const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "companytab-227916.firebaseapp.com",
  projectId: "companytab-227916",
}

firebase.initializeApp(config);

class App extends Component {

  state = {
    isSignedIn: false,
    user: []
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user,
        user
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>
        {this.state.isSignedIn ? <Home></Home> : <StyledFirebaseAuth uiConfig = {this.uiConfig} firebaseAuth = {firebase.auth()}/>}
      </div>
    )
  }
}

export default App
