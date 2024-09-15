import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Programs'>Programs</Link></li>
                <li><Link to='/Mission'>Mission</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar