import React, { Component } from 'react';
import API from './API'
import Nav from './components/Nav'
import Home from './routes/Home'
import LandingPage from './components/LandingPage'
import Announcements from './routes/Announcements'
import Settings from './routes/Settings'
import './App.css';
import { json } from './seed'


import firebase from 'firebase'
import { Route, Switch, Redirect } from "react-router-dom"


const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "companytab-227916.firebaseapp.com",
  projectId: "companytab-227916",
}

firebase.initializeApp(config);

class App extends Component {

  state = {
    isSignedIn: false,
    serverAnnouncements: []
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user,
      })
    })
    this.fetchAnnouncements()
  }

  fetchAnnouncements = () => {
    API.getUser()
      .then( serverUser => this.setState({ serverAnnouncements: serverUser.company.announcements })
      )
  }


  render() {
    const { isSignedIn, announcements } = this.state
    return (
      <div className="App">
        {isSignedIn && <Nav></Nav>}
        <Switch>
          <Route
            exact path='/'
            render={renderProps => !isSignedIn ? 
              (<LandingPage {...renderProps}/>)
              : 
                (<Redirect to={{pathname: '/home'}}/>)
            }
          />
          <Route 
            path='/home'
            component={routerProps =>
              <Home 
                announcements={this.state.serverAnnouncements}
                isSignedIn={isSignedIn}
                {...routerProps}/>}
          />
          <Route 
            path='/announcements' 
            component={routerProps => 
              <Announcements 
                isSignedIn={isSignedIn}
                announcements={announcements}
                {...routerProps}
              />
            } 
          />
          <Route 
            path='/settings'
            component={routerProps => 
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

