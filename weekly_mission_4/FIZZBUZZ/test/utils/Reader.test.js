const fs = require("fs");
const reader = require("./../../lib/utils/Reader");

describe("Reader test suite", () => {
    test("Caso 1 Leer el archivo JSON", () => {
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);

        expect(explorers).toBeDefined();
        expect(explorers.length).toBe(15);
    });
});