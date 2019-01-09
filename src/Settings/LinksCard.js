import React from 'react'
import { CardActions, Button, Grid } from '@material-ui/core'

class LinksCard extends React.Component {


    render () {
        const { link } = this.props
        return (
            <Grid item md={3}>
                <div>
                        <h2>{link.title}</h2>
                        <p>{link.url}</p>
                    <CardActions>
                        <Button variant="outlined" size="small" color="primary">Edit</Button>
                        <Button variant="outlined" size="small" color="secondary">Delete</Button>
                    </CardActions>
                </div>
            </Grid>
        )
    }
}

export default LinksCard