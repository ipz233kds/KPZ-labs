class Authenticator {
    constructor() {
        if (Authenticator.instance) {
            return Authenticator.instance;
        }

        this.token = this.#generateToken();
        Authenticator.instance = this;
    }

    #generateToken() {
        return Math.random().toString(36).substring(2); // simple token
    }

    getToken() {
        return this.token;
    }
}

module.exports = Authenticator;