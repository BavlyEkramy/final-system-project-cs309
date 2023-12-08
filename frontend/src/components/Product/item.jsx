'use client'
import React from "react";
import './index.css';
import { useState, useEffect } from 'react';



const Item = (props) => {
    const { product } = props;
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

    // add to schema 
    function AddToCart() {
        
        console.log("AddToCart")
    }
    return (
        <>
            <div className="product-item">
                <div className="figure">
                    <img src={product.images[0]} alt="product.model" />
                    <div className="product-info">
                        <div className="d_col" >
                            <span>{product.model}</span>
                            <i className="far fa-heart"></i>
                        </div>
                        <p>{product.description}</p>
                    </div>
                </div>
                {
                    <div className="d_col">
                        <button value="price" name="Slim Fit Suit Black" className="btn" onClick={AddToCart}>
                            <i className="fas fa-shopping-bag" ></i> Add to cart </button>
                        <b className="price">8754 $</b>
                    </div>}
            </div>
        </>
    );
};

export default Item;
