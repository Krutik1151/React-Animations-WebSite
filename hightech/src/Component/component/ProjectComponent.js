import React,{useEffect} from 'react'
import "../../Assets/Style/ProjectComponent.css"
import Aos from 'aos'

const ProjectComponent = (props) => {
    useEffect(()=>{

        Aos.init({duration: 1000})

    },[])
    return (
        <>
            <div className="project-container" data-aos="zoom-in-right" data-aos-duration="2000">
                <div className="project-box-design-one"></div>
                <div className="project-box-design-two"></div>
                <div className="project-img">
                    <img src={props.img} className='img-fluid' alt="img" />
                </div>
                <div className="project-heding">
                    <h1>{props.hader}</h1>
                    <h4>{props.information}</h4>
                </div>
            </div>

        </>
    )
}

export default ProjectComponent
