import React from 'react'
import PagesDsignComponent from '../Component/component/PagesDsignComponent'
import CounterComponent from '../Component/component/CounterComponent'
import TestimonialComponent from '../Component/component/TestimonialComponent'
import "../Assets/Style/Testimonial.css"

const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <PagesDsignComponent heading="Testimonial" page="Testimonial" />
        <CounterComponent />
        <h2>Our Testimonial</h2>
        <h5>Our Client Saying!</h5>
        <TestimonialComponent/>
      </section>
    </>
  )
}

export default Testimonial
