import React from 'react'
import moment from 'moment-timezone';


const TimezoneCard = (props) => {
    return (
        <div className='timezoneContainer'>
            
            {props.timezone && 
                <div className='timezoneItem'>
                    <p> {props.timezone.name + ' - '} {moment().tz(props.timezone.zone).format('h:mma')} </p>
                </div>
            }
        </div>
    )
}

export default TimezoneCard

