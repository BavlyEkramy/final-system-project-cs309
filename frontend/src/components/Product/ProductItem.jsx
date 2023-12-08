'use client'
import React, { useContext } from "react";
import './index.css';
import { useState, useEffect } from 'react';
import UserContext from "../../Services/UserContext";
import axios from "axios";


const ProductItem = (props) => {
    const { product } = props;
    const { userData, setUserData } = useContext(UserContext);
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
    const addToCart = () => {
        let userID = userData['_id'];
        let productID = product['_id'];
        axios.post('http://localhost:8000/addCard', { "userId": userData['_id'], "productId": product['_id'] })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
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
                        {!props.isCart && <button value="price" name="Slim Fit Suit Black" className="btn" onClick={addToCart}>
                            <i className="fas fa-shopping-bag" ></i> Add to cart </button>}
                        <b className="price">8754 $</b>
                    </div>
                }
            </div>
        </>
    );
};

export default ProductItem;