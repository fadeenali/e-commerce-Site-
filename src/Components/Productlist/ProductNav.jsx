import React from "react";

const ProductNav = ({ productLsit, FilterCategory }) => {
  return (
    <>
      <div
        style={{ border: "1px 0 1px 0" }}
        className="btn-group mb-5  d-flex justify-content-evenly"
        role="group"
        aria-label="Basic  example" >
        {productLsit.map((curElem) => {
          return (
            <>
              <button
                type="button"
                className="btn btn-white "
                onClick={() => {
                  FilterCategory(curElem);
                }}
              >
                {curElem }
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductNav;
