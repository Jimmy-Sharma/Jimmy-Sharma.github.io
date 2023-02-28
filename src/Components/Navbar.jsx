import React from 'react'
import "../Styling/Navbar.css"
import { FaDownload } from 'react-icons/fa';

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
                        <span>+91 8637085433</span>
                    </div>
                    <div className="itemContainer">
                        <span>prince786no.1@gmail.com</span>
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
                        <a href="#projects" >PROJECT</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#skills" className="nav-link skills">SKILL</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#contact" >CONTACT</a>
                    </div>
                    <div className="itemContainer1" id="lastDiv">
                        <button id="resume-button-1" onClick={handleOpen}>
                            <a
                                id="resume-link-1"
                                href="https://drive.google.com/uc?export=download&id=11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6"
                                target="blank"
                            >
                                RESUME <FaDownload className="icon1" />
                            </a>
                        </button>
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