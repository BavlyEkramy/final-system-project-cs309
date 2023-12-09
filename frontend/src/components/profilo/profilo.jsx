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

import avatar from "../../prouducts_photo/Laptops/Acer Aspire 5 A515-45G-R1KS/1.png"
import axios from "axios";



const Profilo = (props) => {
    const { isLogin, setLogin, userData, setUserData } = useContext(UserContext);

    const [EditProfile, SetEditProfile] = useState(false)

    const[postImage,setPostImage]=useState({myFile:""})

    const dataInfo={ 
        firstName:null,
        lastName:null,
        email:null,
        password: null,
      adress:null,
      phone:null,
      Age:null,
      myFile:postImage,
       
    }
           
    const handleSubmit=(e)=>{
        e.preventDefault();
        CreatePost(postImage);
    }
    


    const CreatePost=async(newImage)=>{

try {
    await axios.post("http://localhost:8000/profile" , )
} catch (error) {
    
}

    }
    const handleFileUpload=async(e)=>{

        const file= e.target.files[0];
        const Base64 =await convertToBase64(file);
        setPostImage({...postImage,myFile:Base64})
        console.log({postImage});
        userData.myFile=postImage;
        dataInfo.myFile=postImage;
    }
    const handleChange = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const d={
          
          firstName :data.get('firstName'),
          lastName :data.get('lastName'),
          email: data.get('email'),
          password: data.get('password'),
          confirmPassword: data.get('Confirmpassword'),
          adress:data.get('Address'),
          phone:data.get('Phone'),
          Age:data.get('Age'),
          national:data.get('National'),
          myFile:data.get('postImage')
          
        }
        const checkEmail = /\w+@(gmail|yahoo|outlook).(com|net)/;
    if(d.email.match(checkEmail)){
      if((d.password).length >= 8){
        if(d.password === d.confirmPassword){
        dataInfo.firstName=d.firstName;
        dataInfo.lastName=d.lastName;
        dataInfo.email=d.email;
        dataInfo.password=d.password;
        dataInfo.adress=d.adress;
        dataInfo.phone=d.phone;
        dataInfo.Age=d.Age;
        dataInfo.national=d.national;
        dataInfo.myFile=postImage;
    
        }else{
          console.log("Password must be confirm");
        }
    }else{
      console.log("Password is not strong must be 8 cracter or more");
    }
  }else{
    console.log("Email is not valid")
  }
  };

    function Edit() {
        SetEditProfile(!EditProfile);
        if (!EditProfile)
            document.querySelector('.Profilo-section').style.boxShadow = "7px 7px 45px rgba(0, 0, 0, 0.4)"
        else document.querySelector('.Profilo-section').style.boxShadow = "7px 7px 45px rgba(51, 102, 212, 0.4)"
    }

    return (
        <>
            <div className="Profilo-section">
                <h2>Profile</h2>
                <div className="div">
                    <div id="image">
                       
                       <form onSubmit={handleSubmit}>
                            <label htmlFor="file-upload" className='custom-file-upload'>

                                <img src={postImage.myFile||avatar} alt="" />
                            </label>


                            <input
                             type="file"
                             label="Image"
                             name="myFile"
                             id='file-Upload'
                             accept='.jpeg, .png, .jpg' 
                              onChange={(e)=>handleFileUpload(e)} 
                              
                              />

                             <h3>editImage</h3>
                             <span>FullStack</span>

                             <button type='submit'>Upload Image</button>

                       </form>
                        
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


function convertToBase64(file){

return new Promise((resolve,reject)=>{

    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload=()=>{
       resolve(fileReader.result)
    };
    fileReader.onerror=(error)=>{
        reject(error);
    }

})
}
