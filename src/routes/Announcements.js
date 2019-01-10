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

    handleEdit = () => {
        console.log('handle edit')
    }

    handleDelete = () => {
        console.log('handle delete')
    }

    render () {
        return (
            <>
                <Button variant='contained' color='primary'>New Announcement</Button>
                <AnnouncementList
                    announcements={json.announcements}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                ></AnnouncementList>
            </>
        )
    }
}

export default Announcements
