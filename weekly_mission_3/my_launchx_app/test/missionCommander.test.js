const MissionCommander = require('./../app/missionCommander');

describe("Prueba unitaria para la clase de missionCommander", () => {
    test('1) Crear un objeto tipo mission commander', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Wooopa");
    });
})