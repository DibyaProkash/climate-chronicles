import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import WorldMap from "../components/map/WorldMap";

import { useClimate } from "../context/ClimateContext";


function Explorer() {

    const {
        data,
        loading
    } = useClimate();


    const [year, setYear] = useState(2020);


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading climate data...
            </div>
        );
    }


    return (
        <>
            <Navbar />

            <main
                className="
                    pt-28
                    px-6
                    min-h-screen
                "
            >

                <h1 className="text-4xl font-bold mb-3">
                    Climate Explorer
                </h1>


                <p className="text-gray-300 mb-8">
                    Explore how temperatures changed across the globe.
                </p>


                {/* Timeline Controller */}

                <div className="mb-8">

                    <label className="block mb-2">
                        Year: {year}
                    </label>


                    <input
                        type="range"
                        min="1900"
                        max="2020"
                        step="10"
                        value={year}
                        onChange={
                            e =>
                            setYear(
                                Number(e.target.value)
                            )
                        }
                        className="w-full"
                    />

                </div>


                {/* World Map */}

                <WorldMap
                    worldMap={data.worldMap}
                    temperatureData={data.temperature}
                    year={year}
                />

            </main>

        </>
    );
}


export default Explorer;