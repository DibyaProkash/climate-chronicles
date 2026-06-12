import { useState, useEffect } from "react";

import {
    loadTemperatureData,
    loadCO2Data,
    loadEnergyData
} from "../utils/dataLoader";

import {
    processTemperature,
    processCO2
} from "../utils/dataProcessor";


function useClimateData() {

    const [data, setData] = useState({
        temperature: [],
        co2: [],
        energy: []
    });

    const [loading, setLoading] =
        useState(true);


    useEffect(() => {

        async function loadData() {

            const [
                temp,
                co2,
                energy
            ] = await Promise.all([
                loadTemperatureData(),
                loadCO2Data(),
                loadEnergyData()
            ]);


            setData({
                temperature:
                    processTemperature(temp),

                co2:
                    processCO2(co2),

                energy
            });


            setLoading(false);
        }


        loadData();

    }, []);


    return {
        data,
        loading
    };
}


export default useClimateData;