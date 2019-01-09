import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import { Button, Avatar } from '@material-ui/core'
import firebase from 'firebase'

const link = {
    color: 'grey',
}

const styles = {
    button: {
        color: '#444444'
    },
    root: {
        display: 'flex',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 50,
        height: 50
  },

};

const Nav = (props) => {
    const { classes } = props
        return (
            <div>
                <div className='nav'>
                    <div className='navLinks'>
                        <NavLink to ='/' exact style={link} activeStyle={{color: 'purple'}}>home</NavLink>
                        <NavLink to ='/announcements' exact style={link} activeStyle={{color: 'purple'}}>announcements</NavLink>
                        <NavLink to ='/settings' exact style={link} activeStyle={{color: 'purple'}}>settings</NavLink>
                    </div>
                    <div className='navButton'>
                        <Avatar 
                            alt="profile picture" 
                            src={firebase.auth().currentUser.photoURL} 
                            className={classes.bigAvatar}>
                        </Avatar>
                        <Button 
                            className={classes.button}
                            onClick={() => firebase.auth().signOut()}>Log out
                        </Button>
                    </div>
                </div>
                    
            </div>
        ) 
}

export default withStyles(styles)(Nav)