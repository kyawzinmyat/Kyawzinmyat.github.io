import React, { useContext, useEffect, useRef } from 'react'
import TechnicalStacks from './components/TechnicalStacks'
import Certificates from './components/Certificates'
import Goals from './components/Goals'
import Landing from './components/Landing'
import Aboutme from './components/Aboutme'
import Services from './components/Services'
import Contactme from './components/Contactme'
import MiniNavbar from './components/MiniNavbar'
import SubmenuContext from './context/SubmenuContext'
import { SubmenuProvider } from './context/SubmenuContext'
import LifeEvent from './components/LifeEvent'


export default function Home() {
  const LANDING = useRef(null);
  const ABOUTME = useRef(null);
  const TECHNICAL = useRef(null);;
  const SERVICES = useRef(null);
  const CONTACTME = useRef(null);
  const CERTIFICATES = useRef(null);
  const GOALS = useRef(null);
  const FOOTER = useRef(null);
  const allSections = [ABOUTME, TECHNICAL, SERVICES, CONTACTME, CERTIFICATES, GOALS];
  
  // useEffect(
  //   () => {
  //     setAllSections([ABOUTME, TECHNICAL, SERVICES, CONTACTME, CERTIFICATES, GOALS])
  //   }
  //   , [])

  return (
    <>
    <SubmenuProvider>
      <MiniNavbar allSections={allSections}></MiniNavbar>
    </SubmenuProvider>
      <div ref={ABOUTME} id='aboutme'>
        <Landing></Landing>
        <Aboutme></Aboutme>
      </div>
      <div ref={TECHNICAL} id='technical' className='section-margin'>
        <TechnicalStacks></TechnicalStacks>
      </div>
      <div className='section-margin'>
        <div ref={SERVICES} id='services'>
          {/* <Services></Services> */}
        </div>
        <div ref={CONTACTME} id='contactme'>
          <Contactme></Contactme>
        </div>
      </div>
      <div className='section-margin'>
        <LifeEvent></LifeEvent>
      </div>
      <div className='section-margin' id='certificates' ref={CERTIFICATES}>
        <Certificates></Certificates>
      </div>
      <div className='section-margin' id='goals' ref={GOALS}>
        <Goals></Goals>
      </div>
    </>
  )
}
