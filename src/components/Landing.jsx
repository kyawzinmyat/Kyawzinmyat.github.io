import '../styles/landing.css'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react'

export default function Landing() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'end start']
  })

  const background = useTransform(scrollYProgress, pos => {
    // return `linear-gradient(to left bottom , rgba(0, 0, 0, .1) 20%,  rgba(0, 0, 0, .8) 20%,  rgba(0, 0, 0, .8) 20%, rgba(160,77,239, ${1 - pos})  100%)`
    // if (pos > 0.25)
    // {
    //   return `radial-gradient(at bottom right, transparent ${(1 - pos) * 100}%, var(--primary-accent-color) ${(1 - pos) * 100}%),  linear-gradient(135deg, black 0%, black 100%)`
    // }
    // return `radial-gradient(at bottom right, transparent ${(1 - 0.25) * 100}%, var(--primary-accent-color) ${(1 - 0.25) * 100}%),  linear-gradient(135deg, black 0%, black 100%)`
    return 'radial-gradient(cyan at center, black 90%, var(--primary-accent-color) 90%)'
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.6], [1, 0.5, 0])
  const gitOpacity = useTransform(scrollYProgress, [0, .3, .6, .7], [0.1, 0.2, .1, 0])

  const iconsVar = {
    open: {
      y: '0vh',
      transition: '0.6s ease-in-out ',
    },
    initial: {
      y: '80vh',
      transition: '0.6s ease'
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
        stagerDirection: -1
      }
    }
  }

  return (
    <motion.div ref={ref} className='box wrapper flex justify-center items-center relative overflow-y-scroll h-[85vh] mb-[200px]'>
      <motion.div style={{ 
      opacity, zIndex: 9099,  
    }}
      transition={{ delay: .2 }}  className='flex justify-center items-center'  >
        <div className='lg:grid lg:grid-cols-1 md:w-8/12 w-10/12 mx-auto my-[4em] grid'>
          <div className='primary-color over p-10 text-center flex flex-col justify-end items-center border-l-2'>
            <motion.div className='md:py-[2em] overflow-hidden py-[8em] text-pop-animation landing-text flex flex-col md:flex-row justify-center items-center' variants={containerVar} initial='initial' animate='open'>
              <div className='w-full text-left'>
                <motion.h1 variants={iconsVar} className='lg:text-2xl over md:text-xl sm:text-lg text-sm header-upper-text font-light'>Who Am I?</motion.h1>
                <motion.p variants={iconsVar} className='my-5 body-text'>I'm an <strong className=''>enthusiastic software developer</strong> who lives in Yangon.</motion.p>
                <motion.p variants={iconsVar} className='text-sm md:text-lg font-md text-gray-400 font-md'>Passionate about creating cutting-edge web applications with both frontend and backend functionality.</motion.p>
              </div>
              <motion.div className='w-full'>
                <motion.div className='flex md:flex-col items-end md:justify-center py-[2em] gap-10 overflow-hidden' >
                  <motion.div variants={iconsVar}>
                    <FaGithub size='50px'></FaGithub>
                  </motion.div>
                  <motion.div variants={iconsVar}>
                    <FaFacebook size='50px'></FaFacebook>
                  </motion.div>
                  <motion.div variants={iconsVar}>
                    <FaLinkedin size='50px'></FaLinkedin>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div style={{opacity: gitOpacity}}>
        <div className='git-body' style={{
          zIndex: -1
        }}>

        </div>
      </motion.div>
    </motion.div>
  )
}

