import React from 'react'
import '../Styling/Skills.css'

const Skills = () => {
  return (
<div className="skill"  id="skills">
      <div>
        <h1>Tech Stacks</h1>
        <hr className="hr" />
      </div>
      <div className='techStacks'>
        <div className='techStacksDivL'>
          <img src="html.png" alt="HTML"  className="skills-card-img"/>
          <p id='html' className="skills-card-name">HTML</p>
        </div>
        <div className='techStacksDivM'>
          <img src="css-3.png" alt="CSS"  className="skills-card-img"/>
          <p id='css' className="skills-card-name">CSS</p>
        </div>
        <div className='techStacksDivR'>
          <img src="js.png" alt="JS"  className="skills-card-img"/>
          <p id='js' className="skills-card-name">JS</p>
        </div>
        <div className='techStacksDivL'>
          <img src="react.png" alt="React"  className="skills-card-img"/>
          <p id='react' className="skills-card-name">React</p>
        </div>
        <div className='techStacksDivM'>
          <img src="typescript.png" alt="Typescript"  className="skills-card-img"/>
          <p id='types' className="skills-card-name">Typescript</p>
        </div>
        <div className='techStacksDivR'>
          <img src="nodejs.png" alt="NodeJS"  className="skills-card-img"/>
          <p id='node' className="skills-card-name">NodeJS</p>
        </div>
        <div className='techStacksDivL'>
          <img src="redux.png" alt="Redux"  className="skills-card-img"/>
          <p id='redux' className="skills-card-name">Redux</p>
        </div>
        <div className='techStacksDivM'>
          <img src="mongodb.png" alt="MongoDB"  className="skills-card-img"/>
          <p id='mongo' className="skills-card-name">MongoDb</p>
        </div>
        <div className='techStacksDivR'>
          <img src="express.png" alt="ExpressJS"  className="skills-card-img"/>
          <p id='express' className="skills-card-name">ExpressJS</p>
        </div>
      </div>
    </div>
    
  )
}

export default Skills 