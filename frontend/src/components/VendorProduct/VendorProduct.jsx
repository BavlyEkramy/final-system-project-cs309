'use client'
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import './index.css';
import { useState, useEffect } from 'react';



const Product = (props) => {

    const { product } = props;

    useEffect(() => {
        let heart_icon = document.querySelectorAll(".help")
        heart_icon.forEach((z) => {
            z.onclick = function () {
                console.log("message")
                if (z.className === "fas fa-heart") {
                    z.className = "far fa-heart";
                } else z.className = "fas fa-heart";
            }
        })
    })
    // console.log(product)

    return (
        <>
            <div className="vendor-item ">
                <div className="figure">
                    <img src={product.images[0]} alt="" />
                </div>
                <div className="vendor-info">
                    <h2>{product.model} </h2>
                    {/* <br /> */}
                    <p>{product.description}</p>
                    
                    <div className="ii">
                        <div className="info-div">
                            <b><h2>Price : </h2>{product.price} </b>
                            <b><h2>Stock : </h2>{product.price} </b>
                        {/* </div>
                        <div className="info-div"> */}
                            <b><h2>Sold : </h2>--</b>
                            <b><h2>Likes : </h2>--</b>
                        </div>
                    </div>
                    <div className="vendor-btns">
                        <Button
                            color="primary"
                            // disabled={false}
                            // size="large"
                            variant="contained"
                            sx={{ m: 2, mr: 1 }}
                        >
                            Edit
                        </Button>
                        <Button
                            // type="submit"
                            variant="contained"
                            color="error"
                            sx={{ m: 2, ml: 1 }}
                        >Remove</Button>
                    </div>


                </div>
            </div>

        </>
    );
};

export default Product;
