import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
    const style = {
        color: "#807DFE"
    }
    return (
        <>
            <div
                style={style}
            >
                <Typewriter
                    options={{
                        strings: ["Full Stack Web Developer", "MERN Stack Developer"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        border: "red",
                    }}
                />

            </div>

        </>
    )
}

export default Type