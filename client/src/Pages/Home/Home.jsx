import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'

function Home() {
  return (
    <div>
        <div className='header-sect'>
          <div className='container'>
              <Navbar/>
              <div className='header-text'>
                  <h1>Unlock Your Potential</h1>
                  <p>Leverage your career with personalized strategies and support.</p>
                  <div className='hero-btn-align'>
                    <a href="/programs" className='hero-btn'>Learn more</a>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home