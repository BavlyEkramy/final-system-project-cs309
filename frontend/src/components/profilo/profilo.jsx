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
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import React from "react";
import './index.css';
import { useState, useEffect } from 'react';



const Profilo = (props) => {

    return (
        <>
            <div className="Profilo-section">
                <h2>Profile</h2>
                <div className="div">
                    <div id="image">
                        <img src="./prouducts_photo/Laptops/Lenovo Legion 5 Pro/1.png" alt="bavly" />
                        <Button variant="contained" disableElevation >Edit Profile </Button>
                    </div>
                    {/* <div> */}
                    <Box className='profile-info' sx={{
                        '& > :not(style)': { m: 1, width: '250px' },
                    }} >
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="First name"
                            defaultValue="Bavly"
                            InputProps={{
                                readOnly: true,
                            }}

                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="ID"
                            defaultValue="30684522"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="Email"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="Phone"
                            defaultValue="010859851"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="Adress"
                            defaultValue="2 ST A7mad Zaki"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="Age"
                            defaultValue="23"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        {/* </div> */}
                    </Box>
                </div>
            </div>







        </>
    );
};

export default Profilo;
