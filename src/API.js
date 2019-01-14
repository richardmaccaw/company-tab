class API {
    static init () {
        this.baseURL = 'http://localhost:3002/api/v1'
        this.usersURL = this.baseURL + '/users'
        this.announcementsURL = 'http://localhost:3002/api/v1/announcements'
    }

    static find_or_create_user (uid, user) {
        return fetch(`/api/v1/users/find_or_create_user/${uid}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static getUser (uid) {
        return fetch(`http://localhost:3002/api/v1/users/${uid}`)
            .then(resp => resp.json())
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
        console.log(announcement)
        return fetch(`http://localhost:3002/api/v1/announcements/${announcement.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(announcement)
        }).then(resp => resp.json())
    }
}

API.init()

export default API