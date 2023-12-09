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
import axios from "axios";
import ErrorPage from "../ErrorPage/ErrorPage";



const Profilo = (props) => {
    const { isLogin, setLogin, userData, setUserData } = useContext(UserContext);

    const [EditProfile, SetEditProfile] = useState(false)

    function Edit() {
        SetEditProfile(!EditProfile);
        if (!EditProfile)
            document.querySelector('.Profilo-section').style.boxShadow = "7px 7px 45px rgba(0, 0, 0, 0.4)"
        else document.querySelector('.Profilo-section').style.boxShadow = "7px 7px 45px rgba(51, 102, 212, 0.4)"
    }

    if (!isLogin)
        return <ErrorPage msg="You must login to see the profile!" />

    return (
        <>
            <div className="Profilo-section">
                <h2>Profile</h2>
                <div className="div">
                    <div id="image">
                        <img src="images/personal_image.jpg" alt={userData.firstName ? userData.firstName :""} />
                        {EditProfile && <input type="file" id="avatar"  accept="image/png, image/jpeg" />}
                            <Button variant="contained" disableElevation onClick={Edit}>{ EditProfile ? 'Edit Profile' : 'Submit Edit' } </Button>
                        
                    </div>
                    {/* <div> */}
                    <Box className='profile-info' sx={{
                        '& > :not(style)': { m: 1, width: '250px' },
                    }} >

                        {EditProfile ?
                            <>
                                <TextField
                                    focused
                                    id="outlined-read-only-input"
                                    label="First name"
                                    defaultValue={userData.firstName}

                                />
                                <TextField
                                    focused
                                    id="outlined-read-only-input"
                                    label="ID"
                                    defaultValue="--"
                                />
                                <TextField
                                    focused
                                    id="outlined-read-only-input"
                                    label="Email"
                                    defaultValue={userData.email}
                                />
                                <TextField
                                    focused
                                    id="outlined-read-only-input"
                                    label="Phone"
                                    defaultValue={userData.phone}

                                />
                                <TextField
                                    focused
                                    id="outlined-read-only-input"
                                    label="Adress"
                                    defaultValue={userData.adress}

                                />
                                <TextField
                                    focused
                                    id="outlined-read-only-input"
                                    label="Age"
                                    defaultValue={userData.Age}

                                />
                            </>

                            :

                            <>
                                <TextField
                                    // focused

                                    id="outlined-read-only-input"
                                    label="First name"
                                    defaultValue={userData.firstName}
                                    InputProps={{
                                        readOnly: true,
                                    }}

                                />
                                <TextField
                                    // focused
                                    id="outlined-read-only-input"
                                    label="ID"
                                    defaultValue="--"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    // focused
                                    id="outlined-read-only-input"
                                    label="Email"
                                    defaultValue={userData.email}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    // focused
                                    id="outlined-read-only-input"
                                    label="Phone"
                                    defaultValue={userData.phone}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    // focused
                                    id="outlined-read-only-input"
                                    label="Adress"
                                    defaultValue={userData.adress}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    // focused
                                    id="outlined-read-only-input"
                                    label="Age"
                                    defaultValue={userData.Age}
                                    InputProps={{
                                        readOnly: true,
                                    }} />

                            </>
                        }


                    </Box>
                </div>
            </div>







        </>
    );
};

export default Profilo;
