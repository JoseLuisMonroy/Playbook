const userService = require('./../services/userService');

class userView {
    static create(payload) {
        if (payload) {
            if (payload.username && payload.name && payload.id) {
                return userService.create(payload.id, payload.username, payload.name);
            } else {
                return { error: "Necesita tener un valor válido" };
            }
        } else {
            return { error: 'Pago no encontrado' };
        }
    }
}

module.exports = userView;