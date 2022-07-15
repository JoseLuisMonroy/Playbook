const explorerController = require("./../../lib/controllers/explorerController");

describe("Pruebas para Explorer Controller", () => {
    test('Caso 1 Tener una lista de explorers por mision', () => {
        const test1_resultado = explorerController.getExplorersByMission("node");

        expect(test1_resultado.length).toBe(10);
    });
    test('Caso 2 Obtener usernames por mision', () => {
        const test2_resultado = explorerController.getExplorersUsernamesByMission("node");

        expect(test2_resultado).toEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });
    test('Caso 3 Obtener cantidad de explorers por mision', () => {
        const test3_resultado = explorerController.getExplorersAmountByMission("node");

        expect(test3_resultado).toBe(10);
    });
});