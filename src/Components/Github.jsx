import React from 'react'
import GithubCalender from 'react-github-calendar'
import '../Styling/Github.css'

const Github = () => {
  return (
    <div>
      <h1 align="center" style={{ fontSize: "2.5rem", marginBottom: "50px" }}>Github</h1>
      <div className="git">
        <div className="calender">
          <GithubCalender color={"orange"} username='Jimmy-Sharma'>
          </GithubCalender>
        </div>
        <div className="stats">
          <div>
            <img align="center" src="https://github-readme-stats-sigma-five.vercel.app/api?username=Jimmy-Sharma&show_icons=true&locale=en&theme=gotham" alt="Jimmy-Sharma" />
          </div>
          <div>
            <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=Jimmy-Sharma&theme=gotham" alt="Jimmy-Sharma" /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Github