import React from 'react'

import API from '../../API'

import TimezoneCard from './TimezoneCard'
import TimezoneDialog from './TimezoneDialog'
import { Grid, Button } from '@material-ui/core';

class TimezoneList extends React.Component {

    state = {
        open: false,
        name: '',
        zone: ''
    }

    toggleDialog = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    postTimezone = () => {
        const timezone = {
            zone: this.state.zone,
            name: this.state.name,
            company_id: this.props.serverUser.company.id
        }
        API.postTimezone(timezone)
            .then(resp => this.props.addStateItem('timezones', resp))
            .then(this.toggleDialog)
    }

    render () {

        return (
            <>
                <Button onClick={this.toggleDialog} variant='contained' color='primary'>New Timezone</Button>
                <Grid container spacing={8}>
                        {this.props.timezones
                            .map(timezone => 
                                <TimezoneCard 
                                    editTimezone={this.props.editTimezone}
                                    serverUser={this.props.serverUser}
                                    deleteStateItem={this.props.deleteStateItem}
                                    key={timezone.id}
                                    timezone={timezone}
                                />
                            )
                        }
                </Grid>
                <TimezoneDialog
                    title={'Add a new timezone'}
                    zone={this.state.zone}
                    name={this.state.name}
                    handleSubmit={this.postTimezone}
                    handleChange={this.handleChange}
                    addStateItem={this.props.addStateItem}
                    serverUser={this.props.serverUser}
                    toggleDialog={this.toggleDialog}
                    open={this.state.open}
                />
            </>
        )
    }
}

export default TimezoneList