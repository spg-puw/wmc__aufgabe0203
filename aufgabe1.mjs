const weatherdata = {
    stations: {
        "11035": { name: "Wien - Hohe Warte" },
        "11082": { name: "Gumpoldskirchen" }
    },
    measurements: [
        { stationId: "11035", date: "2021-12-01", temp: { max: 10.2, min: 3.4 } },
        { stationId: "11082", date: "2021-12-01" },
        { stationId: "11035", date: "2021-12-02" },
        { stationId: "11082", date: "2021-12-02", temp: { max: 9.7, min: 4.2 } },
        { stationId: "11035", date: "2021-12-03", temp: { max: 5.4, min: 0 } },
        { stationId: "11082", date: "2021-12-03", temp: { max: 4.9, min: -2.1 } },
        { stationId: "11035", date: "2021-12-04", temp: { max: 3.8, min: -2.7 } },
        { stationId: "11082", date: "2021-12-04", temp: { max: 4.5, min: -6.3 } }
    ]
}

function generateStatistic(weatherdata) {
    const statistics = {};
    //TODO: {"11035":{"name":"Wien - Hohe Warte","min":-2.7,"max":10.2},"11082":{"name":"Gumpoldskirchen","min":-6.3,"max":9.7}}

    return statistics;
}

export default { weatherdata, generateStatistic }
import { pathToFileURL as _path } from 'url'
if (import.meta.url === _path(process.argv[1]).href) {
    const statistics = generateStatistic(weatherdata);
    console.log(JSON.stringify(statistics));
}