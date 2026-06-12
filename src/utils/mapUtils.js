import * as d3 from "d3";


export function createColorScale() {

    return d3
        .scaleSequential()
        .domain([-1, 3])
        .interpolator(
            d3.interpolateYlOrRd
        );
}



export function getTemperatureForCountry(
    country,
    year,
    temperatureData
) {

    const result =
        temperatureData.find(
            item =>
                item.country === country &&
                item.year === year
        );

    return result
        ? result.temperature
        : null;
}