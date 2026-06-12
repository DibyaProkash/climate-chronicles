import Navbar from "../components/layout/Navbar";
import {
    useClimate
} from "../context/ClimateContext";


function Explorer() {


    const {
        data,
        loading
    } = useClimate();


    if (loading) {
        return (
            <h1>
                Loading climate data...
            </h1>
        );
    }


    return (

        <>
            <Navbar />

            <main className="pt-32 p-8">

                <h1 className="text-4xl">
                    Climate Data Loaded
                </h1>


                <pre className="mt-6">
                    {
                        JSON.stringify(
                            data,
                            null,
                            2
                        )
                    }
                </pre>

            </main>

        </>
    );
}


export default Explorer;