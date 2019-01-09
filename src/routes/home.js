import React from 'react';
import AnnouncementList from '../AnnouncementContainer/AnnouncementList'
import TimezoneList from '../TimezoneContainer/TimezoneList'
import LinksList from '../LinksContainer/LinksList'

import Grid from '@material-ui/core/Grid';



const Home = () => {
    return <>
        <Grid container >
        <Grid item xs={8}>
            <AnnouncementList></AnnouncementList>
        </Grid>
        <Grid item xs={4} >
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
export default Home