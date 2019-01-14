import React from 'react'
import AnnouncementList from '../Announcements/AnnouncementList'
import NewAnnouncement from '../Announcements/NewAnnouncement'

import { Button } from '@material-ui/core';

class Announcements extends React.Component {

    state = {
        dialogOpen: false,
    }

    componentDidMount () {
        const { isSignedIn, history } = this.props
        if (!isSignedIn) {
            history.push('/')
        }
    }

    toggleDialog = () => {
        this.setState({dialogOpen: !this.state.dialogOpen})
    }


    render () {
        return (
            <>
                <Button onClick={this.toggleDialog} variant='contained' color='primary'>New Announcement</Button>
                {this.state.dialogOpen && 
                    <NewAnnouncement 
                        toggleDialog={this.toggleDialog}
                        serverUser={this.props.serverUser}
                    ></NewAnnouncement>}
                <AnnouncementList
                    announcements={this.props.announcements}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                ></AnnouncementList>

            </>
        )
    }
}

export default Announcements
