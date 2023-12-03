'use client'
import React from "react";
import './index.css';
import { useState, useEffect } from 'react';

import Item from "../Product/item";


const Product = (props) => {

  useEffect(() => {
    let heart_icon = document.querySelectorAll(".product-item .product-info i")
    heart_icon.forEach((z) => {
      z.onclick = function () {
        console.log("message")
        if (z.className === "fas fa-heart") {
          z.className = "far fa-heart";
        } else z.className = "fas fa-heart";
      }
    })
  })

  // console.log(props.Allproduct)

  return (
    <>
      <div id="product-container">
        <div id="AllProduct-item">
          {props.Allproduct
            .map((p, i) => (
              <Item ro={p} key={i} />
            ))}
        </div>
      </div>


    </>
  );
};

export default Product;
