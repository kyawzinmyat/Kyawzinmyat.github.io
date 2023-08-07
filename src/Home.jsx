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
      <TechnicalStacks></TechnicalStacks>
      <Certificates></Certificates>
      <Goals></Goals>
    </>
  )
}
