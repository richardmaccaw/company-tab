import React from 'react'
import moment from 'moment-timezone';


const TimezoneCard = (props) => {
    return (
        <div>
            
            {props.timezone && 
                <>
                    <p> {props.timezone.name} {moment().tz(props.timezone.zone).format('h:mma')} </p>
                </>
            }
        </div>
    )
}

export default TimezoneCard

