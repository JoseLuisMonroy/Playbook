const userView = require('../../app/views/userView');

describe("Pruebas unitarias para User view", () => {
    test('Regresar un objeto nulo cuando se intenta crear un usuario sin pago', () => {
        const payload = null;
        const result = userView.create(payload);

        expect(result.error).toMatch(/Pago no encontrado/);
    });
});