import React, { useContext, useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import SubmenuContext from '../context/SubmenuContext'

const subNavs = ['aboutme', 'technical', 'services', 'contactme', 'certificates', 'goals']

export default function MiniNavbar() {

  const {currentSection} = useContext(SubmenuContext);
  let [open, setOpen] = useState(true)

  const liVar = {
    initial: {
      scaleX: 0,
      transition: {
        duration: 0.1,
        // ease: [1, 0.5, 0.36, 1]
      }
    },
    open: {
      scaleX: 1,
      zIndex: 9999999,
    }
  }

  const containerVar = {
    initial: {
      transition: {
        staggerChildren: .1,
        staggerDirection: -1
      },
    },
    open: {
      transition: {
        staggerChildren: .1,
        staggerDirection: 1,
        delayChildren: 0.2,
      }
    }
  }

  const arrowVar = {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1,
      transition: {
        delay: 0.8
      }
    }
  }

  return (
    <div className='box top-[100px] md:top-[150px] font-bold text-black' style={{position: 'fixed', zIndex: '999999999', inset: '100px 100% 100% 0'}}>
      <div className='relative flex'>
        <AnimatePresence>
          {
            open &&
            (
              <div className='flex flex-col'> 
              <motion.div className='gap-0 flex origin-left md:flex-row justify-center flex-col overflow-scroll' variants={containerVar} exit='initial' initial='initial' animate='open' styel={{ zIndex: 99 }}>
                {subNavs.map(nav =>
                  <motion.div variants={liVar} key={nav} className='bg-white p-5 overflow-hidden origin-left relative' >
                    <a onClick={() => alert(1)} className='font-bold overflow-hidden p-[0.3em] text-md flex justify-center items-center'>
                      {nav}
                    </a>
                    {currentSection === nav &&<motion.div layoutId="underline_submenu" style={{color: 'white', background: 'black', position: 'absolute', width: '80%', height:'10px', margin: '0 auto'}}></motion.div>}
                  </motion.div>)
                }
                <motion.div onClick={() => setOpen(!open)} variants={liVar} className='bg-white p-5 flex justify-center items-center  overflow-hidden origin-left cursor-pointer rounded-b-3xl md:rounded-r-[50px] md:rounded-l-none'>
                  <a className='inline-flex justify-center items-center'>
                    <FaChevronLeft color='black' size={40}></FaChevronLeft>
                  </a>
                </motion.div>
              </motion.div>
              </div>

            )
          }
        </AnimatePresence>
        {
          !open &&
          <motion.div onClick={() => setOpen(!open)} variants={arrowVar} initial='initial' animate='animate' className='bg-white p-5 overflow-hidden origin-left inline-flex justify-center items-center cursor-pointer' style={{ zIndex: 99999, borderTopRightRadius: '50px 50px', borderBottomRightRadius: '50px 50px' }}>
            <a className='inline-flex justify-center items-center'>
              <FaChevronRight color='black'></FaChevronRight>
            </a>
          </motion.div>
        }
        {/* {
          !open &&
          <motion.ul className='gap-0 flex origin-left' variants={containerVar} exit='initial' initial='initial' animate='open' styel={{ zIndex: 999999 }}>
            <motion.li onClick={() => setOpen(!open)} className='bg-white p-5 overflow-hidden origin-left' style={{ zIndex: 99999, borderTopRightRadius: '50px 50px', borderBottomRightRadius: '50px 50px' }}>
              <a className='inline-flex items-center'>
                <FaChevronRight color='black'></FaChevronRight>
              </a>
            </motion.li>
          </motion.ul>
        } */}
      </div>
    </div >
  )
}
