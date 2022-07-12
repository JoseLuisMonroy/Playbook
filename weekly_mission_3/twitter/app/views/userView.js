const userService = require('./../services/userService');

class userView {
    static create(payload) {
        if (payload) {
            return userService.create("1", "Monroy", "Jose");
        } else {
            return { error: 'Pago no encontrado' };
        }
    }
}

module.exports = userView;