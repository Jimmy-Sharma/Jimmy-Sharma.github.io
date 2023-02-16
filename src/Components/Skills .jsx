import React from 'react'
import '../Styling/Skills.css'

const Skills = () => {
  return (
    <div className="skill" id="skill">
      <div>
        <h1>Tech Stacks</h1>
        <hr className="hr" />
      </div>
      <div className='techStacks'>
        <div>
          <img src="html.png" alt="HTML" className='techIMG'/>
          <p id='html'>HTML</p>
        </div>
        <div>
          <img src="css-3.png" alt="CSS" className='techIMG'/>
          <p id='css'>CSS</p>
        </div>
        <div>
          <img src="js.png" alt="JS" className='techIMG'/>
          <p id='js'>JS</p>
        </div>
        <div>
          <img src="react.png" alt="React" className='techIMG'/>
          <p id='react'>React</p>
        </div>
        <div>
          <img src="typescript.png" alt="Typescript" className='techIMG'/>
          <p id='types'>Typescript</p>
        </div>
        <div>
          <img src="nodejs.png" alt="NodeJS" className='techIMG'/>
          <p id='node'>NodeJS</p>
        </div>
        <div>
          <img src="redux.png" alt="Redux" className='techIMG'/>
          <p id='redux'>Redux</p>
        </div>
        <div>
          <img src="mongodb.png" alt="MongoDB" className='techIMG'/>
          <p id='mongo'>MongoDb</p>
        </div>
        <div>
          <img src="express.png" alt="ExpressJS" className='techIMG'/>
          <p id='express'>ExpressJS</p>
        </div>
      </div>
    </div>
  )
}

export default Skills 