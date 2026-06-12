function Tooltip({
    country,
    temperature,
    x,
    y
}) {

    if (!country) return null;


    return (
        <div
            className="
                fixed
                bg-black/80
                text-white
                p-3
                rounded-lg
                pointer-events-none
                z-50
            "
            style={{
                left: x + 15,
                top: y + 15
            }}
        >

            <h3 className="font-bold">
                {country}
            </h3>


            <p>
                Temperature:
                {" "}
                {
                    temperature !== null
                    ?
                    `${temperature} °C`
                    :
                    "No data"
                }
            </p>

        </div>
    );
}


export default Tooltip;