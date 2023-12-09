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
// import Box from '@mui/material/Box';




const AddItem = (props) => {
    const [pp, setpp] = useState(5);
    useEffect(() => {
        addProduct()

    }, []);
    const addProduct = () => {
        console.log("AddProduct")
    }


    return (
        <>
            <div className="vendor-item ">
                <div className="vendor-1">
                    <div className="vendor-Add">
                        <h1>Add new Item in Your company</h1>
                        <Button
                            onClick={addProduct}
                            variant="contained"
                            color="primary"
                            sx={{ m: 2, ml: 1 }}
                        >Add Item</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddItem;
