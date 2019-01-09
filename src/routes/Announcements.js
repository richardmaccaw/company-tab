import React from 'react'
import { json } from '../seed'
import AnnouncementList from '../Announcements/AnnouncementList'

import { Button } from '@material-ui/core';

class Announcements extends React.Component {
    state = {
        announcements: []
    }

    componentDidMount () {
        const { isSignedIn, history } = this.props
        if (!isSignedIn) {
            history.push('/')
        }
    }

    render () {
        return (
            <>
                <Button variant='contained' color='primary'>New Announcement</Button>
                <AnnouncementList announcements={json.announcements}></AnnouncementList>
            </>
        )
    }
}

export default Announcements
