import React from 'react'

const ProgramBox =({img, alt, title}) => {
  return (
    <div className='program-box'>
        <img src={img} alt={alt} loading='lazy' />
        <h1>{title}</h1>
    </div>
  )
}

export default ProgramBox