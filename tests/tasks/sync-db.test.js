const { syncDB } = require("../../tasks/sync-db");

describe('Pruebas en Sync-dB', () => {

    test('Debe ejecutar el proceso 2 veces', () => {
        syncDB();
        const times = syncDB();
        console.log('Se llamo ', times);

        expect(times).toBe(2);
    });
});