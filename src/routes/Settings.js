import React from 'react'
import LinksList from '../Settings/LinksList'
import TimezoneList from '../Settings/TimezoneList'

import { linkList, times } from '../seed'

import { Grid } from '@material-ui/core';

class Settings extends React.Component {
    state = {
    }

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
                    <LinksList links={linkList.links}></LinksList>
                </Grid>
            </Grid>
        )
    }
}

export default Settings
