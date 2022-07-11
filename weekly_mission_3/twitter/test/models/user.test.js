const user = require('../../app/models/user');

describe("Pruebas unitarias para User", () => {
    test('Caso 1 Crear un objeto de user', () => {
        const nuevUser = new user("1", "J0se", "Jose", "Random");
        expect(nuevUser.id).toBe("1");
        expect(nuevUser.username).toBe("J0se");
        expect(nuevUser.name).toBe("Jose");
        expect(nuevUser.bio).toBe("Random");
        expect(nuevUser.dateCreated).not.toBeUndefined();
        expect(nuevUser.lastUpdated).not.toBeUndefined();
    });
});