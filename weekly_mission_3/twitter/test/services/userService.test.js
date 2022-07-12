const userService = require('./../../app/services/userService');

describe("Pruebas unitarias para User service", () => {
    test('Caso 1 Crear un objeto de useCrear un nuevo usuario usando user service', () => {
        const test4 = userService.create("1", "Monroy", "Jose");

        expect(test4.id).toBe("1");
        expect(test4.username).toBe("Monroy");
        expect(test4.name).toBe("Jose");
        expect(test4.bio).not.toBeUndefined();
    });
});