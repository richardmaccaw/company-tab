import React from 'react';
import TimezoneCard from './TimezoneCard'

const TimezoneList = (props) => {
    return(
        props.timezones.map(timezone => <TimezoneCard key={timezone.key} timezone={timezone}></TimezoneCard>)
    )
}

export default TimezoneList
