import React from 'react'
import AnnouncementList from '../Announcements/AnnouncementList'

import { Button } from '@material-ui/core';

class Announcements extends React.Component {

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
                    announcements={this.props.announcements}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                ></AnnouncementList>
            </>
        )
    }
}

export default Announcements
