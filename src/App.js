import React, { Component } from 'react';
import Home from './routes/Home'
import LandingPage from './components/LandingPage'
import './App.css';

import firebase from 'firebase'
import { Route, Link, Switch } from "react-router-dom"


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
        <Switch>
          <Route exact path='/' component={this.state.isSignedIn ? Home : LandingPage} />
          <Route path='/announcements' component={() => <h1>Announcements</h1>} />
          <Route path='/settings' component={() => <h1>Settings</h1>} />
          <Route component={() => <h1>404 - page not found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
