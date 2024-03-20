import React from 'react'
import PagesDsignComponent from '../Component/component/PagesDsignComponent'
import CounterComponent from '../Component/component/CounterComponent'
import TeamComponent from '../Component/component/TeamComponent'
import "../Assets/Style/Team.css"

const Team = () => {
  return (
    <>
      <section className="team">
        <PagesDsignComponent heading="Our Team" page="Team" />
        <CounterComponent />
        <h2>Our Team</h2>
        <h5>Meet our expert Team</h5>
        <div className="team-component">
          <TeamComponent />
        </div>
      </section>
    </>
  )
}

export default Team
