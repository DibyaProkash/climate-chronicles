import * as d3 from "d3";


export async function loadTemperatureData() {

    const data = await d3.csv(
        "/data/temperature.csv"
    );

    return data;
}


export async function loadCO2Data() {

    const data = await d3.csv(
        "/data/co2.csv"
    );

    return data;
}


export async function loadEnergyData() {

    const response = await fetch(
        "/data/energy.json"
    );

    return response.json();
}

export async function loadWorldMap() {

    const response = await fetch(
        "/data/world.geojson"
    );

    return response.json();
}