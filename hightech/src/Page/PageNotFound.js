import React from 'react'
import "../Assets/Style/PageNotFound.css"
import PagesDsignComponent from '../Component/component/PagesDsignComponent'
import CounterComponent from '../Component/component/CounterComponent'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigation = useNavigate()
  const handlClick = () =>{
    navigation("/")
  }
  return (
    <>
       <section className="pageNotFound">
       <PagesDsignComponent heading="404 Error" page="404 Error" />
       <CounterComponent/>

       <div className="page">
          <h1><i class="fa-solid fa-triangle-exclamation"></i></h1>
          <h2>404</h2>
          <h3>Page Not Found</h3>
          <p>We’re sorry, the page you have looked for does not exist in our website! Maybe go <br /> to our home page or try to use a search?</p>
          <button onClick={handlClick}>Go Back To Home</button>
       </div>
       </section>
    </>
  )
}

export default PageNotFound
