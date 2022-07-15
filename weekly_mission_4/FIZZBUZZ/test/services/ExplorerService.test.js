const ExplorerService = require("../../lib/services/ExplorerService");

describe("Pruebas para Explorer Service", () => {
    test("Caso 1 Filtar por mision", () => {
        const test1_1 = { nombre: "Juan", mission: "node" };
        const test1_2 = { nombre: "Pedro", mission: "node" };
        const test1_3 = { nombre: "Maria", mission: "java" };
        const test1_lista = [test1_1, test1_2, test1_3];
        const test1_resultado = ExplorerService.filterByMission(test1_lista, "node");

        expect(test1_resultado.length).toBe(2);
    });
    test("Caso 2 Obtener usernames por mision", () => {
        const test2_1 = { nombre: "Juan", mision: "node", githubUsername: "juan" };
        const test2_2 = { nombre: "Pedro", mision: "node", githubUsername: "pedro" };
        const test2_lista = [test2_1, test2_2];
        const test2_resultado = ExplorerService.getExplorersUsernamesByMission(test2_lista, "node");

        expect(test2_resultado).toEqual(["juan", "pedro"]);
    });
    test("Caso 3 Obtener exploradores por tick", () => {
        const test3_1 = { nombre: "Juan", mision: "node", githubUsername: "juan", trick: "FIZZ" };
        const test3_2 = { nombre: "Pedro", mision: "node", githubUsername: "pedro", trick: "BUZZ" };
        const test3_3 = { nombre: "Maria", mision: "node", githubUsername: "maria", trick: "FIZZBUZZ" };
        const test3_4 = { nombre: "Pedro", mision: "node", githubUsername: "juan", trick: "FIZZ" };
        const test3_lista = [test3_1, test3_2, test3_3, test3_4];
        const test3_resultado = ExplorerService.getExplorersByTrick(test3_lista, "FIZZ");

        expect(test3_resultado.length).toBe(2);
    });
    test('Caso 4 Obtener explorer por stack', () => {
        const test4_1 = { nombre: "Juan", mision: "node", githubUsername: "juan", stack: "node, java" };
        const test4_2 = { nombre: "Pedro", mision: "node", githubUsername: "pedro", stack: "node" };
        const test4_3 = { nombre: "Maria", mision: "java", githubUsername: "maria", stack: "java" };
        const test4_4 = { nombre: "Pedro", mision: "node", githubUsername: "juan", stack: "node" };
        const test4_lista = [test4_1, test4_2, test4_3, test4_4];
        const test4_resultado = ExplorerService.getExplorersByStack(test4_lista, "java");

        expect(test4_resultado.length).toBe(2);
    });
});