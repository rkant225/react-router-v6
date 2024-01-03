import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AboutLayout = () => {
    return (
        <div>
            <Link to="/about/contact">Contacts</Link> | <Link to="other-apps">Other Apps</Link>
            
            <Outlet/>
        </div>
    )
}

export default AboutLayout
