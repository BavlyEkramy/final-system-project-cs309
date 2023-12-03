import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Product from "./components/Product/Product";
import { useState, useEffect } from "react";
import Home from './components/Home/Home';
import Item from "./components/Product/item";

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
          <Route path={ROUTES.LANDING} element={
            <>
              <Header />
              <Home />
              <Product Allproduct={products} />
            </>
          }>
            <Route path={ROUTES.HOME} element={
              <>
                <Header />
                <Product Allproduct={products} />
              </>
            } />
            <Route path={ROUTES.PRODUCTS} element={
              <>
                <Header />
              </>
            } />
          </Route>
        </Routes>
      </Router>
    </>
  );


}

export default App;