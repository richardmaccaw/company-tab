import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { withRouter } from "react-router-dom"


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'


const LandingPage = (props) => {
    
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
          callbacks: {
            signInSuccessWithAuthResult: () => {
                props.authenticateUser()
                props.history.push('/home')
            }
        }
      }

    return (
        <div className="container">
            <div className="hero">
                <Typography className='hero_item' variant="h3">The easiest way to spread information</Typography>
                <StyledFirebaseAuth className="hero_item" uiConfig = {uiConfig} firebaseAuth = {firebase.auth()}/>
            </div>
        </div>
    )
}

export default withRouter(LandingPage)