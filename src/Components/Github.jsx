import React from 'react'
import GithubCalender from 'react-github-calendar'

const Github = () => {
  return (
    <div>
        <GithubCalender color={"blue"} username='i-m-prince'>

        </GithubCalender>
        <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=i-m-prince&theme=default&layout=compact" alt="" />
        <img id='github-top-langs' src="https://github-readme-stats.vercel.app/api/top-langs/?username=i-m-prince&theme=default&layout=compact" alt="" />
        <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=i-m-prince&show_icons=true&locale=en&theme=default&layout=compact" alt="" />
    </div>
  )
}

export default Github