import React from 'react'
import "../Styling/Navbar.css"
import { Link } from 'react-scroll'
import MobNav from './MobNav';

const Navbar = () => {
    const resumeOnclick = () => {
        window.open("https://drive.google.com/file/d/11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6/view", "_blank")
    }
    return (
        <>
            <div>
                <div className="nav">
                    <div className="TopArea">
                        <div style={{
                            marginLeft: "2vw",
                        }}>
                            <strong className="name">Prince Sharma</strong>
                        </div>
                        <div className="nav_options" >
                            <button
                                className="underLine2 hide_on_responsive princeBTN"
                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "white", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="home" duration={600} offset={-75}>HOME</Link>
                            </button>
                            <button
                                className="underLine2 hide_on_responsive princeBTN"
                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "white", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="about" duration={600} offset={-75}>ABOUT ME</Link>
                            </button>
                            <button
                                className="underLine2 hide_on_responsive princeBTN"
                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "white", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="skills" duration={600} offset={-100}>SKILLS</Link>
                            </button>
                            <button
                                className="underLine2 hide_on_responsive princeBTN"
                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "white", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="projects" duration={600} offset={-75}>PROJECTS</Link>
                            </button>
                            <button
                                className="underLine2 hide_on_responsive princeBTN"
                                style={{ color: "white", fontSize: "15px" }}
                                variant="text" color="default">
                                <Link style={{ color: "white", fontWeight: "bolder" }} className="linkscroll" activeClass="active" smooth spy to="contact" duration={600} offset={-50}>CONTACTS</Link>
                            </button>
                            <a href="https://drive.google.com/uc?export=download&id=11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6"
                                style={{ textDecoration: "none", color: "white" }}>
                                <button onClick={resumeOnclick}
                                    style={{ color: "white", background: "#5779E5", fontSize: "15px", fontWeight: "bolder", borderRadius: "7px", cursor:"pointer" }}
                                    variant="outlined" color="default">
                                    RESUME
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="TopAreaMiddle">
                    <MobNav />
                </div>
            </div>
            <div className="home">
                <section id="home"></section>
                <div>
                    <div
                        className="Top_Area_Responsive">
                        <div>
                            <p style={{ fontSize: "3rem" }}>Hi, I'm <span style={{ fontSize: "3rem", fontWeight: "bold", color: "#5779E5" }}>Prince Sharma</span>
                                <br />
                                <span style={{ fontSize: "2rem", fontWeight: "500" }}>  Full Stack Web Developer</span>
                            </p>
                            <button
                                onClick={resumeOnclick}
                                variant="contained" id="btn">
                                <a
                                    rel="noreferrer"
                                    style={{ textDecoration: "none", color: "white" }}
                                    href="https://drive.google.com/uc?export=download&id=11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6"
                                >
                                    RESUME
                                </a>
                            </button>
                        </div>
                        <div className="divvid">
                            <img className="Vid" src="https://camo.githubusercontent.com/8d5deef06a13d0ae4d973c3947748e85eae585dcf91861de1b0f97700876c9e3/68747470733a2f2f7777772e7362722d746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30362f6d65726e2e706e67" alt="img" />
                        </div>
                    </div>
                </div>
                {/* </section> */}
            </div>
        </>
    )
}

export default Navbar