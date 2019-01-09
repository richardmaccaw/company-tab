import React from 'react'

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
