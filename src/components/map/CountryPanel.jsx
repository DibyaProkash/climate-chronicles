function CountryPanel({
    country,
    temperature
}) {


    if (!country) {
        return (
            <div
                className="
                    bg-black/40
                    rounded-xl
                    p-5
                    text-gray-300
                "
            >
                Click a country to view details.
            </div>
        );
    }


    return (

        <div
            className="
                bg-black/40
                rounded-xl
                p-5
            "
        >

            <h2 className="text-2xl font-bold">
                {country}
            </h2>


            <p className="mt-3">
                Temperature anomaly:
                {temperature} °C
            </p>


        </div>

    );

}


export default CountryPanel;