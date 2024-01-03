import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = (props) => {

    const getNavLinkClassname = (classNameData)=>{
        const {isActive} = classNameData;
        let className = "";
        if(isActive){
            className = "active";
        } else {
            className = "in-active";
        }
        return className;
    }

    return (
        <div>
            <div style={{display : 'flex', gap : '.3rem'}}>
                <div style={{height : '100vh', width : '10vw', padding : '.3rem', border : '1px solid black', display : 'flex', flexDirection : 'column'}}>
                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/super-admin" title='Navigate to /admin'>Super Admin</Link>
                    <Link to="/admin">Admin</Link> */}

                    <NavLink className={getNavLinkClassname} to="/">Home</NavLink>
                    <NavLink className={getNavLinkClassname} to="/about">About</NavLink>
                    <NavLink className={getNavLinkClassname} to="/users">Users</NavLink>
                    <NavLink className={getNavLinkClassname} to="/super-admin" title='Navigate to /admin'>Super Admin</NavLink>
                    <NavLink className={getNavLinkClassname} to="/admin">Admin</NavLink>
                </div>
                <div style={{height : '100vh', width : '90vw', padding : '.3rem', border : '1px solid black', display : 'flex', flexDirection : 'column', gap : '.3rem'}}>
                    <div style={{height : '10%', border : '1px solid black'}}>
                        Page Title
                    </div>
                    <div style={{height : '90%', border : '1px solid black'}}>
                        <Outlet/>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Layout
