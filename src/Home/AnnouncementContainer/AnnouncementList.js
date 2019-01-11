import React from 'react'
import AnnouncementCard from './AnnouncementCard'

const AnnouncementList = (props) => {

    return (
        <div>
            {props.announcements.map(announcement => <AnnouncementCard announcement={announcement}></AnnouncementCard>)}
        </div>
   
    )
}

export default AnnouncementList
