'use client'
import React from "react";
import './index.css';
import { useState, useEffect } from 'react';



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
    // console.log(props.ro)

    return (
        <>
                <div className="product-item">
                    <div className="figure">
                        <img src="prouducts_photo/Laptops/Acer Aspire 5 A515-45G-R1KS/1.png" alt="" />
                        <div className="product-info">
                            <div className="d_col" >
                                <span>{props.ro.name}</span>
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
