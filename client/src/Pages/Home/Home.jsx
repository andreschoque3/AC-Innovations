import React, { useState, useEffect } from 'react'
import './Home.css'
import heropic from '../../Assets/hero-pic5.jpg'
import logo from '../../Assets/small.png'
import Navbar from '../../Components/Navbar/Navbar'


function Home() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
        <div className='header-sect'>
          <div className='container'>
              <div className='head'>
                <img src={logo} alt="logo" className='logo' />
                <Navbar/>
              </div>
              <div className={`cols ${animate ? 'slide-in' : ''}`}>
                <div className='header-text'>
                    <h1>Your On-Demand Innovation Team</h1>
                    <p>Smart solutions to help you launch faster, scale smarter, and innovate with confidence.</p>
                    <div className='hero-btn-align'>
                      <a href="/programs" className='hero-btn'>Learn More</a>
                    </div>
                </div>
                <div className='sec'>
                  <img src={heropic} alt="hero-pic"  className='hero-pic'/>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home