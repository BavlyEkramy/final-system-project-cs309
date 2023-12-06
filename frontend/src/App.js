import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Product from "./components/Product/Product";
import { useState, useEffect } from "react";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Vendor from './components/Vendor/Vendor';
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Insertproducts from "./components/InsertProducts/Insertproducts";


const App = () => {
  const products = [
    { name: "laptop1", id: "15" },
    { name: "laptop2" },
    { name: "laptop3" },
    { name: "laptop1", id: "15" },
    

  ];


  return (
      <>
        <Router>
        <Routes>
          <Route path={ROUTES.LANDING} element={<><Header /><Home /></>}>
            <Route path={ROUTES.HOME} element={<><Header /><Home /></>} />
          </Route>
          
          <Route path={ROUTES.CART} element={<><Cart /></>} />
          <Route path={ROUTES.VENDOR} element={<><Vendor /></>} />
          <Route path={ROUTES.SIGN_IN} element={<><Signin /></>} />
          <Route path={ROUTES.SIGN_UP} element={<><Signup /></>} />
          <Route path={ROUTES.PRODUCTS} element={<><Header /><Product /></>} />
          Insertproducts
          <Route path={ROUTES.Insertproducts} element={<>< Insertproducts /></>} />
        </Routes>
      </Router>
    </>
  );


}

export default App;