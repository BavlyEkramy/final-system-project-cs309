import { useState, useEffect } from "react";
import Product from "../Product/Product";
import axios from "axios";
import ErrorPage from "../ErrorPage/ErrorPage";

const Home = () => {
  // return <div>Home</div>
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    axios
    .get('http://localhost:8000/vendorProduct') // This will be edit when the all products api is added
    .then(res => {
      console.log(res.data);
      setProducts(res.data);
      console.log(products);
    })
    .catch(error => {console.log(error)});
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
    <div className="home">
      <Product Allproduct={products} IsVendor={false} />
    </div>
    </>
  );
}

export default Home;