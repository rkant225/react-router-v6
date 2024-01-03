import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components_xyz/Home';
import About from './components_xyz/About';
import Navbar from './components_xyz/Navbar';
import "./App_xyz.css";
import OrderSummary from './components_xyz/OrderSummary';
import NoMatch from './components_xyz/NoMatch';
import Products from './components_xyz/Products';
import FeaturedProducts from './components_xyz/FeaturedProducts';
import OldProducts from './components_xyz/OldProducts';
import Users from './components_xyz/Users';
import UserDetails from './components_xyz/UserDetails';
import Admin from './components_xyz/Admin';

const App_xyz = () => {
  return (
    <div>
        <BrowserRouter>
            <h1>Sample 1</h1>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />}/>
                <Route path='order-summary' element={<OrderSummary />}/>
                <Route path='products' element={<Products />}>
                    <Route index element={<FeaturedProducts/>}/>
                    <Route path='featured' element={<FeaturedProducts/>}/>
                    <Route path='old' element={<OldProducts/>}/>
                </Route>
                <Route path='users' element={<Users />}>
                    <Route path=':userId' element={<UserDetails />}/>
                    <Route path='admin' element={<Admin />}/>
                </Route>
                <Route path='*' element={<NoMatch/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App_xyz;