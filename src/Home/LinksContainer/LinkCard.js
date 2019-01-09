import React from 'react'

const LinkCard = (props) => {
    return (
        <div>
            {props.link && <a href={props.link.url}>{props.link.title}</a>}
        </div>
    )
}

export default LinkCard
