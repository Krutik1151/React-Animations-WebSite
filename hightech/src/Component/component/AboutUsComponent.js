import React , {useEffect} from 'react'
import "../../Assets/Style/AboutUsSection.css"
import Aos from 'aos'
import about_1 from "../../Assets/img/about-1.jpg"
import about_2 from "../../Assets/img/about-2.jpg"

const AboutUsComponent = () => {
    useEffect(()=>{

        Aos.init({duration: 1000})

    },[])
    return (
        <>
            <section className="about-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="about-imges"  >
                            <div className="about-first-img " >
                                <img src={about_1} className='img-fluid h-100' alt="img" />
                            </div>
                            <div className="about-second-img">
                                <img src={about_2} className='img-fluid h-100' alt="img" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="about-info" >
                            <h4>About Us</h4>
                            <h2>About HighTech Agency And It's Innovative IT Solutions</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                            <p>Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                            <button>More Details</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsComponent
