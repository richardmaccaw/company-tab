import React from 'react'
import { CardActions, Button, Grid, Switch, FormControlLabel } from '@material-ui/core'

class TimezoneCard extends React.Component {

    state = {
        checked: false
    }

    render () {
        const { time } = this.props
        return (
            <Grid item md={3}>
                <div>
                        <p>{time.location}</p>
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