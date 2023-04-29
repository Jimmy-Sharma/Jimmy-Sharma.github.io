import React from 'react'
import '../Styling/About.css'
import Type from './Type'
// import {}  from 'react-icons/fa'

const About = () => {

    const resumeOnclick = () => {
        window.open("https://drive.google.com/file/d/11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6/view", "_blank")
    }
    return (
        <div className="about_div">
            <section id="about">
            </section>
            <div>
                <h1 className="abt_head">About Me</h1>
            </div>
            <div className="about_cont">
                <div>
                    <img src="PrincePictureBG.png" alt="pp" />
                </div>
                <div className="typo_div">

                    <div className="abt_name">
                        <h1 className="about_details">
                            Hello, I am <span className="about_name">Prince Sharma</span>
                        </h1>
                        <h1>
                            {/* ************************************* */}
                            <span className="typo"><Type /></span>
                        </h1>
                    </div>
                    <div style={{ backgroundColor: "#fff", color: "black", padding: "15px", fontWeight: "bolder", borderRadius: "35px", textAlign: "left" }} className="abt_desc">
                        <p id="box" style={{ fontWeight: "light" }} className="desc_box"
                            variant="subtitle1"
                            color="initial">
                            An enthusiastic Full Stack Web Developer skilled in MERN stack with 1300+ hours of experience in coding. Knowledge of HTML, CSS, Javascript, React, Redux, Next.js, Node.js, Express.js and MongoDB. High adaptability to learn new technologies quickly and paying attention to details. Looking to start a career as a web developer with a reputed firm driven by technology.
                            <br />
                        </p>
                    </div>

                    <div className="abt_icons">
                        <div className="about__contact center">
                            <a
                                href="https://github.com/Jimmy-Sharma"
                                aria-label="github"
                                target="_blank"
                                rel="noreferrer"
                                className="link link--icon"
                            >
                                Github
                            </a>
                            <a
                                href="mailto:prince786no.1@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="mail"
                                className="link link--icon"
                            >
                                EmailIcon
                            </a>
                            <a
                                href="tel:+91 8637085433"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="phone"
                                className="link link--icon"
                            >
                                PhoneIcon
                            </a>
                            <a
                                href="https://www.linkedin.com/in/princesharma1607/"
                                aria-label="linkedin"
                                className="link link--icon"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedInIcon
                            </a>
                        </div>

                        <button onClick={resumeOnclick} variant="outlined" style={{ background: "black", color: "white", fontWeight: "bolder", fontSize: "15px" }}

                        >
                            <a
                                rel="noreferrer"
                                style={{ textDecoration: "none", color: "white" }}
                                href="https://drive.google.com/uc?export=download&id=11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6"
                            >

                                RESUME

                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About