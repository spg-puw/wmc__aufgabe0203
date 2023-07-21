import t from './aufgabe1.mjs'

describe('Statistik', () => {
    test('mit vorhandenen Daten', () => {
        const s = t.generateStatistic(t.weatherdata);

        expect(JSON.stringify(s)).toBe(`{"11035":{"name":"Wien - Hohe Warte","min":-2.7,"max":10.2},"11082":{"name":"Gumpoldskirchen","min":-6.3,"max":9.7}}`);
    });

    test('mit dynamischen Daten', () => {
        const weatherdata = structuredClone(t.weatherdata);
        weatherdata.stations[12345] = { name: "Teststation" };
        weatherdata.measurements.push(
            { stationId: "12345", date: "2021-12-23" },
            { stationId: "12345", date: "2021-12-24", temp: { max: 99.0, min: -99.9 } },
            { stationId: "11035", date: "2021-12-24", temp: { max: 1.0, min: -99.0 } },
            { stationId: "11082", date: "2021-12-24", temp: { max: 99.0, min: -1.0 } }
        )
        const s = t.generateStatistic(weatherdata);

        expect(s).toMatchObject({
            '11035': { name: 'Wien - Hohe Warte', min: -99, max: 10.2 },
            '11082': { name: 'Gumpoldskirchen', min: -6.3, max: 99 },
            '12345': { name: 'Teststation', min: -99.9, max: 99 }
          });
    });
});