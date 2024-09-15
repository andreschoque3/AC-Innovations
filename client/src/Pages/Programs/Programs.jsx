import React from 'react'
import './Programs.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Programs() {
  return (
    <div>
        <div className='p-header-sect'>
            <div className='container'>
              <Navbar/>
              <div className='p-header-txt'>
                <h1>Explore the programs</h1>
              </div>
            </div>
        </div>

        <div className='p-programs-sect'>
          <div className=''>

          </div>
        </div>

        <div className='footer'>
          <Footer/>
        </div>
    </div>
  )
}

export default Programs