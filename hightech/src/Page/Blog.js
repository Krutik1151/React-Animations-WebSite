import React from 'react'
import "../Assets/Style/Blog.css"
import PagesDsignComponent from '../Component/component/PagesDsignComponent'
import CounterComponent from '../Component/component/CounterComponent'
import BlogComponent from '../Component/component/BlogComponent'

import blog_1 from "../Assets/img/blog-1.jpg"
import blog_2 from "../Assets/img/blog-2.jpg"
import blog_3 from "../Assets/img/blog-3.jpg"


const Blog = () => {
    return (
        <>
            <section className="blog">
                <PagesDsignComponent heading="Our Blog" page="Blog" />
                <CounterComponent />
                <h1>Our Blog</h1>
                <h4>Latest Blog & News</h4>

                <div className="blog-component">
                    <BlogComponent heading="Web Design" imges={blog_1} />
                    <BlogComponent heading="Development" imges={blog_2} />
                    <BlogComponent heading="Mobile App" imges={blog_3} />
                </div>

            </section>
        </>
    )
}

export default Blog
