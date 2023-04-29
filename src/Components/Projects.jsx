import React from 'react'
import '../Styling/Project.css'

const Projects = () => {
  return (
    <div>
      <div id="projects" >
        <h1 className="pro" style={{color:"white"}}>
          Projects
        </h1>
        <hr style={{ width: 150, marginTop: "-50px", height: 3, backgroundColor: "#18d26e", border: "none" }} />

        <div className="cc">
          <div>
            <div className="container">
              <div className="project-card">
                <img src="zara.png" alt="zara" />
                <h2 className="project-title">ZARA</h2>
                <p className="project-description">
                  ZARA is an e-commerce website. where you can purchase
                  clothing stuff.
                </p>
                <p className="project-tech-stack">TechStacks: React,Redux,Redux-Thunk,ChakraUi,Css,Firebase</p>
                <div className="p_btn">
                  <button className="btn">
                    <a
                      className="project-deployed-link"
                      style={{ textDecoration: "none" }}
                      href="https://jimmy-sharma.github.io/beneficial-jelly-4258/"
                      target="blank"
                    >
                      Check it Out!
                    </a>
                  </button>
                  <button className="btn">
                    <a
                      className="project-github-link"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/Jimmy-Sharma/beneficial-jelly-4258"
                      target="blank"
                    >
                      Github Link
                    </a>
                  </button>
                </div>
              </div>

              <div className="project-card">
                <img src="sephora.png" alt="sephora" />
                <h2 className="project-title">Sephora</h2>
                <p className="project-description">
                  Sephora is an e-commerce website. where you can purchase
                  cosmetics stuff.
                </p>
                <p className="project-tech-stack">TechStacks: React,Redux,Css,ChakraUi,Firebase</p>
                <div className="p_btn">
                  <button className="btn">
                    <a
                      className="project-deployed-link"
                      style={{ textDecoration: "none" }}
                      href="https://sephora-vishwa.netlify.app/"
                      target="blank"
                    >
                      Check it Out!
                    </a>
                  </button>
                  <button className="btn">
                    <a
                      className="project-github-link"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/Vishwa9011/sephora"
                      target="blank"
                    >
                      Github Link
                    </a>
                  </button>
                </div>
              </div>
              {/* 3rd */}

              <div className="project-card" >
                <img src="Youtube.png" alt="YT" />
                <h2 className="project-title">Youtube</h2>
                <p className="project-description">
                YouTube is a popular video sharing website where registered users can upload and share videos with anyone able to access the site.
                </p>
                <p className="project-tech-stack">TechStacks: Html,Css,JavaScript</p>
                <div className="p_btn">
                  <button className="btn">
                    <a
                      className="project-deployed-link"
                      style={{ textDecoration: "none" }}
                      href="https://cheerful-alfajores-04b3e1.netlify.app/"
                      target="blank"
                    >
                      Check it Out!
                    </a>
                  </button>
                  <button className="btn">
                    <a
                      className="project-github-link"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/i-m-prince/Youtube-Clone"
                      target="blank"
                    >
                      Github Link
                    </a>
                  </button>
                </div>
              </div>

              {/* 4th */}

              <div className="project-card">
                <img src="DeccanHerald.png" alt="DH" />
                <h2 className="project-title">Deccan Herald</h2>
                <p className="project-description">
                The Deccan Herald is an Indian English-language daily newspaper published from Hyderabad.
                </p>
                <p className="project-tech-stack">TechStacks: Html,Css,JavaScript</p>
                <div className="p_btn">
                  <button className="btn">
                    <a
                      className="project-deployed-link"
                      style={{ textDecoration: "none" }}
                      href="https://cerulean-kelpie-a9ddc9.netlify.app/"
                      target="blank"
                    >
                      Check it Out!
                    </a>
                  </button>
                  <button className="btn">
                    <a
                      className="project-github-link"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/i-m-prince/skillful-soap-8446"
                      target="blank"
                    >
                      Github Link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects