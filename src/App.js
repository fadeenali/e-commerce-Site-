import React from 'react'
import { Switch, Routes, Route} from "react-router-dom";
import Nav from "./Components/NAvbar/Nav"
import  Home from "./Components/Home/Home"
import Signin from "./Components/signin-SignUp/Signin"
import SignUp from "./Components/signin-SignUp/SignUp"
import ProductList from './Components/Productlist/ProductList';
import Error from './Components/Error404';
import SingleItem from './Components/singleItem/SingleItem';
import Cart from './Components/ShopingCart/Cart';
import PlacedOrder from './Components/ShopingCart/PlacedOrder';



function App() {
  return (
   <>
<Nav/>
   <Routes>
<Route path='/' element={<App/>} />
<Route index element={<Home/>} />
<Route path='/Signin' element={ <Signin/>}/>
<Route path='/SignUp' element={ <SignUp />}/>
<Route path='/ProductList' element={ <ProductList/>} />
<Route path=':SingleItem' element={ <SingleItem/>} />
<Route path='/Cart' element={ <Cart/>} />
<Route path='/PlacedOrder' element={ <PlacedOrder/>} />
<Route path="*" element={ <Error/> } />
   </Routes>

   </>
  );
}

export default App;






{
   
}