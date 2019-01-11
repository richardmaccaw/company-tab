class API {
    static init () {
        this.baseURL = 'http://localhost:3001'
        this.userURL = this.baseURL + '/user'
    }
    static getUser () {
        return fetch(this.userURL)
            .then(resp => resp.json())
    }
}

API.init()

export default API