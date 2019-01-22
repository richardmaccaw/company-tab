class API {

    static init () {
        this.baseUrl = 'https://companytab-api.herokuapp.com/api/v1'
        this.usersUrl = this.baseUrl + '/users'
        this.announcementsUrl = this.baseUrl + '/announcements'
        this.linksUrl = this.baseUrl + '/links'
        this.timezonesUrl = this.baseUrl + '/timezones'
    }

    static findOrCreateUser (user) {
        return fetch(this.usersUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static postAnnouncement (announcement) {
        return fetch(this.announcementsUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(announcement)
        }).then(resp => resp.json())
    }

    static deleteAnnouncement (id) {
        return fetch(`${this.announcementsUrl}/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }

    static patchAnnouncement (announcement) {
        return fetch(`${this.announcementsUrl}/${announcement.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(announcement)
        }).then(resp => resp.json())
    }

    static patchLink (link) {
        return fetch(`${this.linksUrl}/${link.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        }).then(resp => resp.json())
    }

    static postLink (link) {
        return fetch(this.linksUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        }).then(resp => resp.json())
    }

    static deleteLink (id) {
        return fetch(`${this.linksUrl}/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }

    static postTimezone (timezone) {
        return fetch(this.timezonesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(timezone)
        }).then(resp => resp.json())
    }

    static patchTimezone (timezone) {
        return fetch(`${this.timezonesUrl}/${timezone.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(timezone)
        }).then(resp => resp.json())
    }

    static deleteTimezone (id) {
        return fetch(`${this.timezonesUrl}/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }
}

API.init()

export default API