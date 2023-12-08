'use client'
import React from "react";
import './index.css';
import { useEffect } from 'react';
import Item from "./item";
import VendorProduct from "../VendorProduct/VendorProduct";
import AddItem from "../VendorProduct/AddItem";


const Product = (props) => {
  const { Allproduct, IsVendor } = props
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

  console.log(Allproduct)
  return (
    <>
      <div id="product-container">
        {
          IsVendor &&
          <AddItem />
        }
        {
          !IsVendor ?
            Allproduct.map((p, i) => (
              <Item product={p} key={i} />
            ))
            :
            Allproduct.map((p, i) => (
              <VendorProduct product={p} key={i} />
            ))
        }
      </div>
    </>
  );
};

export default Product;
