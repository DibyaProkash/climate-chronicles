function EnergyChart({ data, country }) {

    const record = data.find(
        d => d.country === country
    );

    if (!record) return null;


    const total =
        record.renewable +
        record.nonRenewable;


    const renewableWidth =
        (record.renewable / total) * 100;

    const nonRenewableWidth =
        (record.nonRenewable / total) * 100;


    return (
        <div className="bg-black/30 rounded-xl p-4 mt-6">

            <h2 className="mb-3 text-xl">
                ⚡ Energy Mix
            </h2>


            <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden">

                <div
                    style={{ width: `${renewableWidth}%` }}
                    className="h-full bg-green-500"
                />

            </div>

            <p className="mt-2 text-sm text-gray-300">
                Renewable: {record.renewable}%
            </p>


            <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden mt-3">

                <div
                    style={{ width: `${nonRenewableWidth}%` }}
                    className="h-full bg-red-500"
                />

            </div>

            <p className="mt-2 text-sm text-gray-300">
                Non-Renewable: {record.nonRenewable}%
            </p>

        </div>
    );
}

export default EnergyChart;