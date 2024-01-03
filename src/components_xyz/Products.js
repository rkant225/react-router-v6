import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div>
        <input type='search' placeholder='Search products'/>

        <br/>

        <nav className='mini-navbar'>
            <Link to="featured">Featured</Link>
            <Link to="old">Old</Link>

            <Outlet/>
        </nav>
    </div>
  )
}

export default Products;