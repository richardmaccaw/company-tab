import React from 'react'
import LinksList from '../Settings/Links/LinksList'
import TimezoneList from '../Settings/Timezone/TimezoneList'

import { Grid } from '@material-ui/core';

class Settings extends React.Component {
   
    componentDidMount () {
        const { isSignedIn, history } = this.props
        if (!isSignedIn) {
            history.push('/')
        }
    }

    render () {
        return (
            <Grid container justify="space-between" direction='column' spacing={24}>
                <Grid item>
                    <TimezoneList
                        editTimezone={this.props.editTimezone}
                        addStateItem={this.props.addStateItem}
                        deleteStateItem={this.props.deleteStateItem}
                        timezones={this.props.timezones}
                        serverUser={this.props.serverUser}
                    />
                </Grid>
                <Grid item >
                    <LinksList 
                        serverUser={this.props.serverUser}
                        addStateItem={this.props.addStateItem}
                        editLink={this.props.editLink}
                        deleteStateItem={this.props.deleteStateItem}
                        links={this.props.links}
                        deleteLink={this.props.deleteLink}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default Settings
