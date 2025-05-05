import React from 'react'
import './Programs.css'
import Navbar from '../../Components/Navbar/Navbar'
import freelancing from '../../Assets/freelancing.jpg'
import coding from '../../Assets/coding.jpg'
import logo from '../../Assets/small.png'
import mentoring from '../../Assets/mentoring.jpg'
import ProgramBox from '../../Components/Divs/ProgramBox'
import Footer from '../../Components/Footer/Footer'

function Programs() {

  // Programs data
  const porgramsData = [
    {
      img: coding,
      alt: 'coding_service',
      title: 'Automate & Scale for SMBs'
    },
    {
      img: mentoring,
      alt: 'mentoring_service',
      title: 'Tech Career Blueprint'
    },
    {
      img: freelancing,
      alt: 'freelancing_service',
      title: 'Freelance Freedom Mastery'
    }
  ];


  return (
    <div>
        <div className='p-header-sect'>
            <div className='container'>
              <div className='head'>
                  <img src={logo} alt="logo" className='logo' />
                  <Navbar/>
              </div>
            </div>
        </div>

        <div className='p-programs-sect'>
          <div className='programs'>
            {porgramsData.map((program, index) => (
              <ProgramBox
                key={index}
                img={program.img}
                alt={program.alt}
                title={program.title}
              />
            ))}
          </div>
        </div>

        <Footer/>
  
    </div>
  )
}

export default Programs