import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  const location = useLocation();

  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to='/programs' className={location.pathname === '/programs' ? 'active' : ''}>Programs</Link></li>
                <li><Link to='/mission' className={location.pathname === '/mission' ? 'active' : ''}>Mission</Link></li>
                {/* <li><Link to='/testimonials' className={location.pathname === '/testimonials' ? 'active' : ''}>Testimonials</Link></li> */}
                <li><Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar