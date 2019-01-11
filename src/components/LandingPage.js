import React from 'react'

import { Redirect } from "react-router-dom"


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'

const LandingPage = (props) => {

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
          callbacks: {
            signInSuccessWithAuthResult: () => window.location.assign('/home')
        }
      }
    return (
        <StyledFirebaseAuth uiConfig = {uiConfig} firebaseAuth = {firebase.auth()}/>
    )
}

export default LandingPage