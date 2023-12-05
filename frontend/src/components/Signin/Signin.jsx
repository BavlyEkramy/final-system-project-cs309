import './index.css';

import axios from "axios";
import React ,{ useState } from "react";
import {useNavigate , NavLink} from "react-router-dom";
function Signin() {
    const history = useNavigate();
    
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    async function Check(e) {
        
        e.preventDefault();
        
        try {
            await axios.post("http://localhost:8000/login" , {email , password})
            .then( res =>{
                console.log(res.data);
                if(res.data === "Email Dose Not Exist" || res.data === "Email or Password is not correct"){
                    const p = document.createElement('p');
                    p.textContent = res.data;
                    const Signin = document.getElementsByClassName('Signin')[0];
                    Signin.appendChild(p); 
                }else{
                    history('/home');
                }
            }).catch(error=>{
                console.log(error);
            })

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="Signin">
            <h1>Login</h1>
            <form action="GET">
                <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit" onClick={Check}>Login</button>
                <NavLink to="/signup">Signup</NavLink>
            </form>
        </div>
    );
}

export default Signin;