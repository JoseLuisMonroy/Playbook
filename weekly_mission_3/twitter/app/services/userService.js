const user = require('./../models/user');

class userService {
    static create(id, username, name) {
        return new user(id, username, name, "Sin bio");
    }
}

module.exports = userService;