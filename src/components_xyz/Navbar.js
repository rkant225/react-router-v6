import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const getActiveLinkStyles = (props)=>{
        const {isActive} = props;
        const style = {
            color : isActive ? "red" : "black"
        }

        return style;
    }

  return (
    <nav className='navbar'>
        <NavLink to="/" style={(props)=>getActiveLinkStyles(props)}>Home</NavLink>
        <NavLink to="/about" style={(props)=>getActiveLinkStyles(props)}>About</NavLink>
        <NavLink to="/order-summary" style={(props)=>getActiveLinkStyles(props)}>Order-Summary</NavLink>
        <NavLink to="/products" style={(props)=>getActiveLinkStyles(props)}>Products</NavLink>
        <NavLink to="/users" style={(props)=>getActiveLinkStyles(props)}>Users</NavLink>
    </nav>
  )
}

export default Navbar