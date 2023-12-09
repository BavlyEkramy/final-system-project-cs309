import './index.css';
import Product from "../Product/Product";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductContext from '../../Services/ProductContext';


const Vendor = () => {


  const {products} = useContext(ProductContext);

  return (
    <>
      <div className='vendor'>

        <Product Allproduct={products} IsVendor={true} isCart={false}/>
      </div>
    </>
  );
}

export default Vendor;