import React, { Component } from 'react';
import Nav from './components/Nav'
import AnnouncementList from './AnnouncementContainer/AnnouncementList'
import TimezoneList from './TimezoneContainer/TimezoneList'

import './App.css';
import Grid from '@material-ui/core/Grid';



import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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
      signInSuccess: () => false
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
        {this.state.isSignedIn ?
          <>
            <Grid container>
              <Grid item xs={8}>
                <AnnouncementList></AnnouncementList>
              </Grid>
              <Grid item xs ={4}>
                <TimezoneList></TimezoneList>
              </Grid>
            </Grid>
            
          </>
          :
          <StyledFirebaseAuth 
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />}
      </div>
    );
  }
}

export default App
