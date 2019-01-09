import React, { Component } from 'react';
import Nav from './components/Nav'
import Home from './routes/Home'
import LandingPage from './components/LandingPage'
import Announcements from './routes/Announcements'
import './App.css';
import { json } from './seed'


import firebase from 'firebase'
import { Route, Switch } from "react-router-dom"


const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "companytab-227916.firebaseapp.com",
  projectId: "companytab-227916",
}

firebase.initializeApp(config);

class App extends Component {

  state = {
    isSignedIn: false,
    user: [],
    announcements: json.announcements
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
        {this.state.isSignedIn && <Nav></Nav>}
        <Switch>
          <Route exact path='/' component={this.state.isSignedIn ? Home : LandingPage} />
          <Route path='/announcements' component={routerProps => 
              <Announcements 
                isSignedIn={this.state.isSignedIn}
                {...routerProps}
              />
            } 
          />
          <Route path='/settings' component={() => <h1>Settings</h1>} />
          <Route component={() => <h1>404 - page not found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App

