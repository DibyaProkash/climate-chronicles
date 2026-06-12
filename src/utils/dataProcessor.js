export function processTemperature(data) {

    return data.map(item => ({
        country: item.country,
        year: Number(item.year),
        temperature: Number(item.temperature)
    }));
}



export function processCO2(data) {

    return data.map(item => ({
        country: item.country,
        year: Number(item.year),
        co2: Number(item.co2)
    }));
}