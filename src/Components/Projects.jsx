import React from 'react'
import '../Styling/Project.css'

const Projects = () => {
  return (
    <div>
      <div id="projects" >
        <h1 className="pro">
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
                <p className="project-tech-stack">useing React,redux,redux-thunk,chakraUi,css,Firebase</p>
                <div className="p_btn">
                  <button className="btn">
                    <a
                      className="project-deployed-link"
                      style={{ textDecoration: "none" }}
                      href="https://jimmy-sharma.github.io/beneficial-jelly-4258/"
                    >
                      Check it Out!
                    </a>
                  </button>
                  <button className="btn">
                    <a
                      className="project-github-link"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/Jimmy-Sharma/beneficial-jelly-4258"
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
                <p className="project-tech-stack">useing React,redux,css,chakraUi,Firebase</p>
                <div className="p_btn">
                  <button className="btn">
                    <a
                      className="project-deployed-link"
                      style={{ textDecoration: "none" }}
                      href="https://sephora-vishwa.netlify.app/"
                    >
                      Check it Out!
                    </a>
                  </button>
                  <button className="btn">
                    <a
                      className="project-github-link"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/Vishwa9011/sephora"
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
                  This is a clone of MyFitnessPal, a smartphone app and website
                  that tracks diet and exercise. Features: carousel; optimized
                </p>
                <p className="project-tech-stack">Useing Html,css,javascript</p>
                <div className="p_btn">
                  <button className="btn">
                    <a
                      className="project-deployed-link"
                      style={{ textDecoration: "none" }}
                      href="https://cheerful-alfajores-04b3e1.netlify.app/"
                    >
                      Check it Out!
                    </a>
                  </button>
                  <button className="btn">
                    <a
                      className="project-github-link"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/i-m-prince/Youtube-Clone"
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
                  MyGlamm, the Indian e-commerce company that sells cosmetics and
                  personal care products. The project was done in collaboration.
                </p>
                <p className="project-tech-stack">Useing Html,css,javascript</p>
                <div className="p_btn">
                  <button className="btn">
                    <a
                      className="project-deployed-link"
                      style={{ textDecoration: "none" }}
                      href="https://cerulean-kelpie-a9ddc9.netlify.app/"
                    >
                      Check it Out!
                    </a>
                  </button>
                  <button className="btn">
                    <a
                      className="project-github-link"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/i-m-prince/skillful-soap-8446"
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