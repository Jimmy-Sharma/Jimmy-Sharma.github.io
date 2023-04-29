import React from 'react'
import "../Styling/Navbar.css"
import { FaDownload } from 'react-icons/fa';
import { Link } from "react-router-dom"

const Navbar = () => {
    const handleOpen = () => {
        window.open(
            "https://drive.google.com/file/d/11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6/view?usp=sharing",
            "_blank"
        );
    }
    return (
        <div className={'topbar '} id="nav-menu">
            <div className="wrapper">
                <div className="left">
                    <div className="logoImg">
                        <img src="PS.png" alt="PS_icon" />
                    </div>
                    <div className="itemContainer">
                        
                    </div>
                    <div className="itemContainer">
                        
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer1">
                        <a href="#home" className="nav-link home">HOME</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#about" className="nav-link about">ABOUT</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#projects" className="nav-link projects" >PROJECT</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#skills" className="nav-link skills">SKILL</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#contact" className="nav-link contact">CONTACT</a>
                    </div>
                    <div className="itemContainer1" id="lastDiv">
                        {/* <button id="resume-button-1" onClick={handleOpen}>
                            <a
                                id="resume-link-1"
                                href="https://drive.google.com/uc?export=download&id=11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6"
                                target="blank"
                            >
                                RESUME <FaDownload className="icon1" />
                            </a>
                        </button> */}
                        <Link className="nav-link resume" to="https://drive.google.com/uc?export=download&id=11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6">
                            <button
                                id="resume-button-1"
                                onClick={handleOpen}
                            >
                                RESUME <FaDownload className="icon1" />

                            </button>
                        </Link>
                    </div>


                    <div
                        className="hamburger"
                    // onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar