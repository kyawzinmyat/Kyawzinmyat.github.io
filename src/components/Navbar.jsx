import React from 'react'
import PrimaryButton from './buttons/PrimaryButton'
import Hamburger from './Hamburger'
import { useEffect } from 'react'
import '../styles/nav.css'

export default function Navbar({activePage}) {

    let onClickHamburger = () => {
        const hb = document.getElementById('nav-toggle');
        hb.classList.toggle('nav-open');
        let subNav = document.getElementById('sub-nav');
        let subButton = document.getElementById('sub-button');
        subNav.classList.toggle('hidden');
        subButton.classList.toggle('hidden');
    }

    useEffect(
        () => {
          const nav = document.getElementById('nav');
          const hb = document.getElementById('hamburger');
          let last_scroll = 0;
          window.addEventListener('scroll', () => {
              const current_scroll = window.scrollY;
              if (last_scroll > 20) {
                if (current_scroll <= last_scroll){
                    nav.classList.remove('scroll-down');
                    hb.classList.remove('top-[-10em]');
                  }
                  if (current_scroll > last_scroll) {
                    nav.classList.add('scroll-down');
                    hb.classList.add('top-[-10em]');
                  }
              }
              last_scroll = current_scroll;
          })
        }
    , [])

    let homeNavClass = 'md:border-none border-b-2 border-indigo-200 p-[1em] ' + (activePage === 'home' ? 'active-nav-section' : '')
    let aboutmeNavClass = ' md:border-none border-b-2 border-indigo-200 p-[1em] ' + (activePage === 'aboutme' ? 'active-nav-section' : '')
    let projectsNavClass = ' md:border-none border-b-2 border-indigo-200 p-[1em] ' + (activePage === 'projects' ? 'active-nav-section' : '')
    return (
        <div className='box sticky top-0' style={{ zIndex: '10000' }}>
            <div className='md:w-11/12 lg:w-10/12 w-full mx-auto'>
                <div id='nav' className='flex md:flex-row md:justify-between md:items-center flex-col gap-10 w-full md:w-11/12 mx-auto primar-color secondary-bg'>
                    <div className='md:mx-[2em] md:my-0 my-5'>
                        <h1 className='font-extrabold text-xl  md:m-0 m-4'>KZM/ Dev</h1>
                    </div>
                    <ul className='hidden flex md:flex md:flex-row md:justify-evenly md:m-0 m-3 md:gap-0 gap-10 flex-col w-4/12 text-md' id='sub-nav'>
                        <li className={homeNavClass}><a className='font-extrabold' href='/'>Home</a></li>
                        {/* <li className={aboutmeNavClass}><a className='font-extrabold' href='/aboutme/'>About Me</a></li> */}
                        <li className={projectsNavClass}><a className='font-extrabold' href='/projects/'>Projects</a></li>
                    </ul>
                    <div className='font-extrabold text-xl md:my-0 m-3 hidden md:block' id='sub-button'>
                        <PrimaryButton>Contact Me</PrimaryButton>
                    </div>

                </div>
            </div>
            <div id='hamburger' className='desktop-hide  absolute top-12 left-[90%]' onClick={onClickHamburger}>
                <Hamburger></Hamburger>
            </div>
        </div>
    )
}
