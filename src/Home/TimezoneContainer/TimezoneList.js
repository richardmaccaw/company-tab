import React from 'react';
import TimezoneCard from './TimezoneCard'

const TimezoneList = (props) => {
    return(
        <div className='timezoneList'>
            {props.timezones.map(timezone => <TimezoneCard key={timezone.key} timezone={timezone}></TimezoneCard>)}
        </div>
    )
}

export default TimezoneList
