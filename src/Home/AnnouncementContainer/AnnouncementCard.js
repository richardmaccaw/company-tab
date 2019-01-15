import React from 'react'
import moment from 'moment-timezone';

import { Grid, Chip } from '@material-ui/core';

const AnnouncementCard = (props) => {

    return (
        <div className='announcementCard'>

            {props.announcement.published && 
                <Grid container >
                    <Grid item xs={10}>
                        <h1>{props.announcement.title} </h1>
                    </Grid>
                    <Grid item xs={1}>
                        <Chip variant='outlined' size='small' color='secondary' label='new'></Chip>
                    </Grid>
                    <Grid item xs={10}>
                        <p>{props.announcement.description}</p>
                        <p>{moment(props.announcement.date).fromNow()}</p>
                    </Grid>
                </Grid>
            }
        </div>
   
    )
}

export default AnnouncementCard
