import React from 'react'
import { CardActions, Button, Grid } from '@material-ui/core'

class TimezoneCard extends React.Component {

    state = {
        checked: false
    }

    render () {
        const { time } = this.props
        return (
            <Grid item md={3}>
                <div>
                        <h2>{time.location}</h2>
                        <p>{time.time}</p>
                    <CardActions>
                        <Button variant="outlined" size="small" color="primary">Edit</Button>
                        <Button variant="outlined" size="small" color="secondary">Delete</Button>
                    </CardActions>
                </div>
            </Grid>
        )
    }
}

export default TimezoneCard