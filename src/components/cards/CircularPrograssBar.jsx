import React from 'react'
import '../styles/circularProgressBar.css'

export default function CircularPrograssBar({subject, progress}) {
  return (
    <div className='cp-container flex justify-center items-center '>
        <div className=' circular-progress'>
            <div className='progress-value primary-color'>{progress}</div>
        </div>
        <div>{subject}</div>
    </div>
  )
}
