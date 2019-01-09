import React from 'react';
import TimezoneCard from './TimezoneCard'
import { times } from '../../seed'

const TimezoneList = (props) => {
    return(
        times.timezones.map(time => <TimezoneCard time={time}></TimezoneCard>)
    )
}

export default TimezoneList
