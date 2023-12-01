import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
// import Product from './components/Product'
// import Home from './components/Home'

const App = () => {

  return (
    <>
    {/* Util complete other components */}
      <Router>
        <Routes>
          <Route path={ROUTES.LANDING} element={<Header />}>
            <Route path={ROUTES.HOME} element={<Header />} />
          </Route>

          {/* <Route path={ROUTES.PRODUCTS} element={<Product />} /> */}
        </Routes>
      </Router>
  
    </>
  )
}

export default App;
