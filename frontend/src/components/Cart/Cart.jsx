import axios from 'axios';
import './index.css';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../Services/UserContext';
import { Alert } from '@mui/material';
import Product from '../Product/Product';
import ErrorPage from '../ErrorPage/ErrorPage';

const Cart = () => {
  const { isLogin, setLogin, userData, setUserData } = useContext(UserContext);
  const [userProducts, setUserProducts] = useState(null);

  const getUserProducts = () => {
    axios
      .post('http://localhost:8000/cards', { "userId": userData['_id'] })
      .then(res => {
        console.log('The user ' + userData['_id']);
        console.log('the data ' + res.data);
        setUserProducts(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (isLogin)
      getUserProducts();
  }, []);

  if (!isLogin)
    return <ErrorPage msg="You must log in!" />

  return (
    <div className='cart'>
      {userProducts != 'Empity' && <Product Allproduct={userProducts} IsVendor={false} isCart={true} />}
      {userProducts && <Product Allproduct={userProducts} IsVendor={false} isCart={true}/>}
    </div>
  );
}

export default Cart;