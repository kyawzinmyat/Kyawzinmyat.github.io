import React from 'react'
import TechnicalStacks from './components/TechnicalStacks'
import Certificates from './components/Certificates'
import Goals from './components/Goals'
import Landing from './components/Landing'
import Aboutme from './components/Aboutme'

export default function Home() {

  return (
    <>
      <Landing></Landing>
      <Aboutme></Aboutme>
      <div className='section-margin'>
        <TechnicalStacks></TechnicalStacks>
      </div>
      <div className='section-margin'>
        <Certificates></Certificates>
      </div>
      <div className='section-margin'>
        <Goals></Goals>
      </div>
    </>
  )
}
