import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import AnimatedBackground from "../components/common/AnimatedBackground";
import Earth from "../components/common/Earth";


function Home() {

    const navigate = useNavigate();


    return (
        <>
            <Navbar />

            <AnimatedBackground />

            <main
                className="
                    min-h-screen
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    px-6
                "
            >

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1
                    }}

                    className="
                        text-5xl
                        md:text-7xl
                        font-bold
                        mb-6
                    "
                >
                    Climate Chronicles
                </motion.h1>


                <motion.p

                    initial={{
                        opacity: 0
                    }}

                    animate={{
                        opacity: 1
                    }}

                    transition={{
                        delay: 0.5,
                        duration: 1
                    }}

                    className="
                        text-lg
                        md:text-2xl
                        max-w-3xl
                        text-gray-300
                        mb-8
                    "
                >

                    A visual journey through
                    125 years of Earth's
                    changing climate.

                </motion.p>


                <Earth />


                <motion.button

                    whileHover={{
                        scale: 1.1
                    }}

                    whileTap={{
                        scale: 0.95
                    }}

                    onClick={() =>
                        navigate("/explore")
                    }

                    className="
                        mt-10
                        px-8 py-4
                        rounded-full
                        bg-blue-600
                        text-white
                        font-bold
                        shadow-lg
                    "

                >

                    Begin the Journey ↓

                </motion.button>


            </main>

        </>
    );

}


export default Home;