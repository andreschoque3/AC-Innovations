import React from 'react'
import './Programs.css'
import Navbar from '../../Components/Navbar/Navbar'
import freelancing from '../../Assets/freelancing.jpg'
import coding from '../../Assets/coding.jpg'
import mentoring from '../../Assets/mentoring.jpg'
import ProgramBox from '../../Components/Divs/ProgramBox'
// import Footer from '../../Components/Footer/Footer'

function Programs() {

  // Programs data
  const porgramsData = [
    {
      img: freelancing,
      alt: 'freelancing_service',
      title: 'Freelance'
    },
    {
      img: coding,
      alt: 'coding_service',
      title: 'Web Development'
    },
    {
      img: mentoring,
      alt: 'mentoring_service',
      title: 'Mentorship'
    }
  ];


  return (
    <div>
        <div className='p-header-sect'>
            <div className='container'>
              <Navbar/>
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

        
    </div>
  )
}

export default Programs