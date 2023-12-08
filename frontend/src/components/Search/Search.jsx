import { useState } from 'react';
import './index.css';
import axios from 'axios';
const Search = props => {
  
  const handelChange = async (e) => {
    e.preventDefault();
    const model = e.target.value;
    try {
      await axios.post("http://localhost:8000/search" , {model}).then((res)=>{
      console.log(res.data);
      }).catch(error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <input className='search' type="search" placeholder={props.placeholder} onChange={handelChange}/>
  );
};

export default Search;