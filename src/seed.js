import 'moment-timezone/builds/moment-timezone-with-data-2012-2022';
import moment from 'moment-timezone';

const json = {
    announcements: [{
        title: '20 million in revenue for the quarter!',
        description: 'Well done everyone.',
        published: true,
        date: moment().calendar()
    }, {
        title: 'Joe Blogs hired as CTO',
        description: 'lorum ipsum etc',
        published: true,
        date: moment().calendar()

    }, {
        title: 'New feature out!',
        description: 'This is what the new feature does and where you can fine more information',
        published: true,
        date: moment().calendar()
    }]
}

const times = {
    timezones: [{
        location: 'New York',
        time: moment().tz('America/New_York').format('h:mma')
    }, {
        location: 'London',
        time: moment().tz('Europe/London').format('h:mma')
    }, {
        location: 'Madrid',
        time: moment().tz('Europe/Madrid').format('h:mma')
    }]

}

const linkList = {
    links: [{
            title: 'Confluence',
            url: 'https://www.ourcompanyconculence.com'
        }, {
            title: 'Slack',
            url: 'https://www.ourcompanyslack.com'
        },
        {
            title: 'Uber eats account',
            url: 'https://www.ourcompanyubereates.com'
        },
    ]

}

export {
    json,
    times,
    linkList
}