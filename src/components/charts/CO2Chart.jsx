import * as d3 from "d3";
import { getCountryData } from "../../utils/chartUtils";


function CO2Chart({ data, country }) {

    const records = getCountryData(data, country);

    const width = 600;
    const height = 250;
    const margin = 40;


    const x = d3.scaleLinear()
        .domain(d3.extent(records, d => d.year))
        .range([margin, width - margin]);


    const y = d3.scaleLinear()
        .domain([0, d3.max(records, d => d.co2)])
        .range([height - margin, margin]);


    const line = d3.line()
        .x(d => x(d.year))
        .y(d => y(d.co2));


    return (
        <div className="bg-black/30 rounded-xl p-4 mt-6">

            <h2 className="mb-3 text-xl">
                🏭 CO₂ Emissions Trend
            </h2>

            <svg viewBox={`0 0 ${width} ${height}`} className="w-full">

                <path
                    d={line(records)}
                    fill="none"
                    stroke="#ff4d4d"
                    strokeWidth="3"
                />

            </svg>

        </div>
    );
}

export default CO2Chart;