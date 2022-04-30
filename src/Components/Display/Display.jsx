import React from 'react'
import "./Display.css"
import img1 from "../../Images/nike_aj4.jpg" 
import img2 from "../../Images/Nike_AR4(1).jpg" 
import img3 from "../../Images/aj_simple.jpeg" 
import img4 from "../../Images/Nike_AJ_multy.jpg" 
import img5 from "../../Images/NIke_D.jpg" 


const Display = () => {
  return (
    <>

<div className="container-fluid  my-container">

<div className="col-lg-12 text-center fw-bolder mt-3 dis-text">
    <h1>WE ARE BORN READY</h1>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, sed! </p>
  </div>
  
  </div>


<div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="dis-pic-1 d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="dis-pic-2 d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="dis-pic-3 d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="dis-pic-5 d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img5} className="dis-pic-6 d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </>
  )
}

export default Display
