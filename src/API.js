class API {

    static findOrCreateUser = (user) => {
        return fetch('http://localhost:3002/api/v1/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static postAnnouncement = (announcement) => {
        return fetch('http://localhost:3002/api/v1/announcements', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(announcement)
        }).then(resp => resp.json())
    }

    static deleteAnnouncement = (id) => {
        return fetch(`http://localhost:3002/api/v1/announcements/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }

    static patchAnnouncement = (announcement) => {
        return fetch(`http://localhost:3002/api/v1/announcements/${announcement.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(announcement)
        }).then(resp => resp.json())
    }

    static patchLink = (link) => {
        return fetch(`http://localhost:3002/api/v1/links/${link.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        }).then(resp => resp.json())
    }

    static postLink = (link) => {
        return fetch('http://localhost:3002/api/v1/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        }).then(resp => resp.json())
    }

    static deleteLink = (id) => {
        return fetch(`http://localhost:3002/api/v1/links/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }

    static postTimezone = (timezone) => {
        return fetch('http://localhost:3002/api/v1/timezones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(timezone)
        }).then(resp => resp.json())
    }

    static patchTimezone = (timezone) => {
        return fetch(`http://localhost:3002/api/v1/timezones/${timezone.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(timezone)
        }).then(resp => resp.json())
    }

    static deleteTimezone = (id) => {
        return fetch(`http://localhost:3002/api/v1/timezones/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }
}

export default API