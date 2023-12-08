import './index.css';
import Product from "../Product/Product";
import { useEffect, useState } from 'react';
import axios from 'axios';


const Vendor = () => {


  const [vendorProducts, setVendorProducts] = useState([]);

  const getVendorProducts = () => {
    axios
      .get('http://localhost:8000/vendorProduct')
      .then(res => {
        console.log(res.data);
        setVendorProducts(res.data);
      })
      .catch(error => { console.log(error) });
  }
  useEffect(() => {
    getVendorProducts();
  }, []);

  return (
    <>
      <div className='vendor'>

        <Product Allproduct={vendorProducts} IsVendor={true} />
      </div>
    </>
  );
}

export default Vendor;