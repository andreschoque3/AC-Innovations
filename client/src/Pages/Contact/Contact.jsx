import React from 'react'
import './Contact.css'
import logo from '../../Assets/small.png'
import Navbar from '../../Components/Navbar/Navbar'

function Contact() {
  return (
    <div>
        <div>
            <div className='container'>
                <div className='head'>
                    <img src={logo} alt="logo" className='logo' />
                    <Navbar/>
                </div>
                <div className='text-c'>
                    <h1>FREE Discovery Call</h1>
                    <p>This call serves to see where you're currently at & if I can help you achieve your goals. Find a time on the calendar to schedule your call. Looking forward to speaking with you!</p>
                    <div className='google'>
                        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wI5fOFDs1LRCRu9v6eJ2BxMI3yhwY6AQBN8fp6jRfiR4vX8dfKFUfwYFxYApxXrrHR_84ctJY?gv=true" title='calendar' style={{ border:'0', width:"100%", height: '100vh'}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact