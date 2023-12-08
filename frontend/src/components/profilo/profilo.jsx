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
import { useState, useEffect, useContext } from 'react';
import UserContext from '../../Services/UserContext';



const Profilo = (props) => {
    const { isLogin, setLogin, userData, setUserData } = useContext(UserContext);
    // console.log(userData.id)
    function Edit() {
        console.log("message")
    }
    
    return (
        <>
            <div className="Profilo-section">
                <h2>Profile</h2>
                <div className="div">
                    <div id="image">
                        <img src="images/personal_image.jpg" alt={userData.firstName} />
                        <Button variant="contained" disableElevation onClick={Edit}>Edit Profile </Button>
                    </div>
                    {/* <div> */}
                    <Box className='profile-info' sx={{
                        '& > :not(style)': { m: 1, width: '250px' },
                    }} >
                        <TextField
                            focused
                            adwc
                            id="outlined-read-only-input"
                            label="First name"
                            defaultValue={userData.firstName}
                            InputProps={{
                                readOnly: true,
                            }}

                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="ID"
                            defaultValue="--"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="Email"
                            defaultValue={userData.email}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="Phone"
                            defaultValue={userData.phone}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="Adress"
                            defaultValue={userData.adress}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            focused
                            id="outlined-read-only-input"
                            label="Age"
                            defaultValue={userData.Age}
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
