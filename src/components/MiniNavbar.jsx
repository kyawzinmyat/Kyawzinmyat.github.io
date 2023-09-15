import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import {motion, useInView} from 'framer-motion'


const subNavs = ['landing', 'aboutme', 'technical', 'services', 'certificates', 'goals', 'footer']

export default function MiniNavbar() {
  
    const iconsVar = {
        // initial: {
        //     scaleX: 0,
        //     transition: {
        //         delay: 0.3
        //     }
        // },
        // animate: {
        //     scaleX: '100%',
        //     transition: {
        //         delay: 0.3
        //     }
        // }
    }

    const liVar = {
        initial: {
            y: '20vh',
            transition: {
                delay: 0.3
            }
        },
        open: {
            y: 0,
            transition: {
                delay: 1.3
            }
        }
    }

    const containerVar = {
        initial: {
          transition: {
            staggerChildren: 0.19,
            stagerDirection: 1,
          },
        },
        open: {
          transition: {
            staggerChildren: 0.4,
            delayChildren: 0.5,
            stagerDirection: -1
          }
        }
      }

    return (
    <motion.div variants={iconsVar}  className='fixed origin-left p-[2em] top-[100px] font-bold text-black  bg-white' style={{zIndex: 99999, borderTopRightRadius: '50px 50px', borderBottomRightRadius: '50px 50px'}}>
        <motion.div className='relative'>
                <motion.ul className='gap-10 flex justify-center items-center overflow-hidden' initial='initial' animate='open' variants={containerVar}>
                    {/* {subNavs.map(nav => <motion.li variants={liVar} className='overflow-hidden'><motion.a className='font-bold'>{nav}</motion.a></motion.li>)} */}
                    <motion.li variants={liVar} className='overflow-hidden'><motion.a className='font-bold'>nav</motion.a></motion.li>
                    <motion.li variants={liVar} className='overflow-hidden'><motion.a className='font-bold'>nav</motion.a></motion.li>
                    <li><a><FaChevronRight></FaChevronRight></a></li>
                </motion.ul>
        </motion.div>
    </motion.div>
  )
}
