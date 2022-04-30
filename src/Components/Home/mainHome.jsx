import React from 'react'
import { Link , Switch } from 'react-router-dom'
import Home from './Home'
import ProductList from "../Productlist/ProductList"


const mainHome = () => {
  return (
    <>
      
<Switch>
<Home/>
<ProductList/>

</Switch>
      
    </>
  )
}

export default mainHome
