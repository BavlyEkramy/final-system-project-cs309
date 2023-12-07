import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Product from "./components/Product/Product";
// import { useState, useEffect } from "react";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Vendor from './components/Vendor/Vendor';
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

import Insertproducts from "./components/InsertProducts/Insertproducts";

const App = () => {
  const products = [{
    type: "laptop",
    description: "Details\n\
                        Lenovo ThinkPad E14 Gen2\n\
                        Intel Core i7-1165G7\n\
                        512GB SSD\n\
                        8GB Ram\n\
                        Graphics NVIDIA GeForce MX450 2GB\n\
                        Display 14 FHD (1920x1080) IPS 250nits\n\
                        Color  black",
    model: "Lenovo ThinkPad E14 Gen2",
    price: "$1,375",
    stock: "12",
    images: ["./prouducts_photo/Laptops/LENOVO THINKPAD E14/1.png",
      "./prouducts_photo/Laptops/LENOVO THINKPAD E14/2.png",
      "./prouducts_photo/Laptops/LENOVO THINKPAD E14/3.png",
      "./prouducts_photo/Laptops/LENOVO THINKPAD E14/4.png",
      "./prouducts_photo/Laptops/LENOVO THINKPAD E14/5.png"],
    stars: "4.8",
  },
    {
      type: "laptop",
      description: "Details\n\
                        Lenovo Ideapad Gaming 3\n\
                        Core I7-12650H\n\
                        16G Ram\n\
                        512 NVME\n\
                        VGA Nvidia 4G RTX 3050Ti\n\
                        15.6 FHD 165Hz\n\
                        Color gray",
      model: "Lenovo Ideapad Gaming 3",
      price: "$1,482",
      stock: "5",
      images: ["./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/1.png",
        "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/2.png",
        "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/3.png",
        "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/4.png",
        "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/5.png"],
      stars: "3",
    },
    {
      type: "laptop",
      description: "Details\n\
                        HP Probook 450 G9\n\
                        Core I5 - 1235U\n\
                        15.6 HD\n\
                        8GB\n\
                        512GB SSD\n\
                        MX570 2GB - DOS\n\
                        color Silver Aluminum",
      model: "HP Probook 450",
      price: "$1,335",
      stock: "6",
      images: ["./prouducts_photo/Laptops/HP Probook 450/1.png",
        "./prouducts_photo/Laptops/HP Probook 450/2.png",
        "./prouducts_photo/Laptops/HP Probook 450/3.png",
        "./prouducts_photo/Laptops/HP Probook 450/4.png",
        "./prouducts_photo/Laptops/HP Probook 450/5.png"],
      stars: 3.5,
    },
    {
      type: "laptop",
      description: "Details\n\
                        Lenovo Legion 5 Pron\n\
                        Core I7 12700H \n\
                        32G Ram \n\
                        1TB SSD\n\
                        NVME -VGA Nvidia 6G\n\
                        RTX 3060 -16.0\n\
                        WQXGA 165Hz DOS\n\
                        Color Gery = >>  EGP 78,390.00",
      model: "Lenovo Legion 5 Pro",
      price: "$2,536",
      stock: "9",
      images: ["./prouducts_photo/Laptops/Lenovo Legion 5 Pro/1.png",
        "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/2.png",
        "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/3.png",
        "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/4.png",
        "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/5.png"],
      stars: "3.9",
    }]
  
  
  
  return (
      <>
        <Router>
        <Routes>
          <Route path={ROUTES.LANDING} element={<><Header /><Home />    <Product Allproduct={products}></Product>
</>}>
            <Route path={ROUTES.HOME} element={<><Header /><Home /></>} />
          </Route>
          
          <Route path={ROUTES.CART} element={<> <Header /><Cart /></>} />
          <Route path={ROUTES.VENDOR} element={<><Header /><Vendor /> <Product Allproduct={products} IsVendor="true"></Product> </>} />
          <Route path={ROUTES.SIGN_IN} element={<><Header /><Signin /></>} />
          <Route path={ROUTES.SIGN_UP} element={<><Header /><Signup /></>} />
          <Route path={ROUTES.PRODUCTS} element={<><Header /><Product /></>} />
          Insertproducts
          <Route path={ROUTES.Insertproducts} element={<>< Insertproducts /></>} />
        </Routes>
      </Router>
    </>
  );


}

export default App;