import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { CloseIcon , HamburgerIcon } from '@chakra-ui/icons'
import '../Styling/MobNav.css'

const MobNav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    return (
        <div className="header">
            <div className="logo-nav">
                <div style={{
                    marginLeft: "2vw",
                }}>
                    <strong className="name" style={{ fontSize: "1.5rem" }}>Prince Sharma</strong>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <div className="menu_items">
                        <li className="option" >
                            <Link onClick={closeMobileMenu} className="linkscroll" activeClass="active" smooth spy to="home" duration={600} offset={-100}>Home</Link>
                        </li>
                        <li className="option" >
                            <Link onClick={closeMobileMenu} className="linkscroll" activeClass="active" smooth spy to="about" duration={600} offset={-100}>About Me</Link>

                        </li>
                        <li className="option" >
                            <Link onClick={closeMobileMenu} className="linkscroll" activeClass="active" smooth spy to="skills" duration={600} offset={-100}>Skills</Link>
                        </li>
                        <li className="option" >
                            <Link onClick={closeMobileMenu} className="linkscroll" activeClass="active" smooth spy to="projects" duration={600} offset={-100}>Projects</Link>
                        </li>
                        <li className="option" >
                            <Link onClick={closeMobileMenu} className="linkscroll" activeClass="active" smooth spy to="contact" duration={600} offset={-100}>Contact</Link>
                        </li>
                        <li className="option mobile-option" >
                            <button onClick={() => {
                                window.open("https://drive.google.com/file/d/11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6/view");
                                window.location.href = "https://drive.google.com/uc?export=download&id=11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6"
                            }} className="sign-up">
                                RESUME
                            </button>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseIcon w={25} h={25} className="menu-icon" />
                ) : (
                    <HamburgerIcon w={40} h={40} className="menu-icon" />
                )}
            </div>
        </div>
    )
}

export default MobNav