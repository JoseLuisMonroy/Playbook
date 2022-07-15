const FizzbuzzService = require("../../lib/services/FizzBuzzService");

describe("FizzBuzzService test", () => {
    test("Caso 1 Cuando nop hay module 3 y 5", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const result1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(result1.trick).toBe(1);
    });
    test("Cas0 2 Cuando hay modulo 3", () => {
        const explorer3 = { name: "Explorer3", score: 3 };
        const resultado2 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(resultado2.trick).toBe("FIZZ");
    });
    test("Caso 3 Cuando hay modulo 5", () => {
        const explorer5 = { name: "Explorer5", score: 5 };
        const resultado3 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(resultado3.trick).toBe("BUZZ");
    });
    test("Caso 4 Cuando hay modulo 3 y 5", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        const resultado4 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(resultado4.trick).toBe("FIZZBUZZ");
    });
});