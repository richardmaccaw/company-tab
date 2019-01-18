import React from 'react'

import TimezoneCard from './TimezoneCard'
import { Grid, Button } from '@material-ui/core';


const TimezoneList = (props) => {
    return (
        <>
            <Button variant='contained' color='primary'>New Timezone</Button>
            <Grid container spacing={8} justify="space-between">
                    {props.times.map(time => <TimezoneCard time={time}></TimezoneCard>)}
            </Grid>
        </>
    )
}

export default TimezoneList