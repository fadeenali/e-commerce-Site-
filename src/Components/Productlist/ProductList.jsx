import React, { useEffect, useState } from "react";
import Data from "../../data/DataApi";
import Footer from "../Footer/Footer";
import newImg from "../../Images/NikeB_bg_.jpg";
import "./ProductList.css";
import { Link, Route, Router, useNavigate } from "react-router-dom";
import SingleItem from "../singleItem/SingleItem";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../../Redux/action/action";

const ProductList = () => {

  const [products,setProducts]  = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    // window.scrollTo(0, 0);
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const myData = await res.json();
      setProducts(myData);
      console.log(products);
    };

    fetchProducts();
  }, []);

  const handaleAddToCart = (item) => {
    console.log(item);
    dispatch(Add(item));
  };

  const getCartData = useSelector((state) => state.cartReducer.carts);
  console.log(getCartData);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-around text-center m-0">
        <div className="row mt-5">
          <div className="col-lg-12 mt-5">
            <h1> New Release </h1>
          </div>
          <div className="col-lg-12">
            <div ClassName="card mb-3" style={{ "maxWidth ": " 540px" }}>
              <div ClassName="row g-0">
                <div ClassName="col-md-4">
                  <img
                    src={newImg}
                    ClassName="img-fluid rounded-start"
                    style={{ height: "400px" }}
                    alt="cafr img"
                  />
                </div>
                <div ClassName="col-md-8">
                  <div ClassName="card-body">
                    <h3 ClassName="card-title">
                      {" "}
                      <b> coming soon </b>
                    </h3>
                    <p ClassName="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, vel natus
                    </p>
                    <p ClassName="card-text">
                      <small ClassName="text-muted">Discovor Everything</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  ">
        <div className="row mx-2">
          <div className="col-md-12">
            <div className="row">
              {Data.map((item) => {
                const { id, image, name, category, price, description } = item;
                return (
                  <>
                    <div
                      className="col-lg-4  col-md-6 col-sm-10  mb-5"
                      key={id}
                    >
                      <div className="card" key={id}>
                        <img
                          src={image}
                          className="card-img-top  card_img"
                          alt="shoes-pic"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            <b> {name} </b>
                          </h5>
                          <p className="card-text"> {description} </p>
                          <h3> {price} </h3>
                          <h5> {category} </h5>
                          <a href="#" className="btn btn-dark w-70 ">
                            {/* <Link to="/SingleItem" state={{ item: "item" }} >
                              {" "}
                              view Item{" "}
                            </Link> */}
                            <button onClick={() => handaleAddToCart(item)}>
                              add to cart
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductList;
