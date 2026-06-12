import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import WorldMap from "../components/map/WorldMap";

import { useClimate } from "../context/ClimateContext";

import TemperatureChart from "../components/charts/TemperatureChart";
import CO2Chart from "../components/charts/CO2Chart";
import EnergyChart from "../components/charts/EnergyChart";

import useStory from "../hooks/useStory";
import StoryPanel from "../components/story/StoryPanel";


function Explorer() {

    const {
        data,
        loading
    } = useClimate();


    const [year, setYear] = useState(2020);

    const [selectedCountry, setSelectedCountry] = useState("Canada");

    const story = useStory(setYear);


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

                <StoryPanel story={story} />


                {/* World Map */}

                <WorldMap
                    worldMap={data.worldMap}
                    temperatureData={data.temperature}
                    year={year}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                />

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-500">

                    {/* Left: Charts */}
                    <div>

                        <h2 className="text-3xl mb-4">
                            {selectedCountry} Analytics
                        </h2>

                        <TemperatureChart
                            data={data.temperature}
                            country={selectedCountry}
                        />

                        <CO2Chart
                            data={data.co2}
                            country={selectedCountry}
                        />

                    </div>


                    {/* Right: Energy */}
                    <div>

                        <EnergyChart
                            data={data.energy}
                            country={selectedCountry}
                        />

                        {/* Placeholder for future charts */}
                        <div className="bg-black/30 rounded-xl p-4 mt-6 text-gray-400">
                            More insights coming soon...
                        </div>

                    </div>

                </div>

            </main>

            {/* Scroll driver */}           
            <div className="h-[500vh]" />

        </>
    );
}


export default Explorer;