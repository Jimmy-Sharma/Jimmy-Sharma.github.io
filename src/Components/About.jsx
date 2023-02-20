import React from 'react'
import '../Styling/About.css'

const About = () => {
  return (
    <div id="about"  className="aboutSection">
            <br />
            <h1 style={{color:"yellow"}}>About Me</h1>
            <hr style={{width: 150, marginTop: "-25px",height: 3, backgroundColor: "#18d26e", border: "none"}}/>
            <div className="aboutMain">
                <div className="aboutRight">
                    <h1 id="user-detail-name">I'm Prince Sharma, a <span style={{ color: "yellow"}}>Full Stack Web Developer</span></h1>
                    <p id="user-detail-intro">A Full Stack Developer, with strong administrative and communication skills, good attention to detail and with the ability to write efficient code using MERN Stack.</p>

                    <p>I have been developing Web Apps for over 7 months now. Well versed in coding using Javascript and its frameworks.</p>

                    <p>As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.</p>
                </div>
                <div className="aboutLeft">
                    <img className="home-img" src="PrincePictureBG.png" alt="PrinceIMG" />
                </div>
            </div>
        </div>
  )
}

export default About