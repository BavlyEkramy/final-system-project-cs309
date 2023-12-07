import './index.css';

import axios from "axios";
import React,{ useState } from "react";
import { useNavigate  , NavLink} from "react-router-dom";

function Signup() {
    const history = useNavigate();

    const [firstName , setFirstName]  = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [adress , setAdress] = useState('');
    const [phone , setPhone] = useState('');
    const [age , setAge] = useState('');
    const [sex , setSex] = useState('');
    const [national , setNational] = useState('');

    async function adduser(e) {
        
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup" , {firstName , lastName , email , password , adress , phone , age , sex , national})
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
    return(
        <div className="Signup">
          <h1>Signup</h1>
            <form action="POST">
            <input type="text" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
            <input type="text" placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
            <input type="Email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            <input type="Password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <input type="Password" placeholder="Confirm Password" />
            <input type="text" placeholder="Adress" onChange={e=>setAdress(e.target.value)}/>
            <input type="text" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
            <input type="number" placeholder="Age" onChange={e=>setAge(e.target.value)}/>
            <input type="text" placeholder="Sex" onChange={e=>setSex(e.target.value)}/>
            <input type="text" placeholder="National" onChange={e=>setNational(e.target.value)}/>
            <button type="submit" onClick={adduser}>Sign up</button>
            </form>
            <NavLink to="/signin">Login</NavLink>
        </div>
    );
}

export default Signup;