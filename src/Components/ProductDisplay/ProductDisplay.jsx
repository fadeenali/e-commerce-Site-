import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductDisplay.css";

import DisplayApi from "./ProductDisplayApi";

const Product = () => {
  const [apiData, setApiData] = useState(DisplayApi);

  return (
    <>
      <div className="mt-5 productcls">
        <button className="mt-5 text-center Product-title">
          {" "}
          <Link to="/ProductList">
            {" "}
            <i className="fa-solid fa-angles-right text-white">
              {" "}
              Products
            </i>{" "}
          </Link>{" "}
        </button>
      </div>
    </>
  );
};

export default Product;
