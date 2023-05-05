import React from 'react'
import '../Styling/Project.css'

const Projects = () => {
  const tools1 = [
    "HTML",
    "CSS",
    "JS",
    "React JS",
    "Chakra UI"
  ]
  const tools2 = [
    "HTML",
    "CSS",
    "JS"
  ]
  const tools3 = [
    "HTML",
    "CSS",
    "JS"
  ]
  const tools4 = [
    "HTML",
    "CSS",
    "JS"
  ]

  let p1 = tools1.map((el) => (
    <button key={el} className="tool">
      {el}
    </button>
  ));
  let p2 = tools2.map((el) => (
    <button key={el} className="tool">
      {el}
    </button>
  ));
  let p3 = tools3.map((el) => (
    <button key={el} className="tool">
      {el}
    </button>
  ));
  let p4 = tools4.map((el) => (
    <button key={el} className="tool">
      {el}
    </button>
  ));

  return (
    <div className="project_main_div">
      {/* <section className="project" id="#projects"> */}
      <section id="projects">
      </section>
      <div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "50px", color: "White" }}>Projects</h1>
      </div>



      <div className="proj_cont">
        <div className="card">
          <div className="left">
            <img src="vastra.png" alt="ss" />
          </div>
          <div className="right">

            <div className="title">Myntra Clone</div>
            <div className="desc">Vastra (Myntra Clone) is a one stop shop for all your fashion and lifestyle needs.</div>
            <div className="stacks">{p1}</div>


            <div className="links">
              <button>  <a href="https://github.com/devendra684/Vastra-Myntra_Clone" target="_blank" rel="noreferrer"> Git Repo </a></button>

              <button>  <a href="https://vastra-rho.vercel.app/" target="_blank" rel="noreferrer"> Live Site </a></button>

            </div>


          </div>

        </div>
        <div className="card">
          <div className="left">
            <img src="zara.png" alt="ss" />
          </div>
          <div className="right">

            <div className="title">Zara Clone</div>
            <div className="desc">ZARA is an e-commerce website. where you can purchase clothing stuff.</div>
            <div className="stacks">{p2}</div>



            <div className="links">
              <button>  <a href="https://github.com/Jimmy-Sharma/beneficial-jelly-4258" target="_blank" rel="noreferrer"> Git Repo </a></button>

              <button>  <a href="https://jimmy-sharma.github.io/beneficial-jelly-4258/" target="_blank" rel="noreferrer"> Live Site </a></button>

            </div>

          </div>

        </div>
        <div className="card">
          <div className="left">
            <img src="sephora.png" alt="ss" />

          </div>
          <div className="right">

            <div className="title">Sephora Clone</div>
            <div className="desc">Sephora is an e-commerce website. where you can purchase cosmetics stuff.</div>
            <div className="stacks">{p3}</div>



            <div className="links">
              <button>  <a href="https://github.com/Vishwa9011/sephora" target="_blank" rel="noreferrer"> Git Repo </a></button>
              <button>  <a href="https://sephora-vishwa.netlify.app/" target="_blank" rel="noreferrer"> Live Site </a></button>

            </div>

          </div>

        </div>
        <div className="card">
          <div className="left">
            <img src="Youtube.png" alt="ss" />

          </div>
          <div className="right">

            <div className="title">Youtube Clone</div>
            <div className="desc">Collaborative Project - Built a fully responsive ecommerce website where you can buy and get best deals from brands.</div>
            <div className="stacks">{p4}</div>



            <div className="links">
              <button>  <a href="https://github.com/Jimmy-Sharma/Youtube-Clone" target="_blank" rel="noreferrer"> Git Repo </a></button>

              <button>  <a href="https://cheerful-alfajores-04b3e1.netlify.app/" target="_blank" rel="noreferrer">Live Site </a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects