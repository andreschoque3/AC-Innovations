import React from 'react'
import './Mission.css'
import logo from '../../Assets/small.png'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Mission() {
  return (
    <div>
      <div className='container'>
        <div className='head'>
            <img src={logo} alt="logo" className='logo' />
            <Navbar/>
        </div>
        <div className='first'>
          <h1>To Elevate Small Businesses and Professionals</h1>
          <p>One solution at a time, we empower the next generation of digital leaders.</p>
        </div>

        <div className='line'>
          <hr />
        </div>

        <div className='second'>
          <div className='one'>
            <h2>Purpose</h2>
          </div>
          <div className='two'>
            <h2>Elevate SMBs and young proffesionals</h2>
            <p>We started with one goal: to bridge the gap between ambition and execution. I saw too 
            many small businesses struggling to grow because they lacked technical guidance, and 
            too many rising professionals feeling stuck in their careers. This platform was built 
            to change that.</p>
          </div>
        </div>

        <div className='line'>
          <hr />
        </div>

        <div className='third'>
          <div className='one'>
            <h2>Journey</h2>
          </div>
          <div className='two'>
            <p>AC Innovations was founded by Andres Choque, A Bolivian entrepreneur and technical consultant, in 2023 with a mission to help small businesses and professionals thrive through smarter tech.</p>
            <p>What began as a freelance web development service quickly grew into a broader consultancy—bridging the gap between innovative ideas and real-world execution.</p>
            <p>After working with startups, agencies, and independent professionals, it became clear: most people don’t just need a developer—they need a partner who understands systems, design, automation, and scale.</p>
            <p>In 2024, the brand officially adopted the name AC Innovations, reflecting its broader mission: to act as an on-demand innovation team for founders, creators, and businesses navigating the digital world.</p>
            <p></p>
            <p></p>
          </div>
        </div>

        <div className='line'>
          <hr />
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Mission