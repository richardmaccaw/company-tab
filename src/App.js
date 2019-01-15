import React, { Component } from 'react';
import API from './API'
import Nav from './components/Nav'
import Home from './routes/Home'
import LandingPage from './components/LandingPage'
import Announcements from './routes/Announcements'
import Settings from './routes/Settings'
import './App.css';

import firebase from 'firebase'
import { Route, Switch, Redirect } from "react-router-dom"


const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "companytab-227916.firebaseapp.com",
  databaseURL: "https://companytab-227916.firebaseio.com",
  projectId: "companytab-227916",
  storageBucket: "companytab-227916.appspot.com",
  messagingSenderId: "1092020664287"
}

firebase.initializeApp(config);

class App extends Component {

  state = {
    isSignedIn: false,
    firebaseUser: [],
    serverUser: [],
    announcements: []
  }

  componentDidMount = () => {
    this.authenticateUser()
  }

  authenticateUser = () => {
    this.authUser().then(firebaseUser => {
      this.setState({
        firebaseUser,
        isSignedIn: !!firebaseUser
      })
    }).then(this.findOrCreateUser)
  }

  authUser = () => {
    return new Promise(function (resolve, reject) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user)
        } else {
          reject(console.log('user not logged in'))
        }
      })
    })
  }


  findOrCreateUser = () => {
    const { displayName, uid, email } = this.state.firebaseUser
    const user = {
      name: displayName,
      uid: uid,
      domain: email.replace(/.*@/, "")
    }
    API.findOrCreateUser(user)
      .then(data => data && this.setState({serverUser: data, announcements: data.announcements}))
  }

  addAnnouncement = (announcement) => {
    this.setState({announcements: [announcement, ...this.state.announcements]})
  }

  deleteAnnouncement = (id) => {
    const announcements = this.state.announcements.slice().filter(announcement => announcement.id !== id)
    this.setState({announcements})
  }

  editAnnouncement = (editedAnnouncement) => {
    const announcements = this.state.announcements.map(announcement =>
      announcement.id === editedAnnouncement.id 
      ? {...announcement, 
          title: editedAnnouncement.title,
          description: editedAnnouncement.description}
      : announcement)
      this.setState({announcements})
  }

  render() {
    const { isSignedIn, announcements } = this.state
    const { authenticateUser } = this
    return (
      <div className="App">
        {isSignedIn && <Nav></Nav>}
        <Switch>
          <Route
            exact path='/'
            render={renderProps => isSignedIn ? 
              <Redirect to='/home'/>
              : 
              <LandingPage { ...renderProps} authenticateUser={authenticateUser} />
            }
          />
          
          <Route 
            exact path='/home'
            render={routerProps =>
              <Home 
                announcements={announcements}
                isSignedIn={isSignedIn}
                {...routerProps}/>}
          />
          <Route 
            path='/announcements' 
            render={routerProps => 
              <Announcements 
                serverUser={this.state.serverUser}
                isSignedIn={isSignedIn}
                announcements={announcements}
                addAnnouncement={this.addAnnouncement}
                deleteAnnouncement={this.deleteAnnouncement}
                editAnnouncement={this.editAnnouncement}
                {...routerProps}
              />
            } 
          />
          <Route 
            path='/settings'
            render={routerProps => 
              <Settings 
                isSignedIn={isSignedIn}
                {...routerProps}
              />
            } 
          />
          <Route component={() => <h1>404 - page not found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App

