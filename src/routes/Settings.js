import React from 'react'
import { json } from '../seed'

import { Button } from '@material-ui/core';

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
            <>
                <p>hi there</p>
            </>
        )
    }
}

export default Settings
