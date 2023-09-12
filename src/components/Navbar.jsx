import React, { useState } from 'react'
import PrimaryButton from './buttons/PrimaryButton'
import Hamburger from './Hamburger'
import { useEffect } from 'react'
import '../styles/nav.css'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar({ activePage }) {

    let [open, setOpen] = useState(false);

    let onClickHamburger = () => {
        const hb = document.getElementById('nav-toggle');
        hb.classList.toggle('nav-open');
        setOpen(!open);
    }

    useEffect(
        () => {
            const nav = document.getElementById('nav');
            const hb = document.getElementById('hamburger');
            let last_scroll = 0;
            window.addEventListener('scroll', () => {
                const current_scroll = window.scrollY;
                if (last_scroll > 50) {
                    if (current_scroll <= last_scroll) {
                        nav.classList.remove('scroll-down');
                        hb.classList.remove('top-[-30em]');
                    }
                    if (current_scroll > last_scroll) {
                        nav.classList.add('scroll-down');
                        nav.classList.add('nav-nontransparent');
                        hb.classList.add('top-[-30em]');
                    }
                }
                else nav.classList.remove('nav-nontransparent');
                last_scroll = current_scroll;
            })
        }
        , [])

    let homeNavClass = 'md:border-none p-[1em] ' + (activePage === 'home' ? 'active-nav-section' : '')
    let aboutmeNavClass = ' md:border-none p-[1em] ' + (activePage === 'aboutme' ? 'active-nav-section' : '')
    let projectsNavClass = ' md:border-none p-[1em] ' + (activePage === 'projects' ? 'active-nav-section' : '')

    const menuAnimation = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.3,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const mobileNavLink = {
        initial: {
            y: '35vh',
            transition: {
                duration: .5
            }
        },
        open: {
            y: 0,
            transition: {
                duration: .5,
            }
        }
    }
    const containerVar = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                stagerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.09,
                delayChildren: 0.3,
                stagerDirection: 1
            }
        }
    }
    return (
        <div className='box sticky top-0' style={{ zIndex: '10000' }}>
            <div className='md:w-11/12 lg:w-10/12 w-full mx-auto'>
                <div id='nav' className='flex md:flex-row md:justify-between md:items-center flex-col  w-full md:w-11/12 mx-auto primar-color secondary-bg'>
                    <div className='md:mx-[2em] md:my-0'>
                        <h1 className='font-extrabold text-xl  md:m-0 m-4'>KZM.asm</h1>
                    </div>
                    <AnimatePresence>
                        {
                            open && (
                                <motion.ul variants={menuAnimation} initial='initial' animate='animate' exit='exit' className='desktop-hide header-upper-text origin-top flex justify-center items-center md:flex md:flex-row md:justify-evenly md:m-0  md:gap-0 mx-auto flex-col w-4/12 sm:text-xl md:text-lg' id='sub-nav'>
                                    <motion.div className='overflow-hidden header-upper-text flex-col text-center' variants={containerVar} initial='initial' animate='open' exit='initial'>
                                        <motion.div variants={mobileNavLink} className='py-[1em]'>
                                            <li className={homeNavClass}><a className='font-extrabold text-3xl' href='/'>Home</a></li>
                                        </motion.div>
                                        <motion.div variants={mobileNavLink} className='py-[1em]'>
                                            <li className={projectsNavClass}><a className='font-extrabold text-3xl' href='/projects/'>Projects</a></li>
                                        </motion.div>
                                    </motion.div>
                                </motion.ul>
                            )
                        }
                    </AnimatePresence>

                    <div className='font-extrabold text-xl md:my-0 m-3 hidden md:block' id='sub-button'>
                        <ul className='mobile-hide origin-center flex justify-center items-center md:flex md:flex-row md:justify-evenly md:m-0  md:gap-10 mx-auto flex-col w-full sm:text-xl md:text-lg' id='sub-nav'>
                            <li className={homeNavClass}><a className='font-extrabold' href='/'>Home</a></li>
                            {/* <li className={aboutmeNavClass}><a className='font-extrabold' href='/aboutme/'>About Me</a></li> */}
                            <li className={projectsNavClass}><a className='font-extrabold' href='/projects/'>Projects</a></li>
                            <PrimaryButton><a href='#contactme' className='hover:text-black font-extrabold'>Contact Me</a></PrimaryButton>
                        </ul>
                    </div>

                </div>
            </div>
            <div id='hamburger' className='desktop-hide  absolute top-7 left-[90%]' onClick={onClickHamburger}>
                <Hamburger></Hamburger>
            </div>
        </div>
    )
}
