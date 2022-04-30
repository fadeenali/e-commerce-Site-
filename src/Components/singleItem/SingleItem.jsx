import React, {useState } from 'react'
import "./SingleItem.css"
import img1 from "../../Images/NIke_D.jpg"
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import { Link  } from 'react-router-dom'
import Footer from '../Footer/Footer'

const SingleItem = () => {


  return (

    <>
      
<div className="container-fluid  mx-2 mb-5">
    <div className="row ">
     <div className="col-lg-6 d-flex justify-content-center mt-5 ">
         <img src={img1} alt="single show image"  className='singleItem-img mt-5'/>
     </div>
     <div className="col-lg-6 m-5 details-card">
       <div className="card mt-5" style={{"width":" 180rem"}}>
         <div className="card-body">
                <h1 className="card-title">Card title</h1>
                <h6 className="card-subtitle mb-2 "> category .. here</h6>
                <p className="card-text col-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <div className='d-flex flex-row flex-wrap mb-3 text-Warning  q-start'>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
             </div>
             <div className="price">
                     <p>20% off</p>
                     <h1>4000₹</h1>
                     <p> <span className='originalPrice'> M.R.P: 5000₹ </span></p>
                     </div>
             <div className="shoe-size d-flex flex-row flex-wrap ">
                    <label htmlFor="Size"> Size-  </label>
                    <select name="size" className='mb-2' >
                        <option value="6" selected>6</option>
                        <option value="7" selected>7</option>
                        <option value="8" selected>8</option>
                        <option value="9" selected>9</option>
                        <option value="10" selected>10</option>
                        </select>
             </div>
               <button className='btn btn-dark'>  <Link to="/Cart">  Add to cart </Link>  </button>
          </div>
        </div>
     </div>
     </div>    
 </div>

<ProductDisplay/>

<Footer/>
    </>
  )
}

export default SingleItem
