import React,{useEffect} from 'react'
import "../../Assets/Style/TestimonialComponent.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aos from 'aos'


import t_1 from "../../Assets/img/testimonial-1.jpg"
import t_2 from "../../Assets/img/testimonial-2.jpg"
import t_3 from "../../Assets/img/testimonial-3.jpg"
import t_4 from "../../Assets/img/testimonial-4.jpg"

const TestimonialComponent = () => {
  let option = {

    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fade-zoom-in',
    nav: false,
    dots: true,
    center: true,
    stagePadding: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 2
      },
      1100: {
        items: 3
      },

      1200: {
        items: 3
      }
    }

  }
  useEffect(() => {

    Aos.init({ duration: 1000 })

  }, [])
  return (
    <>
      <OwlCarousel className='owl-theme'  {...option} data-aos="zoom-in" data-aos-duration="2000">
        <div className="testimonial-box">

          <div className="testimonial-client">
            <div className="testimonila-img">
              <img src={t_1} alt="img" className='img-fluid' />
            </div>
            <div className="testimonial-clicnt-info">
              <h5>Client Name</h5>
              <p>Profession</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <hr />
          <div className="testimonial-info">
            <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
          </div>
        </div>

        <div className="testimonial-box">

          <div className="testimonial-client">
            <div className="testimonila-img">
              <img src={t_2} alt="img" className='img-fluid' />
            </div>
            <div className="testimonial-clicnt-info">
              <h5>Client Name</h5>
              <p>Profession</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <hr />
          <div className="testimonial-info">
            <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
          </div>
        </div>


        <div className="testimonial-box">

          <div className="testimonial-client">
            <div className="testimonila-img">
              <img src={t_3} alt="img" className='img-fluid' />
            </div>
            <div className="testimonial-clicnt-info">
              <h5>Client Name</h5>
              <p>Profession</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <hr />
          <div className="testimonial-info">
            <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
          </div>
        </div>

        <div className="testimonial-box">

          <div className="testimonial-client">
            <div className="testimonila-img">
              <img src={t_4} alt="img" className='img-fluid' />
            </div>
            <div className="testimonial-clicnt-info">
              <h5>Client Name</h5>
              <p>Profession</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>  
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <hr />
          <div className="testimonial-info">
            <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
          </div>
        </div>
      </OwlCarousel>
    </>
  )
}

export default TestimonialComponent
