import { useEffect, useState } from "react";
import { stories } from "../data/stories";

export default function useStory(setYear) {

    const [index, setIndex] = useState(0);


    useEffect(() => {

        const handleScroll = () => {

            const scrollY = window.scrollY;
            const height = window.innerHeight;

            const newIndex = Math.min(
                stories.length - 1,
                Math.floor(scrollY / height)
            );

            setIndex(newIndex);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);


    useEffect(() => {
        setYear(stories[index].year);
    }, [index]);


    return stories[index];
}