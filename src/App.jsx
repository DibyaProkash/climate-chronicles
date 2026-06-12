import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {
    ClimateProvider
} from "./context/ClimateContext";

import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import About from "./pages/About";


function App() {

    return (

        <ClimateProvider>

            <BrowserRouter>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/explore"
                        element={<Explorer />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                </Routes>

            </BrowserRouter>

        </ClimateProvider>

    );
}

export default App;