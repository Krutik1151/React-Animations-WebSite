import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';
import Home from './Page/Home';
import About from './Page/About';
import Service from './Page/Service';
import Project from './Page/Project';
import Contact from './Page/Contact';
import Blog from './Page/Blog';
import Team from './Page/Team';
import Testimonial from './Page/Testimonial';
import PageNotFound from './Page/PageNotFound';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/project' element={<Project />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/testimonial' element={<Testimonial />} />
          <Route exact path='/pagenotfound' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
