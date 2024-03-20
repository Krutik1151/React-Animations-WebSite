import React, {useEffect} from 'react'
import "../../Assets/Style/TeamComponent.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aos from 'aos'

import team_1 from "../../Assets/img/team-1.jpg"
import team_2 from "../../Assets/img/team-2.jpg"
import team_3 from "../../Assets/img/team-3.jpg"
import team_4 from "../../Assets/img/team-4.jpg"


const TeamComponent = () => {
    let option = {

        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fade-zoom-in',
        nav:true,
        dots: false,
        center: true,
        stagePadding: 0,
        responsive:true,
        responsive: {
            0: {
                items: 1 // 1 item shown for screens smaller than 300px
            },
            500: {
                items: 1 // 1 item shown for screens between 300px and 500px
            },
            768: {
                items: 2 // 2 items shown for screens between 500px and 768px
            },
            1100: {
                items: 3 // 3 items shown for screens larger than 768px
            }
        }

    }

    useEffect(()=>{

        Aos.init({duration: 1000})

    },[])

    return (
        <>

            <OwlCarousel className='owl-theme'  {...option} data-aos="zoom-in" data-aos-duration="2000">
                <div className="team-box-container" >
                    <div className="team-box-layer"></div>
                    <div className="team-box-img">
                        <img src={team_1} alt="img" className='img-fluid' />
                    </div>
                    <div className="team-info">
                        <h1>Full Name</h1>
                        <p>Designation</p>
                        <div className="team-icon">
                            <span><i className="fa-brands fa-facebook-f"></i></span>
                            <span><i className="fa-brands fa-twitter"></i></span>
                            <span><i className="fa-brands fa-instagram"></i></span>
                            <span><i className="fa-brands fa-linkedin-in"></i></span>
                        </div>
                    </div>
                </div>
                <div className="team-box-container">
                    <div className="team-box-layer"></div>
                    <div className="team-box-img">
                        <img src={team_2} alt="img" className='img-fluid' />
                    </div>
                    <div className="team-info">
                        <h1>Full Name</h1>
                        <p>Designation</p>
                        <div className="team-icon">
                            <span><i className="fa-brands fa-facebook-f"></i></span>
                            <span><i className="fa-brands fa-twitter"></i></span>
                            <span><i className="fa-brands fa-instagram"></i></span>
                            <span><i className="fa-brands fa-linkedin-in"></i></span>
                        </div>
                    </div>
                </div>
                <div className="team-box-container">
                    <div className="team-box-layer"></div>
                    <div className="team-box-img">
                        <img src={team_3} alt="img" className='img-fluid' />
                    </div>
                    <div className="team-info">
                        <h1>Full Name</h1>
                        <p>Designation</p>
                        <div className="team-icon">
                            <span><i className="fa-brands fa-facebook-f"></i></span>
                            <span><i className="fa-brands fa-twitter"></i></span>
                            <span><i className="fa-brands fa-instagram"></i></span>
                            <span><i className="fa-brands fa-linkedin-in"></i></span>
                        </div>
                    </div>
                </div>
                <div className="team-box-container">
                    <div className="team-box-layer"></div>
                    <div className="team-box-img">
                        <img src={team_4} alt="img" className='img-fluid' />
                    </div>
                    <div className="team-info">
                        <h1>Full Name</h1>
                        <p>Designation</p>
                        <div className="team-icon">
                            <span><i className="fa-brands fa-facebook-f"></i></span>
                            <span><i className="fa-brands fa-twitter"></i></span>
                            <span><i className="fa-brands fa-instagram"></i></span>
                            <span><i className="fa-brands fa-linkedin-in"></i></span>
                        </div>
                    </div>
                </div>
                
            </OwlCarousel>




        </>
    )
}

export default TeamComponent
