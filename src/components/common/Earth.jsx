import { motion } from "framer-motion";

function Earth() {

    return (
        <motion.div
            animate={{
                rotate: 360
            }}

            transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
            }}

            className="
                w-60 h-60
                md:w-80 md:h-80
                rounded-full
                bg-gradient-to-br
                from-blue-500
                via-green-500
                to-blue-900
                shadow-[0_0_60px_#3b82f6]
            "
        />
    );
}


export default Earth;