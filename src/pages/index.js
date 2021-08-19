import React from "react"
import Home from "../components/Home/Home"
import Skill from "../components/Skill/Skill"
import Project from "../components/Project/Project"
import "../index.module.css"
export default function IndexPage() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      {/* <div id='skill' className="skill">
        <Skill/>
      </div> */}
      <div id="project" className="project">
        <Project />
      </div>
    </div>
  )
}
