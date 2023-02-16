import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import '../Styling/Home.css'
import HomeText from '../Animations/HomeText/HomeText';


const Home = () => {

  return (
    <div className="intro" id="home">
      <div className="backgroundIMG">
        <div>
          <img src="developerBoy.gif" alt="developerBoy" />
        </div>
        <div>
          <div className='introName'>
            <p>Hi, I'm Prince Sharma</p>
          </div>
          <HomeText />
          <div className="contact" data-aos="fade-up">
            <a href="https://github.com/i-m-prince" target="blank"><FaGithub className="icon" /></a>
            <a href="https://www.linkedin.com/in/princesharma1607/" target="blank"><GrLinkedin className="icon" /></a>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home