import './index.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { arr } from '../../imageLaptop';
//import { useState } from 'react';
//import axios from 'axios';
import {motion}from 'framer-motion';


//import { resourceLimits } from 'worker_threads';



const Insertproducts = () => {




  return(
    <>

<div className='insertPhoto'>






{arr.map((e)=>(

<motion.div className ='image'>
  <img  src ={e}/>
 </motion.div>

))}








<input  type="file"  />
<br />
<button >Upload</button>


</div>


    <div className='Products'>

     
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  >
    <div className='nameProduct' >
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">Name Product</InputLabel>
      <Input id="component-simple" defaultValue="Phone" />
    </FormControl>
  
    <FormControl variant="standard">
  
      <InputLabel htmlFor="component-helper"> Model</InputLabel>
      <Input
        id="component-helper"
        defaultValue="Composed TextField"
        aria-describedby="component-helper-text"
      />
      <FormHelperText id="component-helper-text">
        Some important helper text
      </FormHelperText>
    </FormControl>
    </div>

    <div className='infoProduct'>
    <FormControl disabled variant="standard">
      
      <InputLabel htmlFor="component-disabled">year </InputLabel>
      <Input id="component-disabled" defaultValue="2022" />
      <FormHelperText>Disabled</FormHelperText>
    </FormControl>
    <FormControl error variant="standard">
      <InputLabel htmlFor="component-error">Company</InputLabel>
      <Input
        id="component-error"
        defaultValue="I-Phone"
        aria-describedby="component-error-text"
      />
      <FormHelperText id="component-error-text">Error</FormHelperText>
    </FormControl>
    </div>
    <FormControl>
      
      <InputLabel htmlFor="component-outlined">Name</InputLabel>
      <OutlinedInput
        id="component-outlined"
        defaultValue="Composed TextField"
        label="Name"
      />
    </FormControl>
    <FormControl variant="filled">
      <InputLabel htmlFor="component-filled">Name</InputLabel>
      <FilledInput id="component-filled" defaultValue="Composed TextField" />
    </FormControl>
  </Box></div>
  </>
  );
}

export default Insertproducts;