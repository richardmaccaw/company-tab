class API {
    static init () {
        this.baseURL = 'http://localhost:3002/api/v1'
        this.usersURL = this.baseURL + '/users'
        this.announcementsURL = 'http://localhost:3002/api/v1/announcements'
    }

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
}

API.init()

export default API