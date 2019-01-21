import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { withRouter } from "react-router-dom"
import ui from "./ui.png"
import companyTabLogo from './companyTabLogo.png'


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app'


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
        <>
        <div className='logoContainer'>
            <img className='logo_item' src={companyTabLogo} width='40' height='40'></img>
            <Typography className='logo_item' variant='body2'>CompanyTab</Typography>
        </div>
        <div className="container">
            <div className="hero">
                <Typography className='hero_item hero_h1' variant="h4">A chrome extension to spread company announcements</Typography>
                <Typography className = 'hero_item hero_h2' variant = "subtitle1"> It gets harder to spread information as companies grow. Knowledge gets lost between departments. CompanyTab helps you spread announcements, important links and more to your employees.</Typography>
                <StyledFirebaseAuth className="hero_item" uiConfig = {uiConfig} firebaseAuth = {firebase.auth()}/>
                <img className="hero_item" src={ui} alt='picture of the product ui'/>
            </div>
            
        </div>
        </>
    )
}

export default withRouter(LandingPage)