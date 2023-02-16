import React from 'react'
import "../Styling/Navbar.css"
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className={'topbar '}>
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
                        <a href="#intro">HOME</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#about">ABOUT</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#Project">PROJECT</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#skill">SKILL</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#contact">CONTACT</a>
                    </div>
                    <div className="itemContainer1" id="lastDiv">
                        <a
                            href="https://drive.google.com/file/d/11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6/view?usp=sharing"
                            target="blank"
                            id="last"
                        >
                            RESUME <FaDownload className="icon1" />
                        </a>
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