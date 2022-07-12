const user = require('./../models/user');

class userService {
    static create(id, username, name) {
        return new user(id, username, name, "Sin bio");
    }
    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio];
    }
    static uptadetUserUsername(user, username) {
        user.username = username;
    }
    static getUsernames(users) {
        return users.map(user => user.username);
    }
}

module.exports = userService;