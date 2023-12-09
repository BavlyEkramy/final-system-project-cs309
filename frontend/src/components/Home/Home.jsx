import { useState, useEffect, useContext } from "react";
import Product from "../Product/Product";
import axios from "axios";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProductContext from "../../Services/ProductContext";
// import UserContext from '../../Services/UserContext';


const Home = () => {
  // return <div>Home</div>
  const { products, setProducts } = useContext(ProductContext);

  return (
    <>
      <div className="home">
        {products && <Product Allproduct={products} IsVendor={false} isCart={false} />}
      </div>
    </>
  );
}

export default Home;