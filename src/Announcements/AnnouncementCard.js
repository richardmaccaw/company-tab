import React from 'react'
import { CardActions, Button, Grid, Switch, FormControlLabel } from '@material-ui/core'

class AnnouncementCard extends React.Component {

    state = {
        checked: false
    }

    render () {
        const { announcement } = this.props
        return (
            <Grid item md={5}>
                <div className='announcementCard'>
                        <h1>{announcement.title}</h1>
                        <p>{announcement.description}</p>
                        <p>{announcement.date}</p>
                    <CardActions>
                        <FormControlLabel
                            control={<Switch color='primary' checked={announcement.published}></Switch>}
                            label={announcement.published ? 'Published' : 'Not published'}
                        />
                        <Button variant="outlined" size="small" color="primary">Edit</Button>
                        <Button variant="outlined" size="small" color="secondary">Delete</Button>
                    </CardActions>
                </div>
            </Grid>
        )
    }
}

export default AnnouncementCard