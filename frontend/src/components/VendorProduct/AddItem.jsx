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



const AddItem = (props) => {


    // console.log(product)

    return (
        <>
            <div className="vendor-item ">
                <div className="vendor-1">
                    <div className="vendor-Add">
                        <h1>Add new Item in Your company</h1>
                        <Button
                            // type="submit"
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
