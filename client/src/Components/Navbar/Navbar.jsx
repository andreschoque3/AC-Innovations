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
                <li><Link to='/Programs' className={location.pathname === '/Programs' ? 'active' : ''}>Programs</Link></li>
                <li><Link to='/Mission' className={location.pathname === '/Mission' ? 'active' : ''}>Mission</Link></li>
                <li><Link to='Resources' className={location.pathname === '/Resources' ? 'active' : ''}>Resources</Link></li>
                <li><Link to='/Contact' className={location.pathname === '/Contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar