import './index.css';
import Product from "../Product/Product";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductContext from '../../Services/ProductContext';


const Vendor = () => {


  const {products, setProducts} = useContext(ProductContext);

  return (
    <>
      <div className='vendor'>

        <Product Allproduct={products} IsVendor={true} />
      </div>
    </>
  );
}

export default Vendor;