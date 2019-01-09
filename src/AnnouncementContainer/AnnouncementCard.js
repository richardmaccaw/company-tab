import React from 'react'
import Grid from '@material-ui/core/Grid';

const AnnouncementCard = (props) => {

    return (
        <div className='announcementCard'>

            {props.announcement.published && 
                <Grid container >
                    <Grid item xs={10}>
                        <h1>{props.announcement.title} </h1>
                    </Grid>
                    <Grid item xs={2}>
                        <p>NEW!</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>{props.announcement.description}</p>
                        <p>{props.announcement.date}</p>
                    </Grid>
                </Grid>
            }
        </div>
   
    )
}

export default AnnouncementCard
