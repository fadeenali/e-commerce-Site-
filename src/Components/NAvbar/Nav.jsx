import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Header = () => {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-evenly w-100 " style={{position : "fixed", zIndex:"5"}}>
  <div className="container-fluid ">
    <a className="navbar-brand fw-bolder" >CopShop</a>
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto p-2  mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" > <Link to="/">Home</Link> </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" >Products</a>
        </li> */}
        <li className="nav-item"> 
          <a className="nav-link active"> <Link to="/ProductList">Products</Link>   </a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link active"> <Link to="/signin"> sign-in</Link>   </a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link active"> <Link to="/Cart"> <i className="fa-solid  fa-cart-shopping"></i> </Link>  </a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>


    </>
  )
}

export default Header
