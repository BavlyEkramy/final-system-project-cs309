'use client'

import React from "react";


const Product = (props) => {

  return (
    <>
      <div className="product-item">
        <div className="figure">
          <img src="prouducts_photo/Laptops/Acer Aspire 5 A515-45G-R1KS/1.png" alt="" />
          <div className="product-info">
            <div className="d_col" >
              <span>model</span>
              <i className="far fa-heart"></i>
            </div>
            <p>description</p>
          </div>
        </div>
        <div className="d_col">
          <button value="price" name="Slim Fit Suit Black" className="btn">
            <i className="fas fa-shopping-bag"></i> Add to Bag </button>
          <b className="price">8754 $</b>
        </div>
      </div>
    </>
  );
};

export default Product;
