import React from 'react'
import { Link } from 'react-router-dom'
import "../Assets/Style/Navbar.css"
const Navbar = () => {

    return (
        <>
            <nav className="navbar  navbar-background-color navbar-expand-lg " data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand fs-2 " to="/">High <span> Tech </span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  " to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/project">Projects</Link>
                            </li>
                            <li className="nav-item dropdown" data-bs-theme="light">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Page
                                </a>
                                <ul className="dropdown-menu drop-menu-color">
                                    <li><Link className="dropdown-item " to="/blog">Our Blog</Link></li>
                                    <li><Link className="dropdown-item " to="/team">our Team</Link></li>
                                    <li><Link className="dropdown-item " to="/testimonial">Testimonial</Link></li>
                                    <li><Link className="dropdown-item " to="/pagenotfound">404 Page</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="info">
                        <span className='animate__animated animate__tada animate__infinite '>
                            <i className="fa-solid fa-phone"></i>
                            <span>
                                <i className="fa-solid fa-comment-dots"></i>
                            </span>
                            
                        </span>

                        <div className="number">
                            <h3>Have any questions?</h3>
                            <h4>Call: + 0123 456 7890</h4>
                        </div>
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
