import { motion } from "framer-motion";

function StoryPanel({ story }) {

    return (
        <motion.div
            key={story.year}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
                fixed
                top-24
                left-10
                w-96
                bg-black/60
                backdrop-blur-md
                text-white
                p-6
                rounded-xl
                shadow-lg
                z-50
            "
        >

            <h2 className="text-2xl font-bold mb-2">
                {story.title}
            </h2>

            <p className="text-gray-300">
                {story.text}
            </p>

            <div className="mt-4 text-sm text-blue-400">
                Year: {story.year}
            </div>

        </motion.div>
    );
}

export default StoryPanel;