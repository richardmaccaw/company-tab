import React from 'react'
import TimezoneDialog from './TimezoneDialog'

import { CardActions, Button, Grid } from '@material-ui/core'
import moment from 'moment-timezone';
import API from '../../API';

class TimezoneCard extends React.Component {

    state = {
        open: false,
        name: this.props.timezone.name,
        zone: this.props.timezone.zone
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    toggleDialog = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleDelete = () => {
        API.deleteTimezone(this.props.timezone.id)
            .then(resp => this.props.deleteStateItem('timezones', resp.id ))
    }

    patchTimezone = () => {
        const timezone = {
            zone: this.state.zone,
            name: this.state.name,
            company_id: this.props.serverUser.company.id,
            id: this.props.timezone.id
        }
        API.patchTimezone(timezone)
            .then(resp => this.props.editTimezone(resp))
            .then(this.toggleDialog)
    }

    render () {
        const { timezone, serverUser } = this.props
        return (
            <>
                <Grid item md={3}>
                    <div>
                            <h2>{timezone.name}</h2>
                            <p>{moment().tz(timezone.zone).format('h:mma')}</p>
                        <CardActions>
                            <Button onClick={this.toggleDialog} variant="outlined" size="small" color="primary">Edit</Button>
                            <Button onClick={this.handleDelete} variant="outlined" size="small" color="secondary">Delete</Button>
                        </CardActions>
                    </div>
                </Grid>
                <TimezoneDialog
                    title={'Edit timezone'}
                    name={this.state.name}
                    zone={this.state.zone}
                    handleSubmit={this.patchTimezone}
                    handleChange={this.handleChange}
                    serverUser={serverUser}
                    toggleDialog={this.toggleDialog}
                    open={this.state.open}
                />
            </>
        )
    }
}

export default TimezoneCard