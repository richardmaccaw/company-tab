import React from 'react'
import LinksList from '../Settings/Links/LinksList'
import TimezoneList from '../Settings/Timezone/TimezoneList'

import { times } from '../seed'

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
                    <TimezoneList times={times.timezones}></TimezoneList>
                </Grid>
                <Grid item >
                    <LinksList 
                        serverUser={this.props.serverUser}
                        addLink={this.props.addLink}
                        editLink={this.props.editLink}
                        links={this.props.links}
                        deleteLink={this.props.deleteLink}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default Settings
