import React from 'react'
import "../Assets/Style/Contact.css"
import PagesDsignComponent from '../Component/component/PagesDsignComponent'
import CounterComponent from '../Component/component/CounterComponent'
import ContactComponent from '../Component/component/ContactComponent'

const Contact = () => {
  return (
    <>
     <section className='contact'>

        <PagesDsignComponent heading="Contact Us" page="Contact"/>
        <CounterComponent/>
        <h3>Get In Touch</h3>
        <h1>Contact for any query</h1>
        <p>The contact form is currently inactive. Get a functional and working contact <br /> form with Ajax & PHP in a few minutes. Just copy and paste the files, add a <br /> little code and you're done.</p>
        <div className="counter-component">
            <ContactComponent/>
        </div>

     </section>
    </>
  )
}

export default Contact
