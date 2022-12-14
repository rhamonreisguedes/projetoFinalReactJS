import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinearProgress } from '@mui/material';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const Login = lazy(() => import("./pages/login/login"));
const Register = lazy(() => import("./pages/register/register"));
const Catalog = lazy(() => import("./pages/catalog/catalog"));
const Cart = lazy(() => import("./pages/cart/cart"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));
const Product = lazy(() => import("./pages/product/product"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));

function App() {

  useEffect(() => {
  }, [])

  return (
        <>
          <Navbar/>      
            <Router>
              <Suspense fallback={<LinearProgress color="secondary" />}>
                <Routes>
                  <Route exact path="/" element={<Catalog />} />
                  <Route exact path="/catalog" element={<Catalog />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/checkout" element={<Checkout />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Router>
          <Footer/>
        </>
  );
}

export default App;

