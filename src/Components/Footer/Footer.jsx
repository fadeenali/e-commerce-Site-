import React from 'react'
// import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="container-fluid main bg-dark text-center">

         <div className="row text-white p-5 ">
             <div className="col-lg-4 ">
               <h4>Conect With Us </h4>
               <div className="icons">
                 <div className='d-flex justify-content-around p-4'>
               <i className="fa-brands fa-2x fa-instagram"></i>
               <i className="fa-brands fa-2x fa-facebook"></i>
               <i className="fa-brands fa-2x fa-twitter"></i>
               <i className="fa-brands fa-2x  fa-telegram"></i>
               <i className="fa-brands fa-2x fa-youtube"></i>
                    </div> 
                 </div>
               
               </div>
             <div className="col-lg-4 mt-4 ">
              <h4>  
                Help line -
              
                </h4>    
             <i className="fa-solid fa-location-dot"></i>
             <p> 
              HomeTown 911, Town-area, Gilskort BBN </p>
                <i className="fa-solid fa-envelope"></i>                   
                <p><span>
                </span>
                  copshop@gmail.com</p>
                <i className="fa-brands fa-whatsapp"></i>
                <p>
                  99999-99999</p>           
               </div>
             <div className='col-lg-4' style={{"fontSize" : "80px"}}>
               <h1>Design for You By Fardeen Ali ❤</h1>
            </div>
             <div className='text-center col-lg-12 col-md-12 col-sm-12 mt-5 ' style={{"letterSpacing" : "5px"}}> 
              <p>Ⓒ All Rights-Reserved</p>
             </div>
             
             </div>

      </div>
    </>
  )
}

export default Footer
