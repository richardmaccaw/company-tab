import React from 'react'
import AnnouncementCard from './AnnouncementCard'
import { json } from '../../seed'


const AnnouncementList = (props) => {

    return (
        <div>
            {json.announcements.map(announcement => <AnnouncementCard announcement={announcement}></AnnouncementCard>)}
        </div>
   
    )
}

export default AnnouncementList
