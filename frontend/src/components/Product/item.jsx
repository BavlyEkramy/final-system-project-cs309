'use client'
import React from "react";
import './index.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Product = (props) => {
    
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
    console.log(product)

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
                <div className="d_col">
                    <button value="price" name="Slim Fit Suit Black" className="btn">
                        <i className="fas fa-shopping-bag"></i> Add to Bag </button>
                    <b className="price">8754 $</b>
                    <Button  onClick={() => {
                       console.log(product.description)
                    }} Button variant="outlined"> <Link to='/ProductInfo' className="About">About</Link></Button>
                    {/* <Button  variant="outlined">About</Button> */}

                </div>
                
            </div>
        </>
    );
};

export default Product;
