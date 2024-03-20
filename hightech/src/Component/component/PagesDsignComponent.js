import React,{useEffect} from 'react'
import "../../Assets/Style/PagesDesignComponent.css"
import Aos from 'aos'

const PagesDsignComponent = (props) => {
    useEffect(()=>{

        Aos.init({duration: 1000})

    },[])

    return (
        <>
            <div className="design-container">
                <h1  data-aos="fade-down">{props.heading}</h1>
                <h4>Home / Pages / {props.page}</h4>
            </div>

        </>
    )
}

export default PagesDsignComponent
