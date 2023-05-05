import React from 'react'
import { useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaSearchLocation, FaWhatsapp } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css"
import '../Styling/Contact.css'

const Contact = () => {

  // const [message, setMessage] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  })
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };

  return (
    <div className="contacts">
      <section id="contact" style={{ marginTop: "100px" }}></section>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 align="center" style={{ color: "#5779E5", fontSize: "2.5rem" }}>Get in Touch</h1>
      </div>
      <div className='contact'>
        <div className='logos'>
          <div>
            <span>
              <a
                href="https://api.whatsapp.com/send?phone=+918637085433"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="whatsapp" />
              </a>
            </span>
            <span>
              <p>+91 8637085433</p>
            </span>
          </div>
          <div>
            <span>
              <a
                href="https://www.linkedin.com/in/princesharma1607/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="linkedin" />
              </a>
            </span>
            <span>
              <p>Linkedin</p>
            </span>
          </div>
          <div>
            <span>
              <a
                href="https://github.com/Jimmy-Sharma/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className='github' />
              </a>
            </span>
            <span>
              <p>Github</p>
            </span>
          </div>
          <div>
            <span>
              <a
                href="mailto:prince786no.1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className='email' />
              </a>
            </span>
            <span>
              <p>prince786no.1@gmail.com</p>
            </span>
          </div>
          <div>
            <span>
              <a href="tel:+918637085433" target="_blank" rel="noreferrer">
                <FaSearchLocation className="phone" />
              </a>
            </span>
            <span>
              <p>Durgapur, West Bengal</p>
            </span>
          </div>
        </div>
        <div>
          <img src="https://meesahil7.github.io/static/media/mail.1db650d351729a0f17b4e3104e6a7b7a.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact