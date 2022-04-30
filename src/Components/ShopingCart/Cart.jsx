import React, { useState } from "react";
import "./Cart.css";
import img1 from "../../Images/nike_ar6.jpg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { Remove } from "../../Redux/action/action";
const Cart = () => {
  const dispatch = useDispatch;
  const [quantity, setQuantity] = useState(1);
  const naviget = useNavigate();
  const getCartData = useSelector((state) => state.cartReducer.carts);
  console.log(getCartData);

  const placedOrder = () => {
    naviget("/placedOrder");
    setTimeout(() => {
      naviget("/");
    }, 3000);
  };

  const hadaleRemoveItem = (id) => {
    dispatch(Remove(id));
  };

  return (
    <>
      <div className="conatiner ">
        <div className="row">
          <div className="col-lg-6 co-md-3 col-sm-12">
            <div
              className="row "
              style={{ overflowY: "scroll", height: "100vh" }}
            >
              <div className="col-lg-4 m-5">
                {getCartData.map((item) => {
                  const { id, image, name, category, price, description } =
                    item;

                  <div className="card " style={{ width: " 18rem" }}>
                    <img
                      src={image}
                      className="card-img-top cartimg"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title"> {name} </h5>
                      <p className="card-text"> {category} </p>
                      <h4>
                        {" "}
                        <b> {price} ₹ </b>{" "}
                      </h4>
                      <div className="shoe-quantity text-center d-flex flex-row justify-content-start">
                        <p>Quantity :</p>
                        <i
                          className="fa-solid fa-trash-can mx-3"
                          onClick={() =>
                            quantity > 1
                              ? setQuantity(quantity - 1)
                              : setQuantity(1)
                          }
                        ></i>
                        <p className="quantity-box"> {quantity} </p>
                        <i
                          className="fa-solid fa-plus mx-3"
                          onClick={() =>
                            quantity < 6
                              ? setQuantity(quantity + 1)
                              : setQuantity(quantity)
                          }
                        ></i>
                      </div>
                      <a href="#" className="btn btn-dark">
                        <button onClick={hadaleRemoveItem(id)}>
                          <Link> Remove </Link>
                        </button>
                      </a>
                    </div>
                  </div>;
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6 co-md-3 col-sm-12  mt-5">
            <div className="card text-center GrandTotal  mt-5 d-flex align-items-center  bg-dark text-light ">
              <div className="card-body mt-5">
                <h5 className="card-title">Grand Total</h5>
                <p className="card-text"> 2000 ₹</p>
                <a href="#" onClick={placedOrder} className="btn btn-success">
                  place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
