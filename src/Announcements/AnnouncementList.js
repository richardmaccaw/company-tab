import React from 'react'
import AnnouncementCard from '../Announcements/AnnouncementCard'
import { Grid } from '@material-ui/core';


const AnnouncementList = (props) => {
    return (
        <Grid container spacing={32} justify="space-between">
                {props.announcements.map(announcement => 
                    <AnnouncementCard 
                        key={announcement.id}
                        announcement={announcement}
                        handleEdit={props.handleEdit}
                        handleDelete={props.handleDelete}
                    />)}
        </Grid>
    )
}

export default AnnouncementList