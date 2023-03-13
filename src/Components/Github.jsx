import React from 'react'
import GithubCalender from 'react-github-calendar'
import '../Styling/Github.css'

const Github = () => {
  return (
    <div className='githubStat' style={{ display: "grid", alignItems: "center", justifyContent: "center" }}>
      <GithubCalender  color={"orange"} username='Jimmy-Sharma'>

      </GithubCalender>
      <div style={{ display: "grid", alignItems: "center", justifyContent: "center" ,gap:'20px', marginTop:"40px"}}>
        <div>
          <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?username=Jimmy-Sharma&theme=dark&hide_border=false" alt="" />
        </div>
        <div>
          <img id='github-top-langs' src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jimmy-Sharma&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="" />
        </div>
        <div>
          <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=Jimmy-Sharma&theme=dark&hide_border=false&include_all_commits=true&count_private=true" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Github