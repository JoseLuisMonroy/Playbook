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
    test('Caso 2 getters y setters', () => {
        const test2 = new user("1", "J0se", "Jose", "Random");

        expect(test2.getusername).toBe("J0se");
        expect(test2.getname).toBe("Jose");
        expect(test2.getbio).toBe("Random");
        expect(test2.getdateCreated).not.toBeUndefined();
        expect(test2.getlastUpdated).not.toBeUndefined();
    });
});