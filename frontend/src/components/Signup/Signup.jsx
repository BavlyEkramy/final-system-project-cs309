import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

    const history= useNavigate();

    const dataInfo={ 
        firstName:null,
        lastName:null,
        email:null,
        password: null,
      adress:null,
      phone:null,
      Age:null,
      Sex:null,
      national:null
    }


 const handleSubmit= async(event)=>{
    

        
        event.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup" ,dataInfo )
            .then(res =>{
                console.log(res.data);
                if(res.data === "Email is Oready Exist"){
                    const p = document.createElement('p');
                    p.textContent = res.data;
                    const Signup = document.getElementsByClassName('Signup')[0];
                    Signup.appendChild(p);
                }else{
                    history('/home');
                }
            }).catch(error => {
                console.log(error);
            })
        } catch (error) {
          console.log(error);  
        }
    
 }


  const handleChange = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const d={
      
      firstName :data.get('firstName'),
      lasttName :data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      adress:data.get('Address'),
      phone:data.get('Phone'),
      Age:data.get('Age'),
      Sex:data.get('Sex'),
      national:data.get('National'),
      
    }


    dataInfo.firstName=d.firstName;
    dataInfo.lastName=d.lastName;
    dataInfo.email=d.email;
    dataInfo.password=d.password;
    dataInfo.adress=d.adress;
    dataInfo.phone=d.phone;
    dataInfo.Age=d.Age;
    dataInfo.Sex=d.Sex;
    dataInfo.national=d.national;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onChange={handleChange} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="Confirmpassword"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}  >
                <TextField
                  required
                  fullWidth
                  id="Address"
                  label="Address"
                  name="Address"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="Phone"
                  label="Phone"
                  name="Phone"
                  type='tel'
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  id="Age"
                  label=""
                  name="Age"
                  type='date'
                  autoComplete="family-name"
                />
              </Grid>
               <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Sex"
                  label="Sex"
                  name="Sex"
                  type='text'
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="National"
                  label="National"
                  name="National"
                  type='text'
                  autoComplete="family-name"
                />
              </Grid>

              
          
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}