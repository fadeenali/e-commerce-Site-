import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      
<div className="container-fluid">
    <div className="d-flex justify-content-center">
        <div className="row  text-center" >
<div className="col-lg-12">
        <h1 style={{"fontSize": "400px"}}>
            404
        </h1>
    </div>  
    <div className="col-lg-12">
        <p>  lost here? go back to Home  </p>
        </div>      
        </div>
        </div>
  </div>
<dir className="text-center">
    <button className='btn btn-dark'>

<Link  to="/">Home</Link>    
    </button>

</dir>
    </>
  )
}

export default Error;
