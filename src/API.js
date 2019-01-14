class API {
    static init () {
        this.baseURL = 'http://localhost:3002/api/v1'
        this.usersURL = this.baseURL + '/users'
        this.announcementsURL = this.baseURL + '/announcements'
    }

    static getUser (uid) {
        return fetch(`${this.usersURL}/${uid}`)
            .then(resp => resp.json())
    }

    static postAnnouncement = (uid, announcement) => {
        return fetch(`${this.announcementsURL}/${uid}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(announcement)
        }).then(resp => resp.json())
    }
}

API.init()

export default API