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
          <img id="github-streak-stats" src="https://camo.githubusercontent.com/10e46a58921d0cee4f2e4c934ce95f411177c2772aae2a34c3f71e23914af8e2/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d4a696d6d792d536861726d61267468656d653d6461726b26686964655f626f726465723d74727565" alt="" />
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