import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserContext from '../../Services/UserContext';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

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

export default function SignIn() {
  const {isLogin, setLogin, userData, setUserData} = React.useContext(UserContext);
  const history = useNavigate();
  const dataInfo  = {
    email:null,
    password:null,
  };
  const signin = false;
  const a = false;

  const  handelSubmit = async(e) =>{
    e.preventDefault();
    const checkEmail = /\w+@(gmail|yahoo|outlook).(com|net)/;
    if(dataInfo.email.match(checkEmail)){
        try {
            await axios.post("http://localhost:8000/login" , dataInfo)
            .then( res =>{
                setLogin(true);
                setUserData(res.data);
                if(res.data === "Email Dose Not Exist" || res.data === "Email or Password is not correct"){
                    const p = document.createElement('p');
                    p.textContent = res.data;
                    const signinForm = document.querySelector('.MuiBox-root');
                    signinForm.appendChild(p);
                    setLogin(false);
                    setUserData({});
                }else{
                    history('/home');
                }
            }).catch(error=>{
                console.log(error);
               
            })

        } catch (error) {
            console.log(error);
            a=true;
            console.log(a);
            
        }
      }else{
        alert("Email is not valid")
      }
  }
  const handleChange = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const dataChange = {
      email: data.get('email'),
      password: data.get('password'),
    };
    
    dataInfo.email = dataChange.email;
    dataInfo.password = dataChange.password;
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
            Sign in
          </Typography>
       
          <Box component="form" onChange={handleChange} onSubmit={handelSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error={a}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={ROUTES.PASSWORD_FORGET} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={ROUTES.SIGN_UP}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
