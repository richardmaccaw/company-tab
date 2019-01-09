import React from 'react'
import moment from 'moment-timezone';


const TimezoneCard = (props) => {
    return (
        <div>
            {props.time && 
                <>
                    <p> {props.time.location} {props.time.time} </p>
                </>
            }
        </div>
    )
}

export default TimezoneCard
