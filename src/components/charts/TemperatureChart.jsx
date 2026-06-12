import * as d3 from "d3";
import { getCountryData } from "../../utils/chartUtils";


function TemperatureChart({
    data,
    country
}) {

    const records =
        getCountryData(data, country);


    const width = 600;
    const height = 250;
    const margin = 40;


    const x = d3
        .scaleLinear()
        .domain(
            d3.extent(records, d => d.year)
        )
        .range([margin, width - margin]);


    const y = d3
        .scaleLinear()
        .domain(
            d3.extent(records, d => d.temperature)
        )
        .range([height - margin, margin]);


    const line = d3
        .line()
        .x(d => x(d.year))
        .y(d => y(d.temperature));


    return (
        <div
            className="
                bg-black/30
                rounded-xl
                p-4
            "
        >

            <h2 className="mb-3 text-xl">
                🌡 Temperature Trend
            </h2>


            <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full"
            >

                <path
                    d={line(records)}
                    fill="none"
                    stroke="orange"
                    strokeWidth="3"
                />

            </svg>

        </div>
    );
}


export default TemperatureChart;