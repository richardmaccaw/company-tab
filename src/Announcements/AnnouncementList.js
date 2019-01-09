import React from 'react'
import AnnouncementCard from '../Announcements/AnnouncementCard'
import { Grid } from '@material-ui/core';


const AnnouncementList = (props) => {
    return (
        <Grid container spacing={32} justify="space-between">
                {props.announcements.map(announcement => <AnnouncementCard announcement={announcement}></AnnouncementCard>)}
        </Grid>
    )
}

export default AnnouncementList