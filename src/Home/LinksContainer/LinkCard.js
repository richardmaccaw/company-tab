import React from 'react'

const LinkCard = (props) => {

    const clearbitBase = 'https://logo.clearbit.com/'
    const clearbitOpt = '?size=40&greyscale=true'

    return (
        <div >
            {props.link.url &&
                <div className='linkItem'>
                    <a href={`https://${props.link.url}`}>
                        <img src={clearbitBase + props.link.url.split('/')[0] + clearbitOpt}/>
                    </a>
                    <a href={`https://${props.link.url}`}>{props.link.name}</a>
                </div>
            }
        </div>
    )
}

export default LinkCard
