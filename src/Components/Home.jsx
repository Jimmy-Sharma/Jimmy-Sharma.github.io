import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaFileDownload, FaGithub } from "react-icons/fa";
import '../Styling/Home.css'
import HomeText from '../Animations/HomeText/HomeText';


const Home = () => {

  const handleClickHome = () => {
    window.open(
      "https://drive.google.com/file/d/11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div className="intro" id="home">
      <div className="backgroundIMG">
        <div>
          <img style={{ marginTop: "120px" }} src="newDeveloperBoyBG.gif" alt="developerBoy" />
        </div>
        <div>
          <div className='introName'>
            <p>Hi, I'm Prince Sharma</p>
          </div>
          <HomeText />
          <div className="contact" data-aos="fade-up">
            <a id="contact-github" href="https://github.com/i-m-prince" target="blank"><FaGithub className="icon" /></a>
            <a id="contact-linkedin" href="https://www.linkedin.com/in/princesharma1607/" target="blank"><GrLinkedin className="icon" /></a>
            <button id="resume-button-2" onClick={handleClickHome}>
              <a id="resume-link-2"
                href="https://drive.google.com/uc?export=download&id=11hj-XAex1zlYmribSLNlV4LQ5Eg-5js6"
                target="blank"><FaFileDownload className="icon" /></a></button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home