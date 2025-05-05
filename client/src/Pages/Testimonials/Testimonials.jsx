import React from 'react'
import logo from '../../Assets/small.png'
import './Testimonials.css'
import Navbar from '../../Components/Navbar/Navbar'

function Testimonials() {
  return (
    <div>
      <div className='t-header-sect'>
        <div className='container'>
          <div className='head'>
            <img src={logo} alt="logo" className='logo' />
            <Navbar/>
          </div>
          <div className='first'>
            <h1>This is what they had to say</h1>
          </div>
          <div className='line'>
            <hr />
          </div>
          <div className='next'>
            <div className='tests'>
              <div className='test'>
                <h3>Name</h3>
                <p>description of the service</p>
              </div>
              <div className='test'>
                <h3>Name</h3>
                <p>description of the service</p>
              </div>
              <div className='test'>
                <h3>Name</h3>
                <p>description of the service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials