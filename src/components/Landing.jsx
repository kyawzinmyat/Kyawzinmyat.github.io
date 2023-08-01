import React from 'react'
import '../styles/landing.css'
import SteveImage from '../assets/STEVE.png'

export default function Landing() {
  return (
    // <div className='landing-body max-h-max box'>
    //   <div className='lg:grid lg:grid-cols-2 md:w-8/12 w-10/12 mx-auto my-[4em] grid row-start-2 md:row-start-1 md:grid-cols-1 lg:col-start-1'>
    //     <div className='black-color p-10 text-center flex justify-end items-center border-2'>
    //       <div className='md:py-[2em] py-[8em]'>
    //         <h1 className='font-extrabold text-2xl'>Who Am I?</h1>
    //         <p className='my-5 text-lg font-bold'>I'm an enthusiastic software developer who lives in Yangon.</p>
    //         <p className='text-md font-light'>Passionate about creating cutting-edge web applications with both frontend and backend functionality.</p>
    //       </div>
    //     </div>
    //     <div className='md:row-start-1 row-start-1 lg:col-start-2'>
    //       <img src={SteveImage} alt='Steve Image'></img>
    //     </div>
    //   </div>
    // </div>
    <div className='landing-body max-h-fit box'>
    <div className='lg:grid lg:grid-cols-2 md:w-8/12 w-10/12 mx-auto my-[4em] grid'>
    <div className=''>
        <img src={SteveImage} alt='Steve Image'></img>
      </div>
      <div className='black-color p-10 text-center flex justify-end items-center border-2'>
        <div className='md:py-[2em] py-[8em]'>
          <h1 className='font-extrabold text-2xl'>Who Am I?</h1>
          <p className='my-5 text-lg font-bold'>I'm an enthusiastic software developer who lives in Yangon.</p>
          <p className='text-md font-light'>Passionate about creating cutting-edge web applications with both frontend and backend functionality.</p>
        </div>
      </div>

    </div>
  </div>
  )
}
