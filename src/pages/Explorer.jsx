import Navbar from "../components/layout/Navbar";

function Explorer() {

    return (
        <>
            <Navbar />

            <main className="pt-32 px-10">

                <h1 className="text-5xl">
                    Climate Explorer
                </h1>

                <p className="mt-5 text-gray-300">
                    Interactive world map and story
                    coming soon...
                </p>

            </main>
        </>
    );
}

export default Explorer;