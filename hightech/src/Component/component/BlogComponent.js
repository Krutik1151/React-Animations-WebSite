import React , {useEffect} from 'react'
import "../../Assets/Style/BlogComponent.css"
import Aos from 'aos'

const BlogComponent = (props) => {
    useEffect(()=>{

        Aos.init({duration: 1000})

    },[])
    return (
        <>
            <div className="blog-conatiner" data-aos="zoom-in-right" data-aos-duration="2000">
                <div className="blog-img">
                    <img src={props.imges} alt="img" className='img-fluid' />

                    <div className="blog-btn">
                        <button className='blog-left-btn'>Read More</button>
                        <button className='blog-right-btn'>Share  <i className="fa-solid fa-arrow-right"></i></button>
                    </div>

                    <div className="blog-badge">
                        <h5>{props.heading}</h5>
                    </div>
                </div>
                <div className="blog-info">
                    <div className="blog-admin-img">
                        <img src="./img/admin.jpg" alt="img" className='img-fluid img-thumbnails' />
                    </div>
                    <div className="blog-admin-info">
                        <h3>By Daniel Martin</h3>
                        <h4>24 March 2023</h4>
                        <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                    </div>
                </div>
                <div className="blog-like">
                    <div className="left-like">
                        <span><i className="fa-solid fa-share"></i></span>
                        <span>5324 Share</span>
                    </div>
                    <div className="right-like">
                        <span><i className="fa-solid fa-comments"></i></span>
                        <span>5 Comments</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogComponent
