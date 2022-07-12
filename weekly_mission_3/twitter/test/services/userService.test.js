const userService = require('./../../app/services/userService');

describe("Pruebas unitarias para User service", () => {
    test('Caso 1 Crear un objeto de useCrear un nuevo usuario usando user service', () => {
        const test4 = userService.create("1", "Monroy", "Jose");

        expect(test4.id).toBe("1");
        expect(test4.username).toBe("Monroy");
        expect(test4.name).toBe("Jose");
        expect(test4.bio).not.toBeUndefined();
    });
    test('Caso 2 Obtener todos los datos del usuario en una lista', () => {
        const test5 = userService.create("1", "Monroy", "Jose");
        const test5Lista = userService.getInfo(test5);

        expect(test5Lista[0]).toBe("1");
        expect(test5Lista[1]).toBe("Monroy");
        expect(test5Lista[2]).toBe("Jose");
        expect(test5Lista[3]).toBe("Sin bio");
    });
    test('Caso 3 Actualizar nombre de usuario', () => {
        const test6 = userService.create("1", "Monroy", "Jose");
        userService.uptadetUserUsername(test6, "MonroyJF");

        expect(test6.username).toBe("MonroyJF");
    })
    test('Caso 4 Dada una lista de usuarios regresar una lista con unicamente los usernames', () => {
        const test7_1 = userService.create("1", "J0s3", "Jose");
        const test7_2 = userService.create("1", "Monroy", "Jose");
        const test7_3 = userService.create("1", "MonroyJF", "Jose");
        const test7_lista = userService.getUsernames([test7_1, test7_2, test7_3]);

        expect(test7_lista).toContain("J0s3");
        expect(test7_lista).toContain("Monroy");
        expect(test7_lista).toContain("MonroyJF");
    })
});