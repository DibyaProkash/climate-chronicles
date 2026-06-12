function AnimatedBackground() {

    const stars = Array.from(
        { length: 100 },
        (_, i) => i
    );


    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">

            {
                stars.map((star) => (
                    <div
                        key={star}
                        className="
                            absolute
                            w-1 h-1
                            bg-white
                            rounded-full
                            animate-pulse
                        "
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))
            }

        </div>
    );
}


export default AnimatedBackground;