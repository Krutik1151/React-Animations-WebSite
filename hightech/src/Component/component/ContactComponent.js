import React, {useEffect} from 'react'
import "../../Assets/Style/ContactComponent.css"
import Aos from 'aos'
const ContactComponent = () => {
    useEffect(() => {

        Aos.init({ duration: 1000 })
    
      }, [])
    return (
        <>

            <div className="contact-container">

                <div className="contact-info">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="contact-info-box" data-aos="zoom-in-right" data-aos-duration="2000">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact-add">
                                    <h4>Address</h4>
                                    <p>23 rank Str, NY</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="contact-info-box" data-aos="zoom-in-right" data-aos-duration="2000">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-add">
                                    <h4>Call Us</h4>
                                    <p>+012 3456 7890</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="contact-info-box" data-aos="zoom-in-right" data-aos-duration="2000">
                                <div className="contact-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </div>
                                <div className="contact-add">
                                    <h4>Email Us</h4>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-map-form">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="contact-map" data-aos="zoom-in-right">
                            <iframe  src="https://www.openstreetmap.org/export/embed.html?bbox=72.13807582855226%2C21.752609192358275%2C72.1440625190735%2C21.755538832594546&amp;layer=mapnik" ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="contact-form" data-aos="zoom-in-right">
                                <form action="#">
                                    <div className="name">
                                        <input type="text" name="name" placeholder='Your Name' />
                                    </div>
                                    <div className="email">
                                        <input type="email" name="email" placeholder='Your Email' />
                                    </div>
                                    <div className="project">
                                        <input type="text" name="Project" placeholder='Project' />
                                    </div>
                                    <div className="textarea">
                                        <textarea name="text" cols="15"   rows="5" placeholder='Message'></textarea>
                                    </div>
                                    <button>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ContactComponent
