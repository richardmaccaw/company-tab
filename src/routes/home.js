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
        return <>
            <Grid 
                container
                direction="row"
                justify="space-between"
            >
                <Grid item xs={8}>
                    <AnnouncementList></AnnouncementList>
                </Grid>
                <Grid item xs={2} >
                    <Grid spacing={32} container direction='column'>
                        <Grid item>
                            <TimezoneList></TimezoneList>
                        </Grid>
                        <Grid item>
                            <LinksList></LinksList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    }
}
export default Home