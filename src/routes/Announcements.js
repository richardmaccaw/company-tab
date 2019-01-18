import React from 'react'
import AnnouncementList from '../Announcements/AnnouncementList'
import NewAnnouncement from '../Announcements/NewAnnouncement'

import { Button } from '@material-ui/core';
import API from '../API';

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

    destroyAnnouncement = (id) => {
        API.deleteAnnouncement(id).then(
            (resp) => this.props.deleteStateItem('announcements', resp.id)
        )
    }

    patchAnnouncement = (announcement) => {
        API.patchAnnouncement(announcement).then(
            resp => this.props.editAnnouncement(resp)
        )
    }


    render () {
        return (
            <>
                <Button onClick={this.toggleDialog} variant='contained' color='primary'>New Announcement</Button>
                {this.state.dialogOpen && 
                    <NewAnnouncement 
                        addStateItem={this.props.addStateItem}
                        toggleDialog={this.toggleDialog}
                        serverUser={this.props.serverUser}
                    ></NewAnnouncement>}
                <AnnouncementList
                    announcements={this.props.announcements}
                    handleEdit={this.patchAnnouncement}
                    handleDelete={this.destroyAnnouncement}
                ></AnnouncementList>

            </>
        )
    }
}

export default Announcements
