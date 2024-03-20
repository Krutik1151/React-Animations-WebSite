import React from 'react'
import "../Assets/Style/Project.css"
import CounterComponent from '../Component/component/CounterComponent'
import PagesDsignComponent from '../Component/component/PagesDsignComponent'
import ProjectComponent from '../Component/component/ProjectComponent'

import P_1 from "../Assets/img/project-1.jpg"
import P_2 from "../Assets/img/project-2.jpg"
import P_3 from "../Assets/img/project-3.jpg"
import P_4 from "../Assets/img/project-4.jpg"
import P_5 from "../Assets/img/project-5.jpg"
import P_6 from "../Assets/img/project-6.jpg"

const Project = () => {
  return (
    <>
      <section className="project">
        <PagesDsignComponent heading="Project" page="Project" />
        <CounterComponent />
        <h1>Our Project</h1>
        <h4>Our Recently Completed <br /> Projects</h4>
        <div className="project-component">
          <ProjectComponent img={P_1} hader="Web design" information="Web Analysis" />
          <ProjectComponent img={P_2} hader="Cyber Security" information="Cyber Security Core" />
          <ProjectComponent img={P_3} hader="Mobile Info" information="Upcomming Phone" />
          <ProjectComponent img={P_4} hader="Web Development" information="Web Analysis" />
          <ProjectComponent img={P_5} hader="Digital Marketing" information="Marketing Analysis" />
          <ProjectComponent img={P_6} hader="keyword Research" information="keyword Analysis" />
        </div>
      </section>
    </>
  )
}

export default Project
