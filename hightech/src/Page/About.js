import React from 'react'
import PagesDsignComponent from '../Component/component/PagesDsignComponent'
import AboutUsComponent from '../Component/component/AboutUsComponent'
import TeamComponent from '../Component/component/TeamComponent'
import CounterComponent from '../Component/component/CounterComponent'

const About = () => {
  return (
    <>
      <section className="about">
        <PagesDsignComponent heading="About Us" page="About" />
        <CounterComponent/>
        <div className="about-component" style={{marginTop:"45px" , marginBottom:"55px"}}>
          <AboutUsComponent />
        </div>
        <TeamComponent />
      </section>
    </>
  )
}

export default About
