import { useState } from "react";

import * as d3 from "d3";

import Tooltip from "./Tooltip";

import {
    createColorScale,
    getTemperatureForCountry
} from "../../utils/mapUtils";


function WorldMap({
    worldMap,
    temperatureData,
    year,
    selectedCountry,
    setSelectedCountry
}) {


    const [tooltip, setTooltip] =
        useState(null);


    const projection =
        d3.geoMercator()
        .fitSize(
            [900, 500],
            worldMap
        );


    const path =
        d3.geoPath()
        .projection(projection);


    const colorScale =
        createColorScale();


    return (

        <div className="relative">

            <svg
                viewBox="0 0 900 500"
                className="
                    w-full
                    bg-blue-950
                    rounded-xl
                "
            >

            {
                worldMap.features.map(
                    (feature, index) => {

                    const name =
                        feature.properties.name;


                    const temp =
                        getTemperatureForCountry(
                            name,
                            year,
                            temperatureData
                        );


                    return (
                        <path
                            key={index}
                            d={path(feature)}

                            className="
                                transition-all
                                duration-300
                                cursor-pointer
                                hover:brightness-125
                            "

                            fill={
                                temp !== null
                                ? colorScale(temp)
                                : "#1e293b"
                            }

                            stroke={
                                selectedCountry === name
                                ? "#ffffff"
                                : "#111827"
                            }

                            strokeWidth={
                                selectedCountry === name
                                ? 2
                                : 0.5
                            }

                            onClick={() =>
                                setSelectedCountry(name)
                            }

                            onMouseMove={event =>
                                setTooltip({
                                    country: name,
                                    temperature: temp,
                                    x: event.clientX,
                                    y: event.clientY
                                })
                            }

                            onMouseLeave={() =>
                                setTooltip(null)
                            }
                        />
                    );

                })

            }

            </svg>


            <Tooltip {...tooltip} />

        </div>

    );
}


export default WorldMap;