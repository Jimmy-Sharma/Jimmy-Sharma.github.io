import React from 'react'
import '../Styling/About.css'

const About = () => {


    
  return (
    <div id="about"  className="about section">
            <br />
            <h1 style={{color:"white"}}>About Me</h1>
            <hr style={{width: 150, marginTop: "-25px",height: 3, backgroundColor: "#18d26e", border: "none"}}/>
            <div className="aboutMain">
                <div className="aboutRight">
                    <h1 id="user-detail-name">I'm Prince Sharma, a <span style={{ color: "white"}}>Full Stack Web Developer</span></h1>

                    <p  id="user-detail-intro">An enthusiastic Full Stack Web Developer skilled in MERN stack with 1300+ hours of experience in coding. Knowledge of HTML, CSS, Javascript, React, Redux, Next.js, Node.js, Express.js and MongoDB. High adaptability to learn new technologies quickly and paying attention to details. Looking to start a career as a web developer with a reputed firm driven by technology.</p>

                </div>
                <div className="aboutLeft">
                    <img className="home-img" src="PrincePictureBG.png" alt="PrinceIMG" />
                </div>
            </div>
        </div>
  )
}

export default About