import 'moment-timezone/builds/moment-timezone-with-data-2012-2022';
import moment from 'moment-timezone';

const json = {
    announcements: [{
        title: '20 million in revenue for the quarter!',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        published: true,
        date: moment().calendar(),
        id: 1
    }, {
        title: 'Joe Blogs hired as CTO',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        published: false,
        date: moment().calendar(),
        id: 2

    }, {
        title: 'New feature out!',
        description: 'This is what the new feature does and where you can fine more information',
        published: true,
        date: moment().calendar(),
        id: 3
    }]
}

const times = {
    timezones: [{
        location: 'New York',
        time: moment().tz('America/New_York').format('h:mma'),
        id: 1
    }, {
        location: 'London',
        time: moment().tz('Europe/London').format('h:mma'),
        id: 2
    }, {
        location: 'Madrid',
        time: moment().tz('Europe/Madrid').format('h:mma'),
        id: 3
    }]
}

const linkList = {
    links: [{
            title: 'Confluence',
            url: 'https://www.ourcompanyconculence.com',
            id: 1
        }, {
            title: 'Slack',
            url: 'https://www.ourcompanyslack.com',
            id: 2
        },
        {
            title: 'Uber eats account',
            url: 'https://www.ourcompanyubereates.com',
            id: 3
        },
    ]

}

export {
    json,
    times,
    linkList
}