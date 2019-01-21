import React, { Component } from 'react';
import API from './API'
import Nav from './components/Nav'
import Home from './routes/home'
import LandingPage from './components/LandingPage'
import Announcements from './routes/Announcements'
import Settings from './routes/Settings'
import './App.css';

import firebase from 'firebase/app'
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
    announcements: [],
    links: [],
    timezones: [],
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
      .then(serverUser => serverUser && 
        this.setState(
          {
            serverUser,
            announcements: serverUser.announcements.sort((a,b) => b.id - a.id),
            links: serverUser.links,
            timezones: serverUser.timezones
          }
        )
      )
  }


  addStateItem = (type, item) => {
    this.setState({
      [type]: [item, ...this.state[type]]
    })
  }

  deleteStateItem = (type, id) => {
    const newType = this.state[type].slice().filter(item => item.id !== id)
    this.setState({
      [type]: newType
    })
  }

  editAnnouncement = (editedAnnouncement) => {
    const announcements = this.state.announcements.map(announcement =>
      announcement.id === editedAnnouncement.id 
      ? {...announcement, 
          title: editedAnnouncement.title,
          description: editedAnnouncement.description,
          published: editedAnnouncement.published
        }
      : announcement)
      this.setState({announcements})
  }

  editLink = (editedLink) => {
    const links = this.state.links.map(link =>
      link.id === editedLink.id ?
      { ...link,
        name: editedLink.name,
        url: editedLink.url,
      } :
      link)
    this.setState({
      links
    })
  }

  editTimezone = (editedTimezone) => {
    const timezones = this.state.timezones.map(timezone =>
      timezone.id === editedTimezone.id ? { ...timezone,
        name: editedTimezone.name,
        zone: editedTimezone.zone,
      } :
      timezone)
    this.setState({
      timezones
    })
  }

  render() {
    const { isSignedIn, announcements, serverUser, links, timezones } = this.state
    return (
      <div className="App">
        {isSignedIn && <Nav></Nav>}
        <Switch>
          <Route
            exact path='/'
            render={renderProps => isSignedIn ? 
              <Redirect to='/home'/> : <LandingPage { ...renderProps} authenticateUser={this.authenticateUser} />
            }
          />
          <Route 
            exact path='/home'
            render={routerProps =>
              <Home 
                timezones={timezones}
                links={links}
                announcements={announcements}
                isSignedIn={isSignedIn}
                {...routerProps}/>}
          />
          <Route 
            exact path='/announcements' 
            render={routerProps => 
              <Announcements 
                serverUser={serverUser}
                isSignedIn={isSignedIn}
                announcements={announcements}
                addStateItem={this.addStateItem}
                deleteStateItem={this.deleteStateItem}
                editAnnouncement={this.editAnnouncement}
                {...routerProps}
              />
            } 
          />
          <Route 
            exact path='/settings'
            render={routerProps => 
              <Settings 
                addStateItem={this.addStateItem}
                deleteStateItem={this.deleteStateItem}
                serverUser={serverUser}
                editTimezone={this.editTimezone}
                editLink={this.editLink}
                timezones={timezones}
                links={links}
                isSignedIn={isSignedIn}
                {...routerProps}
              />
            } 
          />
          <Route component={() => <h1>How did you break this?! - 404 page not found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App

