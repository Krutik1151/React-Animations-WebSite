import React,{useEffect} from 'react'
import "../../Assets/Style/ServicesComponent.css"
import Aos from 'aos'
const ServicesComponent = (props) => {
    useEffect(()=>{

        Aos.init({duration: 1000})

    },[])
    return (
        <>

            <div className="service" data-aos="fade-right" data-aos-duration="2000">
                <div className="service-layer"></div>
                <div className="service-box">
                    <div className="service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d={props.path}/></svg>
                    </div>
                    <div className="service-heding">
                        <h2>{props.heding}</h2>
                    </div>
                    <div className="service-info">
                        <p>{props.info}</p>
                    </div>
                    <div className="service-button">
                        <button>Read More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServicesComponent
