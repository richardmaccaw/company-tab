import React from 'react'
import LinkCard from './LinkCard'
import { linkList } from '../../seed'


const LinksList = (props) => {

    return (
        <div>
            {linkList.links.map(link => <LinkCard link={link}></LinkCard>)}
        </div>
   
    )
}

export default LinksList
