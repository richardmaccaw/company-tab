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
  projectId: "companytab-227916",
}

firebase.initializeApp(config);

class App extends Component {

  state = {
    isSignedIn: false,
    user: [],
    announcements: []
  }

  componentDidMount = () => {
   this.authUser().then(user => {
     this.setState({user, isSignedIn: true})
    }).then(this.getUser)
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

  getUser = () => {
    API.getUser(this.state.user.uid)
      .then(data => this.setState({announcements: data.announcements}))
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
            exact path='/home'
            component={routerProps =>
              <Home 
                announcements={announcements}
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

