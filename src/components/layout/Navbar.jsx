import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="
                fixed top-0 left-0 
                w-full z-50
                flex justify-between
                items-center
                px-8 py-5
                bg-black/30
                backdrop-blur-md
            "
        >
            <h1 className="text-xl font-bold">
                🌍 Climate Chronicles
            </h1>

            <div className="flex gap-6">
                <Link to="/">
                    Home
                </Link>

                <Link to="/explore">
                    Explore
                </Link>

                <Link to="/about">
                    About
                </Link>
            </div>

        </motion.nav>
    );
}

export default Navbar;