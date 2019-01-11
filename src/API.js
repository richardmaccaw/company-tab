class API {
    static init () {
        this.railsURL = 'http:localhost:3002/api/v1'
        this.railsUser = this.railsURL + '/users'
        this.baseURL = 'http://localhost:3001'
        this.userURL = this.baseURL + '/user'
    }
    static getUser () {
        return fetch(this.userURL)
            .then(resp => resp.json())
    }

    static getRailsUser (uid) {
        return fetch(`http://localhost:3002/api/v1/users/${uid}`)
            .then(resp => resp.json())
            
    }
}

API.init()

export default API