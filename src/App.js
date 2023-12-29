import * as React from 'react';

import Announcement from './components/Announcement';
import Navv from './components/Navv';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Announcement />
        <Navv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Announcement /> */}
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;