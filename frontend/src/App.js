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
import Profilo from './components/profilo/profilo';
import Insertproducts from "./components/InsertProducts/Insertproducts";
import UserContext from "./Services/UserContext";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProductContext from "./Services/ProductContext";
import axios from 'axios';

const App = () => {
  const [isLogin, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState(null);
  const userLogin = { isLogin, setLogin, userData, setUserData };
  const productsValues = { products, setProducts };

  const getAllProducts = () => {
    axios
      .get('http://localhost:8000/vendorProduct') // This will be edit when the all products api is added
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(error => { console.log(error) });

  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <UserContext.Provider value={userLogin}>
      <ProductContext.Provider value={productsValues}>
        <Router>
          <Routes>

            <Route path={ROUTES.LANDING} element={<><Header /><Home /></>}>
              <Route path={ROUTES.HOME} element={<><Header /><Home /></>} />
            </Route>
            <Route path={ROUTES.CART} element={<> <Header /><Cart /></>} />
            <Route path={ROUTES.VENDOR} element={
              <><Header />
                {isLogin ? <Vendor /> : <ErrorPage msg="You must log in!" />}
                {isLogin ? <Vendor /> : <ErrorPage msg="You must log in!" />} </>} />

            <Route path={ROUTES.SIGN_IN} element={<><Signin /></>} />
            <Route path={ROUTES.SIGN_UP} element={<><Signup /></>} />
            <Route path={ROUTES.PRODUCTS} element={<><Header /><Product /></>} />
            <Route path={ROUTES.PROFILE} element={<><Header /> <Profilo /></>} />
            Insertproducts
            <Route path={ROUTES.Insertproducts} element={<>< Insertproducts /></>} />

            <Route path='*' element={<><Header /><ErrorPage msg="This page is not found!" /></>} />
            <Route path='*' element={<><Header /><ErrorPage msg="This page is not found!" /></>} />
          </Routes>
        </Router>
      </ProductContext.Provider >
    </UserContext.Provider >

  );


}

export default App;