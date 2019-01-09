import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Button, Avatar } from '@material-ui/core'
import firebase from 'firebase'


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
                    {firebase.auth().currentUser &&
                    <div className='nav'>
                        <div className='navLinks'>
                            <a href='#'>home</a>
                            <a href="#">announcements</a>
                            <a href="#">settings</a>
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
                    }
            </div>
        ) 
}

export default withStyles(styles)(Nav)