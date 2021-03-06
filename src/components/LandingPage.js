import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { withRouter } from "react-router-dom"
import ui from "./ui.png"
import companyTabLogo from './companyTabLogo.png'


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app'

const CHROME_EXTENSION = '//chrome.google.com/webstore/detail/eopdbijdhipjhooipmeobbookdmpcocl/'

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
        <div className='lpNavContainer'>
                <div className='lpLogo'>
                    <img src={companyTabLogo} width='40' height='40'></img>
                    <Typography variant='body2'>CompanyTab</Typography>
                </div>
                <StyledFirebaseAuth uiConfig = {uiConfig} firebaseAuth = {firebase.auth()}/>
        </div>
        <div className="container">
            <div className="hero">
                <Typography className='hero_item hero_h1' variant="h4">A chrome extension to spread company announcements</Typography>
                <Typography className = 'hero_item hero_h2' variant = "subtitle1"> It gets harder to spread information as companies grow. Updates gets lost between departments, drowned out in Slack feeds or clutter inboxes. CompanyTab is a simple tool to help you spread announcements, important links and more to your employees.</Typography>
                <Button onClick={() => window.open(CHROME_EXTENSION, "_blank")} id="lpButton">Add the Chrome Extension</Button>
                <img className="hero_item" src={ui} alt='picture of the product ui'/>
            </div>
            
        </div>
        </>
    )
}

export default withRouter(LandingPage)