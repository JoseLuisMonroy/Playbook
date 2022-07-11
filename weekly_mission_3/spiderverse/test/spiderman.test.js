const spiderMan = require('./../app/spiderman.js')

describe("Pruebas Unitarias para Spiderman", () => {
    test('Case 1 Crear un objeto de spiderman', () => {
        const andrew = new spiderMan("SpiderMan Sony", "30", "Andrew Garfield", "2", "Sony");
        expect(andrew.name).toBe("SpiderMan Sony");
        expect(andrew.age).toBe("30");
        expect(andrew.actor).toBe("Andrew Garfield");
        expect(andrew.movies).toBe("2");
        expect(andrew.studio).toBe("Sony");
    });
})