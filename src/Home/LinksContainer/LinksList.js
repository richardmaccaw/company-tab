import React from 'react'
import LinkCard from './LinkCard'


const LinksList = (props) => {

    return (
        <div className='HomeLinksList'>
            {props.links.map(link => <LinkCard key={link.id} link={link}></LinkCard>)}
        </div>
   
    )
}

export default LinksList
