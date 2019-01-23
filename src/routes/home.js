import React from 'react';
import AnnouncementList from '../Home/AnnouncementContainer/AnnouncementList'
import TimezoneList from '../Home/TimezoneContainer/TimezoneList'
import LinksList from '../Home/LinksContainer/LinksList'

import Grid from '@material-ui/core/Grid';
import firebase from 'firebase'


class Home extends React.Component {

    componentDidMount () {
        if (!firebase.auth().currentUser) {
            this.props.history.push('/')
        }
    }

    render () {
        const { announcements, links, timezones } = this.props
        return <>
            <Grid 
                container
                justify="space-between"
            >
                <Grid item xs={12} sm={8}>
                    <AnnouncementList announcements={announcements}></AnnouncementList>
                </Grid>
                <Grid item xs={2} >
                    <Grid spacing={32} container direction='column'>
                        <Grid item>
                            <TimezoneList timezones={timezones}></TimezoneList>
                        </Grid>
                        <Grid item>
                            <LinksList links={links}></LinksList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    }
}
export default Home