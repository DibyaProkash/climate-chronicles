import {
    createContext,
    useContext
} from "react";

import useClimateData
    from "../hooks/useClimateData";


const ClimateContext =
    createContext();


export function ClimateProvider({ children }) {


    const climate =
        useClimateData();


    return (

        <ClimateContext.Provider
            value={climate}
        >

            {children}

        </ClimateContext.Provider>

    );
}


export function useClimate() {

    return useContext(
        ClimateContext
    );
}